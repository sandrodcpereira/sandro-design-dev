// video play on hover

$('video').mouseover(function(){
	$(this).get(0).play();
	$('.video-helper').addClass('playing');
});

$('video').mouseout(function(){
	$(this).get(0).pause();
	$('.video-helper').removeClass('playing');
});

// video play on click, for mobile

$('video').click(function(){
	$(this).get(0).play();
	$('.video-helper').addClass('playing');
});

$('video').click(function(){
	$(this).get(0).pause();
	$('.video-helper').removeClass('playing');
});