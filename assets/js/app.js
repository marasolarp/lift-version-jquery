$(document).ready(function() {
/*splash*/
	$('.login').hide();
	setTimeout(function(){
		$('#init-lift').fadeOut(500);
		$('.login').show();
	}, 2000);
});

