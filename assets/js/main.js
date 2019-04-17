/* navabar scroll */
const body = document.getElementById('wiz');
const navScroll = document.getElementById('scrollNav');


const changeNav = () => {
    const yscroll = window.scrollY;
    console.log(yscroll);
    if (yscroll === '100px') {
        navScroll.style.backgroundColor = '#fff';
    }
    return null;
}


body.addEventListener('scroll', changeNav);
