$(document).ready(function () {
	$('.aside__hide').click(function(event){
		$('.aside, .aside__hide, .aside__title, .aside__menu, .main, .profile').toggleClass('passive');
	});
});