// Dockside UI
(() => {
  const status = document.getElementById('orbit-status');
  const cta = document.getElementById('cta-bake');
  if (status) {
    const lat = (Math.random() * 180 - 90).toFixed(2);
    status.textContent = `Stable orbit over ${lat}° — ovens nominal.`;
  }
  if (cta) {
    cta.addEventListener('click', () => {
      cta.textContent = 'Baking…';
      setTimeout(() => { cta.textContent = 'Pastries deployed ✓'; }, 900);
