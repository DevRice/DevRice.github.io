const navLinks = document.querySelectorAll('#navbar a');
let lastNavLink = document.getElementById('homeElement');


function toggleActive() {
	lastNavLink.classList.toggle('linkActive');
	this.classList.toggle('linkActive');
	lastNavLink = this;
}


navLinks.forEach(a => a.addEventListener('click', toggleActive));

// JQuery...

$(document).ready(function () {
	$("#navbar a").click(function () {
		var $href = $(this).attr("href");
		$("body").stop().animate({
			scrollTop: $($href).offset().top
		}, 1000);
		return false;
	});
});
