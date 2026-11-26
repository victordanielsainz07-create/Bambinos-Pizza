/* ═══════════════════════════════════════════
   BAMBINOS PIZZA — Menu Data + Logic
   ═══════════════════════════════════════════ */

'use strict';

// ─── DATA ───
const MENU = {
  pizzas: [
    {
      name: 'Carnes Frias',
      desc: 'Jamón, Salchicha, Peperoni, Salami y Chorizo.',
      img: '../assets/images/PIZZA1.jpeg',
      emoji: '🍕',
      badge: '⭐ Especialidad',
      badgeType: 'hot',
      prices: { personal: 110, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Hawaiana',
      desc: 'Jamón y Piña.',
      img: '../assets/images/PIZZA2.jpeg',
      emoji: '🍕',
      badge: '🔥 La más pedida',
      badgeType: 'hot',
      prices: { personal: 110, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Mexicana',
      desc: 'Chile Morrón, Jalapeño, Elote, Jitomate, Cebolla, Chorizo y Tocino.',
      img: '../assets/images/PIZZA3.jpeg',
      emoji: '🍕',
      badge: '🌶️ Picante',
      badgeType: 'hot',
      prices: { personal: 110, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Combinada',
      desc: 'Jamón, Salchicha, Peperoni, Salami, Chorizo, Aceitunas Negras, Champiñones y Chile Morrón.',
      img: '../assets/images/PIZZA4.jpeg',
      emoji: '🍕',
      badge: 'Mixta',
      prices: { personal: 110, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Peperoni',
      desc: 'Peperoni.',
      img: '../assets/images/PIZZA5.jpeg',
      emoji: '🍕',
      prices: { personal: 110, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Sencilla',
      desc: 'Jamón y Salchicha.',
      img: '../assets/images/PIZZA6.jpeg',
      emoji: '🍕',
      prices: { personal: 110, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Vegetariana',
      desc: 'Nopal, Elote, Morrón, Aceitunas, Jitomate y Cebolla.',
      img: '../assets/images/PIZZA7.jpeg',
      emoji: '🍕',
      badge: 'Vegetariana',
      prices: { personal: 110, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Atún',
      desc: 'Atún, Jitomate, Cebolla, Morrón y Elote.',
      img: '../assets/images/PIZZA8.jpeg',
      emoji: '🍕',
      prices: { personal: 125, chica: 180, mediana: 220, grande: 300, mega: 600 },
    },
    {
      name: 'Camarón',
      desc: 'Camarón, Morrón, Elote, Jitomate y Cebolla.',
      img: '../assets/images/PIZZA9.jpeg',
      emoji: '🍕',
      badge: '⭐ Exclusiva',
      prices: { personal: 125, chica: 220, mediana: 250, grande: 320, mega: 650 },
    },
    {
      name: 'Arrachera',
      desc: 'Carne de Arrachera, Jitomate, Cebolla, Chile Morrón y Elote.',
      img: '../assets/images/PIZZA10.jpeg',
      emoji: '🍕',
      badge: '⭐ Exclusiva',
      prices: { personal: 125, chica: 220, mediana: 250, grande: 320, mega: 650 },
    },
    {
      name: 'Pollo',
      desc: 'Trozos de Pechuga de Pollo, Morrón, Jitomate, Cebolla, Champiñones y Aceituna Negra.',
      img: '../assets/images/PIZZA1.jpeg',
      emoji: '🍕',
      prices: { personal: 125, chica: 220, mediana: 250, grande: 320, mega: 650 },
    },
    {
      name: 'Pizza Personal',
      img: '../assets/images/PIZZA10.jpeg',
      desc: 'De Carnes Frías a Vegetariana, de Atún a Pollo. Tamaño individual.',
      emoji: '🍕',
      badge: '👤 Individual',
      price: 90,
    },
  ],

  hamburguesas: [
    {
      name: 'Clásica de Res',
      desc: 'Carne de res, queso amarillo, lechuga, jitomate, cebolla y ketchup. Con papas.',
      img: '../assets/images/Burger3.jpeg',
      emoji: '🍔',
      price: 100,
    },
    {
      name: 'Hawaiana',
      desc: 'Carne de res, queso mozzarella, camarón, piña, lechuga, jitomate y cebolla. Con papas.',
      img: '../assets/images/Burger3.jpeg',
      emoji: '🍔',
      badge: '🔥 Bestseller',
      badgeType: 'hot',
      price: 125,
    },
    {
      name: 'Pollo Crujiente',
      desc: 'Pechuga de pollo, queso mozzarella, lechuga, jitomate y cebolla. Con papas.',
      img: '../assets/images/Burger4.jpeg',
      emoji: '🍔',
      price: 100,
    },
    {
      name: 'Camarón',
      desc: 'Camarón, queso mozzarella, salsa maggi e inglesa, lechuga, jitomate y cebolla. Con papas.',
      img: '../assets/images/Burger4.jpeg',
      emoji: '🍔',
      price: 110,
    },
    {
      name: 'Arrachera',
      desc: 'Carne arrachera, queso mozzarella, lechuga, jitomate y cebolla. Con papas.',
      img: '../assets/images/Burger3.jpeg',
      emoji: '🍔',
      price: 110,
    },
    {
      name: 'Mar y Tierra',
      desc: 'Carne de res, camarón, queso mozzarella, lechuga, jitomate y cebolla. Con papas.',
      img: '../assets/images/Burger3.jpeg',
      emoji: '🍔',
      badge: '⭐ Especialidad',
      price: 140,
    },
  ],

  alitas: [
    {
      name: 'Búfalo',
      desc: 'Orden de 8 piezas bañadas en salsa búfalo casera. Incluye ranch y apio.',
      img: '../assets/images/Alitas.jpeg',
      emoji: '🍗',
      badge: '🔥 Clásica',
      badgeType: 'hot',
      price: 120,
    },
    {
      name: 'BBQ',
      desc: 'Orden de 8 piezas glaseadas con salsa BBQ ahumada y miel. Incluye ranch.',
      img: '../assets/images/Alitas.jpeg',
      emoji: '🍗',
      price: 120,
    },
    {
      name: 'Mango Habanero',
      desc: 'Orden de 8 piezas con salsa mango habanero artesanal. Dulce y muy picante.',
      img: '../assets/images/Alitas.jpeg',
      emoji: '🍗',
      badge: '🌶️ Muy picante',
      badgeType: 'hot',
      price: 120,
    },
    {
      name: 'Orden de Papas',
      desc: 'Papas a la francesa, crujientes y doradas. Porción individual.',
      emoji: '🍟',
      price: 45,
    },
    {
      name: 'Orden de Panes',
      desc: 'Panes de ajo horneados, perfectos para acompañar.',
      emoji: '🥖',
      price: 45,
    },
  ],

  quesadillas: [
    {
      name: 'Quesadilla Normal',
      desc: 'Tortilla de harina artesanal con queso Oaxaca derretido. Acompañada de guacamole.',
      img: '../assets/images/Quesadilla.jpeg',
      emoji: '🫔',
      price: 60,
    },
    {
      name: 'Quesadilla de Pollo',
      desc: 'Pollo a la plancha, queso Oaxaca, pico de gallo y crema. Con guacamole.',
      img: '../assets/images/Quesadilla.jpeg',
      emoji: '🫔',
      badge: '⭐ Popular',
      price: 75,
    },
    {
      name: 'Quesadilla de Arrachera',
      desc: 'Arrachera a las brasas, queso Oaxaca, rajas y guacamole. La favorita de la casa.',
      img: '../assets/images/Quesadilla.jpeg',
      emoji: '🫔',
      badge: '⭐ Especialidad',
      price: 80,
    },
    {
      name: 'Quesadilla de Camarón',
      desc: 'Camarones al ajillo, queso manchego, chipotle y crema. Acompañada de pico de gallo.',
      img: '../assets/images/Quesadilla.jpeg',
      emoji: '🫔',
      badge: '🌊 Del mar',
      price: 80,
    },
    {
      name: 'Pechuga de Pollo con Ensalada',
      desc: 'Pechuga de pollo a la plancha acompañada de ensalada fresca de la casa.',
      emoji: '🥗',
      price: 90,
    },
  ],

  bebidas: [
    {
      name: 'Agua Fresca',
      desc: 'Jamaica y horchata. Natural y refrescante.',
      emoji: '🍹',
      badge: 'Natural',
      prices: { chica: 30, mediana: 45, grande: 65 },
      isBeverage: true,
    },
    {
      name: 'Refresco',
      desc: 'Coca-Cola, Sprite, Fanta o agua mineral. Lata o botella.',
      emoji: '🥤',
      price: 35,
    },
    {
      name: 'Cerveza',
      desc: 'Corona y Modelo. Fría y servida en tarro.',
      emoji: '🍺',
      price: 55,
    },
    {
      name: 'Vino Tinto / Blanco',
      desc: 'Copa de vino tinto o blanco. Selección de temporada.',
      emoji: '🍷',
      badge: '🍷 Maridaje',
      price: 85,
    },
    {
      name: 'Michelada',
      desc: 'Cerveza clara, limón, salsas y chile en vaso escarchado con sal.',
      emoji: '🍺',
      badge: '🌶️ Picante',
      badgeType: 'hot',
      price: 85,
    },
    {
      name: 'Limonada',
      desc: 'Limón natural recién exprimido, mineral o agua. Endulzada al gusto.',
      emoji: '🍋',
      price: 35,
    },
    {
      name: 'Naranjada Natural',
      desc: 'Jugo de naranja natural recién exprimido.',
      emoji: '🍊',
      price: 35,
    },
    {
      name: 'Naranjada Mineral',
      desc: 'Naranjada con agua mineral, burbujeante y refrescante.',
      emoji: '🍊',
      price: 40,
    },
    {
      name: 'Vaso Kahlúa',
      desc: 'Kahlúa servido en vaso. También disponible por litro.',
      emoji: '🥃',
      prices: { vaso: 70, litro: 140 },
      isBeverage: true,
    },
    {
      name: 'Piñada',
      desc: 'Bebida refrescante de piña, dulce y tropical.',
      emoji: '🍍',
      price: 60,
    },
    {
      name: 'Piña Colada',
      desc: 'Clásica piña colada cremosa, con o sin alcohol.',
      emoji: '🍹',
      badge: '🌴 Tropical',
      price: 80,
    },
    {
      name: 'Café Americano',
      desc: 'Café negro recién preparado.',
      emoji: '☕',
      price: 40,
    },
    {
      name: 'Capuccino',
      desc: 'Café espresso con leche espumada.',
      emoji: '☕',
      price: 55,
    },
    {
      name: 'Frappuccino',
      desc: 'Bebida fría de café estilo frappé, cremosa y refrescante.',
      emoji: '🥤',
      badge: '❄️ Frío',
      price: 65,
    },
    {
      name: 'Jarra de Agua',
      desc: 'Agua de sabor en jarra. Disponible en chica, mediana o grande.',
      emoji: '🍶',
      prices: { chica: 75, mediana: 85, grande: 95 },
      isBeverage: true,
    },
    {
      name: 'Jarra Mineral',
      desc: 'Agua mineral con sabor en jarra. Disponible en chica, mediana o grande.',
      emoji: '🍶',
      prices: { chica: 90, mediana: 100, grande: 110 },
      isBeverage: true,
    },
  ],
};

// ─── RENDER HELPERS ───
function renderPrices(prices) {
  const labels = { personal: 'Pers.', chica: 'Chica', mediana: 'Med.', grande: 'Grande', mega: 'Mega' };
  return Object.entries(prices).map(([size, val]) => `
    <div class="price-tag">
      <span class="price-size">${labels[size] || size}</span>
      <span class="price-val">$${val}</span>
    </div>
  `).join('');
}

function renderBeveragePrices(prices) {
  const labels = { chica: 'Chica', mediana: 'Med.', grande: 'Grande', vaso: 'Vaso', litro: 'Litro' };
  return Object.entries(prices).map(([size, val]) => `
    <div class="price-tag">
      <span class="price-size">${labels[size] || size}</span>
      <span class="price-val">$${val}</span>
    </div>
  `).join('');
}

function createMenuCard(item) {
  const hasSizes   = item.prices && !item.isBeverage;
  const isBeverage = item.isBeverage;
  const singlePrice = item.price;

  const badgeHTML = item.badge
    ? `<span class="menu-item__badge ${item.badgeType === 'hot' ? 'menu-item__badge--hot' : ''}">${item.badge}</span>`
    : '';

  const photoHTML = item.img
    ? `<div class="menu-item__photo"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>`
    : `<div class="menu-item__photo menu-item__photo--emoji">${item.emoji}</div>`;

  const priceHTML = hasSizes
    ? `<div class="menu-item__prices">${renderPrices(item.prices)}</div>`
    : isBeverage
      ? `<div class="menu-item__prices">${renderBeveragePrices(item.prices)}</div>`
      : `<div class="menu-item__single-price">$${singlePrice}</div>`;

  const card = document.createElement('article');
  card.className = 'menu-item';
  card.innerHTML = `
    <div class="menu-item__top">
      ${photoHTML}
      ${badgeHTML}
    </div>
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    ${priceHTML}
  `;
  return card;
}

function populateGrid(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  items.forEach((item, i) => {
    const card = createMenuCard(item);
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`;
    grid.appendChild(card);
  });
}

// ─── POPULATE ALL ───
populateGrid('pizzas-grid',     MENU.pizzas);
populateGrid('burger-grid',     MENU.hamburguesas);
populateGrid('alitas-grid',     MENU.alitas);
populateGrid('quesadilla-grid', MENU.quesadillas);
populateGrid('bebidas-grid',    MENU.bebidas);

// ─── INTERSECTION OBSERVER for cards ───
const menuObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      menuObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-item').forEach(el => menuObs.observe(el));

// ─── TAB FILTER ───
const tabBtns = document.querySelectorAll('.tab-btn');
const menuSections = document.querySelectorAll('.menu-section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    tabBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;

    menuSections.forEach(section => {
      if (filter === 'all' || section.dataset.category === filter) {
        section.classList.remove('hidden');
        if (filter !== 'all') {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        section.classList.add('hidden');
      }
    });
  });
});