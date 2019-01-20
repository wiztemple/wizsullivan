/* navabar scroll */
window.addEventListener('scroll', () => {
    const yscroll = window.scrollY;
    const navScroll = document.getElementById('scrollNav');
    console.log(yscroll);
    if (yscroll === '50px') {
        navScroll.style.backgroundColor = '#fff';
    }
    return null;
});