const buttons = document.querySelectorAll('[data-genre]');
const cards = document.querySelectorAll('[data-category]');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const genre = button.dataset.genre;
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach((card) => {
      card.hidden = genre !== 'all' && card.dataset.category !== genre;
    });
    document.getElementById('filter-status').textContent = genre === 'all'
      ? '모든 음악 장르를 표시합니다.'
      : `${button.textContent} 장르를 표시합니다.`;
  });
});
