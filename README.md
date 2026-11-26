# 🍕 Bambinos Pizza — Sitio web empresarial desplegado en AWS EC2

Sitio informativo de **Bambinos Pizza**, pizzería artesanal ubicada en Av. Ocampo #220, Col. Centro, Cihuatlán, Jalisco.
Proyecto académico: diseño, desarrollo y despliegue de un sitio empresarial en un proveedor cloud de clase empresarial (**Amazon Web Services – EC2**).

| | |
|---|---|
| **Sitio en AWS EC2** | http://ec2-23-22-116-217.compute-1.amazonaws.com |
| **IP pública** | 23.22.116.217 |
| **Región / zona** | us-east-1 (Norte de Virginia) / us-east-1c |
| **Instancia** | `bambinos-pizza-web` · t3.micro · Amazon Linux 2023 |
| **Servidor web** | Nginx |
| **Copia de respaldo (Netlify)** | https://bambinos-pizza.netlify.app |

> ⚠️ La IP pública de EC2 es dinámica: si la instancia se detiene y se vuelve a iniciar, AWS asigna otra IP y otro DNS público. Para una dirección fija se debe asociar una **IP elástica**.

---

## 📁 Estructura del proyecto

```
pizzeria/
├── index.html              ← Inicio: hero con eslogan, especialidades, servicios,
│                             historia, ubicación (mapa), contacto y pie de página
├── pages/
│   ├── menu.html           ← Menú completo con precios y filtros por categoría
│   └── reservar.html       ← Reservación de eventos (contacto telefónico)
├── css/
│   ├── tokens.css          ← Variables de diseño (colores, tipografías)
│   ├── base.css            ← Estilos base
│   ├── components.css      ← Componentes (navbar, tarjetas, secciones, footer)
│   ├── animations.css      ← Animaciones y efecto "reveal" al hacer scroll
│   ├── menu.css            ← Estilos de la página de menú
│   └── reservar.css        ← Estilos de la página de reservación
├── js/
│   ├── main.js             ← Navbar, menú hamburguesa, scroll reveal, selector de tamaños
│   └── menu.js             ← Datos del menú, renderizado y filtros
├── assets/images/          ← Logotipos y fotografías reales del negocio
├── deploy/
│   ├── ec2-user-data.sh    ← Script de aprovisionamiento automático de la instancia EC2
│   └── prueba-estres.sh    ← Pruebas de carga con ApacheBench (ab)
├── nginx.conf              ← Configuración Nginx para contenedor (Docker)
├── Dockerfile              ← Imagen nginx:alpine (ejecución local)
└── docker-compose.yml      ← Levanta el sitio en http://localhost:8081
```

Tecnologías: **HTML5, CSS3 y JavaScript** (sin frameworks ni dependencias de npm), Google Fonts (Playfair Display, Cormorant Garamond, DM Sans) y Leaflet + OpenStreetMap para el mapa.

---

## 🎨 Identidad gráfica

| Elemento | Valor |
|---|---|
| Rojo principal | `#c41a00` / `#c8200a` |
| Fondo oscuro | `#0e0500` |
| Títulos | Playfair Display |
| Texto | Cormorant Garamond |
| Interfaz (botones, etiquetas) | DM Sans |
| Logotipo | `assets/images/LOGO-PIZZERIA.png` y `LOGO-PIZZA-BLANCO.jpeg` |

---

## ☁️ Despliegue en AWS EC2 (paso a paso)

1. **Consola de AWS → EC2 → Lanzar instancia**, región *us-east-1*.
2. **Nombre:** `bambinos-pizza-web`.
3. **AMI:** Amazon Linux 2023 (apta para la capa gratuita).
4. **Tipo de instancia:** `t3.micro` (2 vCPU, 1 GiB RAM; apta para la capa gratuita).
5. **Par de claves:** sin par de claves; el acceso administrativo se hace con **EC2 Instance Connect** (llave SSH temporal de 60 s).
6. **Grupo de seguridad** `launch-wizard-1`: entrada **HTTP 80** desde Internet y **SSH 22**.
7. **Detalles avanzados → Datos de usuario:** pegar el contenido de [`deploy/ec2-user-data.sh`](deploy/ec2-user-data.sh). Al primer arranque el script:
   - actualiza el sistema e instala **Nginx** con `dnf`;
   - descarga los archivos del sitio a `/usr/share/nginx/html`;
   - activa compresión **gzip**, oculta la versión de Nginx (`server_tokens off`), agrega **cabeceras de seguridad** (X-Frame-Options, X-Content-Type-Options, Referrer-Policy), **caché de 30 días** para recursos estáticos y **URLs limpias** (`/pages/menu` → `menu.html`);
   - habilita e inicia el servicio (`systemctl enable --now nginx`) y deja bitácora en `/var/log/bambinos-deploy.log`.
8. **Lanzar instancia** y abrir el DNS público por HTTP.

### Verificación
```bash
curl -I http://ec2-23-22-116-217.compute-1.amazonaws.com/
# HTTP/1.1 200 OK · Server: nginx · X-Frame-Options: SAMEORIGIN ...
```

### Alternativa: desplegar desde este repositorio
Una vez publicado el repositorio, en `deploy/ec2-user-data.sh` se puede reemplazar el bloque de descarga por:
```bash
dnf install -y git
git clone https://github.com/<USUARIO>/<REPOSITORIO>.git /tmp/sitio
cp -r /tmp/sitio/{index.html,pages,css,js,assets} /usr/share/nginx/html/
```

---

## 🔥 Prueba de estrés

Ejecutada desde **AWS CloudShell** (misma región) con **ApacheBench** — ver [`deploy/prueba-estres.sh`](deploy/prueba-estres.sh).

| Prueba | Peticiones | Concurrencia | Duración | Peticiones/s | Tiempo medio | p99 | Fallidas |
|---|---|---|---|---|---|---|---|
| 1 · `index.html` | 10 000 | 100 | 1.105 s | 9 050.00 | 11.05 ms | 22 ms | 0 |
| 2 · `index.html` | 20 000 | 500 | 2.575 s | 7 768.23 | 64.37 ms | 162 ms | 0 |
| 3 · imagen 312 KB | 1 000 | 50 | 0.693 s | 1 442.14 | 34.67 ms | 51 ms | 0 |
| 4 · sostenida `index.html` | 542 242 | 200 | 60 s | 9 037.28 | 22.13 ms | 43 ms | 0 |

Las pruebas se hicieron dentro de la red de AWS, por lo que no incluyen la latencia de Internet hacia México.

---

## 🐳 Ejecución local con Docker

```bash
docker compose up -d --build
# Abrir http://localhost:8081
docker compose down
```

---

## 👤 Autor

_(Nombre del estudiante)_ — Tecnológico Superior de Jalisco, campus La Huerta.
