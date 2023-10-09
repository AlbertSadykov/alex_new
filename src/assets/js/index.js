// карусель изображений в материалах
function setupGallery(carousel) {
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  const imgNav = carousel.querySelector('.img__nav');
  const imgThumbs = imgNav.querySelectorAll('.img__thumb');
  let currentIndex = 0;

  function showImage(index) {
    imgThumbs.forEach((img, i) => {
      img.classList.remove('active__image', 'prev', 'next');
      img.style.display = 'none';
      if (i === index) {
        img.style.display = 'block';
        img.classList.add('active__image');
      } else if (i === (index + 1) % imgThumbs.length) {
        img.classList.add('next');
      } else if (i === (index - 1 + imgThumbs.length) % imgThumbs.length) {
        img.classList.add('prev');
      }
    });
  }

  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? imgThumbs.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  });

  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === imgThumbs.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  });

  let startX = 0;
  let currentX = 0;

  imgNav.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });

  imgNav.addEventListener('touchmove', function(e) {
    currentX = e.touches[0].clientX;
  });

  imgNav.addEventListener('touchend', function() {
    if (currentX < startX) {
      nextButton.click();
    } else if (currentX > startX) {
      prevButton.click();
    }
  });

  // Добавляем CSS-переходы
  imgThumbs.forEach(img => {
    img.style.transition = 'opacity 0.5s';
  });

  showImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.materials__carousel');
  carousels.forEach(carousel => {
    setupGallery(carousel);
  });
});

// карусель изображений в материалах



// одинаковая высота блоков
function setMaxHeight() {
  // Получаем все элементы .about__item-content
  const itemContents = document.querySelectorAll('.about__item-content');

  // Инициализируем переменную для хранения максимальной высоты
  let maxHeight = 0;

  // Проходимся по всем элементам и находим максимальную высоту
  itemContents.forEach(itemContent => {
    itemContent.style.height = 'auto'; // Сначала сбрасываем высоту до автоматического расчета
    const height = itemContent.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  // Устанавливаем максимальную высоту для всех элементов .about__item-content
  itemContents.forEach(itemContent => {
    itemContent.style.height = `${maxHeight}px`;
  });
}

// Вызываем функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('load', setMaxHeight);
window.addEventListener('resize', setMaxHeight);

// одинаковая высота блоков




