const navLinks = document.querySelectorAll('#navbar a');
let lastNavLink = document.getElementById('homeElement');


function toggleActive() {
	lastNavLink.classList.toggle('linkActive');
	this.classList.toggle('linkActive');
	lastNavLink = this;
}


navLinks.forEach(a => a.addEventListener('click', toggleActive));