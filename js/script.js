$(document).ready(function () {
	$('.aside__hide').click(function (event) {
		$('.aside, .aside__hide, .aside__title, .aside__menu, .main, .profile, .profile__image, .profile__technical, .decor, .profile__name, .profile__position, .profile__tests-done, .profile__finished-tests').toggleClass('passive');
	});
});