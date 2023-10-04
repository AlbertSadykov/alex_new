var image = document.getElementsByClassName('machine');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,3)'
});

var image = document.getElementsByClassName('thread');
new simpleParallax(image, {
  delay: .2,
	transition: 'cubic-bezier(0,0,0,5)'
});


document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var layersCaption = document.querySelector('.layers__caption');
    var layersCaptionOffsetTop = layersCaption.offsetTop;
    var scrollPosition = window.scrollY;

    if (scrollPosition > layersCaptionOffsetTop) {
      layersCaption.classList.add('hidden');
    } else {
      layersCaption.classList.remove('hidden');
    }
  });
});


