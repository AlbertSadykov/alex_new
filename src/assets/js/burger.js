// мобильное меню
document.addEventListener('DOMContentLoaded', function() {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.mobile__nav');
  let menuItem = document.querySelectorAll('.nav__link');

  function toggleMenu() {
    menuBtn.classList.toggle('active__burger');
    menu.classList.toggle('active__burger');
  }

  menuBtn.addEventListener('click', toggleMenu);

  menuItem.forEach(function(menuItem) {
    menuItem.addEventListener('click', toggleMenu);
  });

  // Добавляем обработчик событий для скрытия меню при клике вне его
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideButton = menuBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideButton) {
      menuBtn.classList.remove('active__burger');
      menu.classList.remove('active__burger');
    }
  });

  // Добавляем обработчик события для скрытия меню при попытке скролла
  document.addEventListener('scroll', function() {
    menuBtn.classList.remove('active__burger');
    menu.classList.remove('active__burger');
  });
});
