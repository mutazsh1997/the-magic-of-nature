let nav_icon = document.getElementById('nav-bar');
let nav_bar = document.getElementsByClassName('nav__center')[0];

(function navBar() {

    nav_icon.addEventListener('click', function () {
        closeNav();
    });


})();


(function smoothScroll() {

    $('.nav__link, .main_btn, .scroll').click(function (e) {

        var target = $($(this).attr('href')).offset().top;


        $('html, body').animate({
            scrollTop: target
        }, 1000);
        if (this.classList.contains('nav__link')) {
            console.log(this);
            closeNav()
        }
    });

})();

function closeNav() {
    if (nav_bar.classList.contains('hidden-phone')) {

        nav_icon.classList.remove('fa-bars');
        nav_icon.classList.add('fa-times');

        nav_bar.classList.remove('hidden-phone');
        nav_bar.classList.remove('close');

    } else {
        nav_bar.classList.add('close');

        nav_icon.classList.remove('fa-times');
        nav_icon.classList.add('fa-bars');

        setTimeout(() => {
            nav_bar.classList.add('hidden-phone');
        }, 500);
    }
}
