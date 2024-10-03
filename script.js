document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const title = document.querySelector('.logo-container h1');

    if (logo) {
        logo.addEventListener('click', scrollToTop);
    }
    if (title) {
        title.addEventListener('click', scrollToTop);
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
