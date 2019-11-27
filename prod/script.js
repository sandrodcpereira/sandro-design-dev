// layout component loader

$(function(){
	$("header").load("layout/header.html"); 
	$("footer").load("layout/footer.html"); 
	$("nav").load("layout/nav.html"); 
});

// hide play prototype button when clicked

$(function(){
	$('.play-trigger').click(function(){
		$(this).fadeOut();
	});
});

// video play on hover

/*
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

*/
