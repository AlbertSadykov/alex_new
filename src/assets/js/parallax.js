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
  
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var translateY = Math.min(scrollY, 100);
    machine.style.backgroundPosition = '0 ' + (280 - translateY) + 'px';

    if (scrollY >= 50) {
      gradient.style.opacity = '1';
    } else {
      gradient.style.opacity = '0';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var thread = document.querySelector('.thread');
  
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var translateY = Math.min(scrollY, 100);
    thread.style.transform = 'translateY(' + (-translateY) + 'px)';
  });
});




// скролл cta
document.addEventListener('DOMContentLoaded', function() {
  var ctaSection = document.querySelector('.section_cta');
  var atTop = true; // Флаг для отслеживания, находится ли пользователь в самом верху страницы

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        ctaSection.style.marginTop = '-280px';
        atTop = false; // Пользователь не находится в самом верху страницы
      } else {
        if (atTop) {
          ctaSection.style.marginTop = '0';
        }
      }
    });
  }, { threshold: [0.5] }); // Здесь threshold изменен на [1], чтобы обработчик сработал, когда элемент полностью виден

  observer.observe(ctaSection);

  // Обработчик события для отслеживания прокрутки страницы
  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      atTop = true; // Пользователь находится в самом верху страницы
      ctaSection.style.marginTop = '0'; // Возвращаем на исходное положение
    }
  });
});


