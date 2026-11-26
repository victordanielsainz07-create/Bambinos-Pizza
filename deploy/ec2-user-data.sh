#!/bin/bash
# Bambinos Pizza - aprovisionamiento automatico de EC2 (Amazon Linux 2023)
set -e
dnf update -y
dnf install -y nginx

WEB=/usr/share/nginx/html
SRC=https://bambinos-pizza.netlify.app
rm -rf $WEB/*
mkdir -p $WEB/css $WEB/js $WEB/pages $WEB/assets/images

FILES="index.html pages/menu.html pages/reservar.html
css/animations.css css/base.css css/components.css css/menu.css css/reservar.css css/tokens.css
js/main.js js/menu.js
assets/images/AREA-INF.png assets/images/Alitas.jpeg assets/images/BANQUETES.png
assets/images/Buerger.jpeg assets/images/Buerger2.jpeg assets/images/Burger3.jpeg assets/images/Burger4.jpeg
assets/images/E.png assets/images/LOGO-PIZZA-BLANCO.jpeg assets/images/LOGO-PIZZERIA.png
assets/images/PIZZA1.jpeg assets/images/PIZZA2.jpeg assets/images/PIZZA3.jpeg assets/images/PIZZA4.jpeg
assets/images/PIZZA5.jpeg assets/images/PIZZA6.jpeg assets/images/PIZZA7.jpeg assets/images/PIZZA8.jpeg
assets/images/PIZZA9.jpeg assets/images/PIZZA10.jpeg assets/images/Quesadilla.jpeg
assets/images/SER-DOM.png assets/images/SRVICIO-A-MESA.png assets/images/TERMINAL.png assets/images/WIFIZONE.png"

for f in $FILES; do
  curl -fsSL "$SRC/$f" -o "$WEB/$f" || echo "FALTA: $f" >> /var/log/bambinos-deploy.log
done

# Compresion gzip (nivel http)
cat > /etc/nginx/conf.d/bambinos.conf <<'EOF'
gzip on;
gzip_types text/plain text/css application/javascript image/svg+xml;
gzip_min_length 256;
server_tokens off;
EOF

# Cabeceras de seguridad y cache (dentro del server por defecto)
cat > /etc/nginx/default.d/bambinos.conf <<'EOF'
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
location / {
    try_files $uri $uri/ $uri.html =404;
}
location ~* \.(css|js|png|jpe?g|webp|svg|ico)$ {
    expires 30d;
    add_header Cache-Control "public";
}
EOF

# Quitar el comentario que Netlify inyecta en los HTML
perl -0pi -e 's/<!-- This site is hosted on Netlify.*?-->\n//s' $WEB/index.html $WEB/pages/*.html

chown -R nginx:nginx $WEB
nginx -t
systemctl enable --now nginx
echo "Despliegue terminado $(date)" >> /var/log/bambinos-deploy.log
