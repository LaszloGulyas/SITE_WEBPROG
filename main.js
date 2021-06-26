document.addEventListener('DOMContentLoaded', () => {

    const navToggle = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.main-page-navbar-content ul');
    const navLinks = document.querySelectorAll('.main-page-navbar-content a');

    allEventListeners();

// event listener funkciok
    function allEventListeners() {
        navToggle.addEventListener('click', toggleClick);
        navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
    }

// toggleClick funkciok
    function toggleClick() {
        navToggle.classList.toggle('toggle-open');
        navMenu.classList.toggle('open');
    }

// navLinkClick funkciok
    function navLinkClick() {
        if (navMenu.classList.contains('open')) {
            navToggle.click();
        }
    }
})

function switchBodyContent(pageLink) {
    const mainBody = document.querySelector('.main-page-body-content');
    mainBody.innerHTML = '<object type="text/html"' +
        'data="' + pageLink + '"' +
        'class="main-page-body-content-faded" id="loaded-content"></object>';
    document.getElementById("loaded-content").style.opacity = "1";
}
