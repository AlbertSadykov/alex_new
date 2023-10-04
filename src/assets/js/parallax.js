var image = document.getElementsByClassName('machine');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,3)'
});

var image = document.getElementsByClassName('thread');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});