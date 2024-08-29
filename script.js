document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const title = document.querySelector('.logo-container h1');

    logo.addEventListener('click', scrollToTop);
    title.addEventListener('click', scrollToTop);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
