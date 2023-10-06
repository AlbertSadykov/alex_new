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
