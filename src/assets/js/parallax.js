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

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        ctaSection.style.marginTop = '-250px';
      } else {
        ctaSection.style.marginTop = '0';
      }
    });
  }, { threshold: [0] });

  observer.observe(ctaSection);
});
