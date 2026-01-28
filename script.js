fetch("footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer-container").innerHTML = data;
});

const cards = document.querySelectorAll('.card');
const overlay = document.querySelector('.modal-overlay');

cards.forEach(card => {
  const closeBtn = card.querySelector('.close-card');

  card.addEventListener('click', () => {
    if (!card.classList.contains('active')) {
      card.classList.add('active');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
});

// Закриття по кліку на затемнений фон
overlay.addEventListener('click', () => {
  document.querySelectorAll('.card.active').forEach(activeCard => {
    activeCard.classList.remove('active');
  });
  overlay.style.display = 'none';
  document.body.style.overflow = '';
});
