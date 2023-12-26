window.addEventListener("load", () => {
    toggleMobileNav();
});

function toggleMobileNav() {
    const burger = document.getElementById('burger');
    const mobileNavContainer = document.getElementById('mobile-nav');

    burger.addEventListener('click', function () {
        burger.classList.toggle('burger-open');
        mobileNavContainer.classList.toggle('mobile-nav-open')
    })
}
