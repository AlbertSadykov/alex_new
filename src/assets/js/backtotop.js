document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('back-to-top');

  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          button.style.display = 'block';
      } else {
          button.style.display = 'none';
      }
  };

  button.addEventListener('click', function() {
      scrollToTop(1000);
  });

  function scrollToTop(duration) {
      var start = window.pageYOffset;
      var startTime = null;

      function animation(currentTime){
          if (startTime === null) startTime = currentTime;
          var timeElapsed = currentTime - startTime;
          var run = ease(timeElapsed, start, -start, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
          else scrollTo(0, 0); // После завершения анимации прокрутки наверх, прокрутите еще на один пиксель вверх
      }

      function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
  }
});
