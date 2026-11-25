// Cambia el proyecto mostrado al tocar una tarjeta
const tarjetas = document.querySelectorAll('.proyecto');
const detalles = document.querySelectorAll('.detalle');

function mostrarProyecto(id) {
  tarjetas.forEach(t => t.setAttribute('aria-pressed', t.dataset.id === id));
  detalles.forEach(d => { d.hidden = d.id !== 'detalle-' + id; });
}

tarjetas.forEach(t => t.addEventListener('click', () => mostrarProyecto(t.dataset.id)));