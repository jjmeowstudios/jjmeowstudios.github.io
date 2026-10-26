'use strict';
const modesEs = {
 classic: { kicker: 'CADA HUECO ES UNA OPORTUNIDAD', title: 'Tu siguiente récord<br>empieza con una pieza.', description: 'Coloca los bloques, completa filas y columnas y encadena combos para sumar puntos. Piensa tu siguiente movimiento y mantén el tablero abierto para seguir jugando.', features: ['Completa filas y columnas', 'Encadena combos y suma puntos', 'Supera tu mejor marca'], caption: 'EXPLORA EL MODO CLÁSICO', alt: 'Tablero azul del modo Clásico con un combo de bloques' },
 adventure: { kicker: 'CADA NIVEL, UN DESCUBRIMIENTO', title: 'Mucho más que<br>romper bloques.', description: 'Recoge gemas y diamantes, encuentra objetos ocultos y completa los objetivos de cada nivel. En Aventura, cada tablero te propone un nuevo desafío.', features: ['Objetivos de bloques, puntos y objetos', 'Gemas, cofres y sorpresas por descubrir', 'Avanza nivel a nivel por las temporadas'], caption: 'EXPLORA EL MODO AVENTURA', alt: 'Tablero verde del modo Aventura con gemas y cofres' },
 puzzle: { kicker: 'PARA ESE MOMENTO DE «¡LO TENGO!»', title: 'Cada pieza tiene<br>su lugar.', description: 'Observa el tablero, ten en cuenta los obstáculos y encuentra cómo encajar las piezas. Elige entre cinco dificultades y disfruta resolviendo cada desafío a tu ritmo.', features: ['Tableros para resolver con lógica', 'Cinco niveles de dificultad', 'Pistas para cuando necesitas otra mirada'], caption: 'EXPLORA EL MODO PUZZLE', alt: 'Tablero morado del modo Puzzle con piezas y obstáculos' }
};
const modesEn = {
 classic: { kicker: 'EVERY SPACE IS AN OPPORTUNITY', title: 'Your next high score<br>starts with one piece.', description: 'Place blocks, complete rows and columns and build combos to score points. Plan your next move and keep space on the board to keep playing.', features: ['Complete rows and columns', 'Build combos and score points', 'Beat your personal best'], caption: 'EXPLORE CLASSIC MODE', alt: 'Blue Classic board with a block combo' },
 adventure: { kicker: 'A DISCOVERY IN EVERY LEVEL', title: 'More than just<br>clearing blocks.', description: 'Collect gems and diamonds, uncover hidden objects and complete each level’s goals. In Adventure, every board brings a new challenge.', features: ['Goals for blocks, points and hidden objects', 'Gems, treasures and surprises to discover', 'Progress through seasonal levels'], caption: 'EXPLORE ADVENTURE MODE', alt: 'Green Adventure board with gems and treasures' },
 puzzle: { kicker: 'FOR THAT “GOT IT!” MOMENT', title: 'Every piece has<br>its place.', description: 'Study the board, account for the obstacles and figure out how the pieces fit. Choose from five difficulty levels and solve each challenge at your own pace.', features: ['Boards to solve with logic', 'Five difficulty levels', 'Hints when you need a fresh perspective'], caption: 'EXPLORE PUZZLE MODE', alt: 'Purple Puzzle board with pieces and obstacles' }
};
const language = document.documentElement.lang === "es" ? "es" : "en";
const modes = language === "es" ? modesEs : modesEn;
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectMode(tab, focus = false) {
 const key = tab.dataset.mode, mode = modes[key];
 tabs.forEach(item => { const selected = item === tab; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; });
 const panel = document.getElementById('mode-panel');
 panel.className = `mode-panel ${key}`;
 panel.setAttribute('aria-labelledby', tab.id);
 document.getElementById('mode-kicker').textContent = mode.kicker;
 document.getElementById('mode-title').innerHTML = mode.title;
 document.getElementById('mode-description').textContent = mode.description;
 document.getElementById('mode-features').replaceChildren(...mode.features.map(text => {const li = document.createElement('li'); li.textContent = text; return li;}));
 const image = document.getElementById('mode-image'); image.src = `/images/brainbloq/${language}/${key}.png`; image.alt = mode.alt;
 if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
 tab.addEventListener('click', () => selectMode(tab));
 tab.addEventListener('keydown', event => {
  let next;
  if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
  if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = tabs.length - 1;
  if (next !== undefined) { event.preventDefault(); selectMode(tabs[next], true); }
 });
});
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll("[data-language]").forEach(link => link.addEventListener("click", () => { try { localStorage.setItem("brainbloq-language", link.dataset.language); } catch {} }));
