// layout component loader

$(function(){
	$("header").load("layout/header.html"); 
	$("footer").load("layout/footer.html"); 
	$("nav").load("layout/nav.html"); 
});


// open menu mobile

$(document).on('click', '#menu-toggle, :not(nav)', function() {
	$('nav').toggleClass("open");
	console.log('wtf man');
});

// active menu item

/* $(function(){
		var current = location.pathname;
		$('nav a').each(function(){
				var $this = $(this);
				// if the current path is like this link, make it active
				if($this.attr('href').indexOf(current) !== -1){
						$this.addClass('active');
				}
		})
}) */




$(function(){
	var pathname = window.location.pathname; // Returns path only (/path/example.html)
	console.log(pathname, "Hello, world!");
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
