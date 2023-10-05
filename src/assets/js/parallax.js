let lastScrollPosition = window.pageYOffset;

function handleScroll() {
  const currentScrollPosition = window.pageYOffset;
  const header = document.querySelector('.layer__header');

  if (currentScrollPosition > lastScrollPosition) {
    // Скролл вниз
    header.classList.add('hidden');
  } else {
    // Скролл вверх
    header.classList.remove('hidden');
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
  var machine = document.querySelector('.machine');
  
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var translateY = Math.min(scrollY, 200);
    var backgroundPositionY = Math.max(280 - translateY, 0); // Убедимся, что значение не становится отрицательным
    machine.style.backgroundPositionY = backgroundPositionY + 'px';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var machine = document.querySelector('.machine');
  var gradient = document.querySelector('.gradient');
  
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var translateY = Math.min(scrollY, 100);
    machine.style.backgroundPosition = '0 ' + (280 - translateY) + 'px';

    if (scrollY >= 100) {
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
  var sectionCta = document.querySelector('.section_cta');

  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var sectionCtaOffset = sectionCta.offsetTop;
    var windowHeight = window.innerHeight;

    if (scrollY > sectionCtaOffset - windowHeight + 100) {
      sectionCta.style.opacity = '1';
      sectionCta.style.transform = 'translateY(0)';
    }
  });
});

