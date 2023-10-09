let lastScrollPosition = window.pageYOffset;

function handleScroll() {
  const currentScrollPosition = window.pageYOffset;
  const header = document.querySelector('.layer__header');

  if (currentScrollPosition > lastScrollPosition) {
    // Скролл вниз
    header.classList.add('hidden');
  } else {
    // Скролл вверх
    if (currentScrollPosition === 0) {
      header.classList.remove('hidden');
    }
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);




document.addEventListener('DOMContentLoaded', function() {
  var machine = document.querySelector('.machine');
  var gradient = document.querySelector('.gradient');
  var thread = document.querySelector('.thread');
  var ctaSection = document.querySelector('.section_cta');

  function handleScroll() {
    var scrollY = window.scrollY;
    var translateY = Math.min(scrollY, 100);

    machine.style.backgroundPosition = '0 ' + (280 - translateY) + 'px';
    thread.style.transform = 'translateY(' + (-translateY) + 'px)';

    if (scrollY >= 50) {
      gradient.style.opacity = '1';
    } else {
      gradient.style.opacity = '0';
    }

    if (window.innerWidth < 991) {
      if (scrollY === 0) {
        ctaSection.style.marginTop = '0';
      } else {
        ctaSection.style.marginTop = '-280px';
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll); // Добавляем обработчик изменения размера окна
});



// скролл cta
document.addEventListener('DOMContentLoaded', function() {
  var ctaSection = document.querySelector('.section_cta');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        ctaSection.style.marginTop = '-280px';
      } else {
        // Проверяем, находится ли страница в самом верху
        if (window.scrollY === 0) {
          ctaSection.style.marginTop = '0';
        }
      }
    });
  }, { threshold: [0.5] });

  observer.observe(ctaSection);

  // Добавляем обработчик события прокрутки
  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      ctaSection.style.marginTop = '0';
    }
  });
});