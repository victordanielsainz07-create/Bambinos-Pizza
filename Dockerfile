FROM nginx:alpine

# Copiar archivos del sitio
COPY . /usr/share/nginx/html

# Configuración Nginx optimizada para SPA / multi-page
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Puerto
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost/index.html || exit 1
