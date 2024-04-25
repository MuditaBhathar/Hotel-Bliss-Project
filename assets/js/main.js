
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu')
		})
	}
}
showMenu('nav-toggle', 'nav-menu')


const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader() {
	const nav = document.getElementById('header')
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


let donations = 0;
let selected = false;
let selId = 0;
function setValue(element) {
	let val = element;
	if (!selected) {
		val.style.background = "#3671f0";
		val.style.color = "#fff";
		selId = val;
		selected = true;
	} else {
		selId.style.background = "#3671f0";
		val.style.background = "#3671f0";
		val.style.color = "#fff";
		selId = val;
	}
}


document.addEventListener('DOMContentLoaded', function () {
  const tabLinks = document.querySelectorAll('.service-menu-area ul.nav li a');
  const tabContent = document.querySelectorAll('.tab-pane');

  tabLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

     
      tabLinks.forEach(function (item) {
        item.classList.remove('active');
      });

      link.classList.add('active');

   
      tabContent.forEach(function (tab) {
        tab.classList.remove('active', 'show');
      });

      
      const tabId = link.getAttribute('href').replace('#', '');
      document.getElementById(tabId).classList.add('active', 'show');
    });
  });
});
