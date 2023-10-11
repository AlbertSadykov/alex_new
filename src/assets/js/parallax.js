// анимация заголовка сайта
let lastScrollPosition = window.pageYOffset;

function handleScroll() {
  const currentScrollPosition = window.pageYOffset;
  const header = document.querySelector('.layer__header');

  if (currentScrollPosition > lastScrollPosition) {
    // Скролл вниз
    header.classList.add('hidden');
  } else {
    // Скролл вверх
    if (currentScrollPosition <= 0) {
      header.classList.remove('hidden');
    }
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);
// анимация заголовка сайта





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

    if (window.innerWidth < 1600) {
      if (scrollY === 0) {
        ctaSection.style.marginTop = '0';
        
      } else {
        ctaSection.style.marginTop = '-200px';
        thread.style.transform = 'translateY(-100px)';
      }
    }

    if (window.innerWidth < 1400) {
      if (scrollY === 0) {
        ctaSection.style.marginTop = '0';
        
      } else {
        ctaSection.style.marginTop = '-150px';
        thread.style.transform = 'translateY(-100px)';
      }
    }

    if (window.innerWidth < 991) {
      if (scrollY === 0) {
        ctaSection.style.marginTop = '0';
        
      } else {
        ctaSection.style.marginTop = '-280px';
        thread.style.transform = 'translateY(-300px)';
      }
    }


    
    if (window.innerWidth < 757) {
      if (scrollY === 0) {
        ctaSection.style.marginTop = '0';
      } else {
        ctaSection.style.marginTop = '-110px';
        thread.style.transform = 'translateY(-170px)';
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll); // Добавляем обработчик изменения размера окна
});





document.addEventListener('DOMContentLoaded', function() {
  var ctaSection = document.querySelector('.section_cta');
  var hasScrolled = false;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !hasScrolled) {
        ctaSection.style.marginTop = '-280px';
      }
    });
  }, { threshold: [0.5] });

  observer.observe(ctaSection);

  // Добавляем обработчик события прокрутки
  window.addEventListener('scroll', function() {
    if (!hasScrolled && window.innerWidth < 757) {
      ctaSection.style.marginTop = '-110px';
      hasScrolled = true;
    } else if (window.scrollY === 0 && window.innerWidth >= 757) {
      ctaSection.style.marginTop = '0';
      hasScrolled = false; // Возвращаем переменную hasScrolled в исходное состояние
    }
  });
});
