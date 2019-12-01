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
		$('video').get(0).play();
	});

	$('video').on('ended',function(){
		$('.play-trigger').fadeIn();
	});
});
