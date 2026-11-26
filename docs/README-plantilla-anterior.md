# 🍕 La Piazza Roja — Sitio Web

Sitio web completo para pizzería. Frontend puro: HTML + CSS + JavaScript. Sin dependencias de npm. Se sirve con Nginx en Docker.

---

## 📁 Estructura del Proyecto

```
pizzeria/
│
├── index.html              ← Página principal (Home/Dashboard)
├── pages/
│   ├── menu.html           ← Menú completo con filtros
│   └── reservar.html       ← Formulario de reserva de eventos
│
├── css/
│   ├── main.css            ← Sistema de diseño + todos los estilos
│   ├── animations.css      ← Keyframes + reveal scroll
│   ├── menu.css            ← Estilos exclusivos del menú
│   └── reservar.css        ← Estilos del formulario
│
├── js/
│   ├── main.js             ← Navbar, scroll reveal, hamburger, pizza sizes
│   └── menu.js             ← Data del menú + renderizado + filtros
│
├── assets/                 ← (vacío) Aquí van logos, fotos, iconos
│
├── Dockerfile              ← Imagen Nginx Alpine
├── docker-compose.yml      ← Levanta el sitio en localhost:8080
├── nginx.conf              ← Config Nginx (gzip, cache, seguridad)
└── .dockerignore
```

---

## 🗺️ Arquitectura de Páginas

```
┌─────────────────────────────────────────────┐
│                  index.html                  │
│                                              │
│  [NAVBAR]  Logo | Menú | Servicios | Reservar│
│                                              │
│  [HERO]    Título + CTA + Badge +50 variedades│
│                                              │
│  [MARQUEE] Ticker animado de categorías      │
│                                              │
│  [FEATURED] Grid 4 cards (especialidades)   │
│             └─ Selector de tamaños en pizza  │
│                                              │
│  [SERVICIOS] 6 cards: domicilio, mesa,      │
│              eventos, infantil, parking, pago│
│                                              │
│  [STORY]   Visual izq. + texto der.          │
│            └─ Stats: 12 años, 4.9★           │
│                                              │
│  [UBICACIÓN] Info contacto + Croquis SVG     │
│                                              │
│  [CONTACTO] CTA WhatsApp + Tel + Reservar   │
│             + Redes sociales                 │
│                                              │
│  [FOOTER]  Logo + Nav + Copyright           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│               pages/menu.html                │
│                                              │
│  [HERO MINI]  Título de sección             │
│                                              │
│  [TABS]  Todo | Pizzas | Hamburguesas |     │
│          Alitas | Quesadillas | Bebidas      │
│  (sticky al scroll)                          │
│                                              │
│  [SECCIONES] Una por categoría:             │
│  ├── Pizzas    (8 pizzas, 5 tamaños c/u)    │
│  ├── Hamburguesas (4 items)                  │
│  ├── Alitas (4 sabores)                      │
│  ├── Quesadillas (4 tipos)                   │
│  └── Bebidas (4 items)                       │
│                                              │
│  [CTA] WhatsApp + Llamar                    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│             pages/reservar.html              │
│                                              │
│  [LEFT]  Info del servicio de eventos       │
│          + 4 características + contacto      │
│                                              │
│  [RIGHT] Formulario:                        │
│          Nombre, Tel, Email, # personas,     │
│          Fecha, Tipo de evento, Mensaje      │
│          → Submit → Pantalla de éxito        │
└─────────────────────────────────────────────┘
```

---

## 🚀 Correr con Docker

```bash
# 1. Construir y levantar
docker compose up -d --build

# 2. Ver en navegador
open http://localhost:8080

# 3. Ver logs
docker compose logs -f

# 4. Detener
docker compose down
```

---

## 🎨 Sistema de Diseño

| Token | Valor |
|-------|-------|
| `--clr-bg` | `#0e0500` (negro carbón) |
| `--clr-red` | `#c8200a` (rojo fuego) |
| `--clr-gold` | `#c88200` (dorado) |
| `--font-display` | Playfair Display (títulos) |
| `--font-body` | Cormorant Garamond (texto) |
| `--font-ui` | DM Sans (botones, etiquetas) |

---

## 📈 Para Escalar

| Necesidad | Agregar |
|-----------|---------|
| CMS para el menú | Directus o Strapi como backend |
| Formulario real | EmailJS (gratis) o Formspree |
| Dominio + SSL | Cloudflare + GitHub Pages o VPS |
| Analytics | Google Analytics o Plausible |
| Imágenes reales | Reemplazar emojis en `.food-emoji` con `<img>` |
| Más páginas | Duplicar patrón HTML + agregar al nav |
| TypeScript | Renombrar `.js` a `.ts`, compilar con `tsc` |
| React | Migrar componentes a `.jsx`, usar Vite |

---

## 🌐 GitHub Pages (sin Docker)

```bash
git init
git add .
git commit -m "feat: sitio web La Piazza Roja"
git remote add origin https://github.com/TU_USUARIO/piazza-roja.git
git push -u origin main
# Activar GitHub Pages → Settings → Pages → Source: main branch
```

---

## ✅ Checklist antes de publicar

- [ ] Cambiar nombre de pizzería (buscar "La Piazza Roja")
- [ ] Actualizar número de teléfono / WhatsApp
- [ ] Actualizar dirección y horarios
- [ ] Reemplazar precios con los reales (en `js/menu.js`)
- [ ] Agregar fotos reales en `assets/`
- [ ] Conectar formulario con servicio real (EmailJS / Formspree)
- [ ] Agregar Google Analytics
- [ ] Configurar dominio propio
