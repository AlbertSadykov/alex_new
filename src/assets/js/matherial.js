$(document).ready(function() {
  $('.materials__item').hide(); // Скрываем все materials__item

  $('#' + $('.materials__names li.math__active').data('target')).fadeIn(); // Показываем первый элемент

  $('.materials__names li').click(function() {
    var targetItemId = $(this).data('target');

    $('.materials__names li').removeClass('math__active');
    $(this).addClass('math__active');

    var $targetItem = $('#' + targetItemId);

    // Плавно скрываем остальные элементы и затем показываем целевой элемент
    $('.materials__item').not($targetItem).fadeOut(300);
    $targetItem.delay(300).fadeIn(300);
  });
});


// Проверяем, соответствует ли текущая ширина экрана условию
if (window.matchMedia('(max-width: 991px)').matches) {
  // Если условие выполняется, выполняем перемещение блоков
  const namesList = document.querySelectorAll('.materials__names li');
  const itemsList = document.querySelectorAll('.materials__item');

  namesList.forEach((name, index) => {
    const targetId = name.getAttribute('data-target');
    const targetItem = document.getElementById(targetId);
    name.parentNode.insertBefore(targetItem, name.nextSibling);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.matchMedia('(max-width: 991px)').matches) {
    const carousel = document.getElementById('carousel');
    const hammer = new Hammer(carousel);

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    hammer.on('swipeleft swiperight', function(ev) {
      ev.preventDefault(); // Предотвращаем действие по умолчанию (например, прокрутку страницы)
    });
  }
});
