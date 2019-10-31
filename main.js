const burger = document.getElementById('hamburger')
const nav = document.getElementById('nav')
const secretnav = document.getElementById('secret-nav')
const links = document.querySelectorAll('.slink')

console.log(links);


// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 667px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}


function WidthChange(mq) {
  if (mq.matches) {
    console.log('its smaller than 667');
    nav.style.display = 'none';
    burger.style.display = 'block';

  } else {
    console.log('its bigger than 667');
    nav.style.display = '';
    burger.style.display = '';

  }

}
