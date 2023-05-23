//Хедер скролл sticky
let element = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 53) {
    element.classList.add("header__sticky");
  } else {
    element.classList.remove("header__sticky");
  }
});
//Слайдер для секції main_screen
const swiper = new Swiper(".main_screen__slider", {
  direction: "vertical",
  spaceBetween: 30,
  effect: "flip",
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//Слайдер для секції news 
const swiperNews = new Swiper(".news__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Плавна прокрутка до якоря
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function (e) {

    e.preventDefault();

    let href = this.getAttribute('href').substring(1);
    
    const scrollTarget = document.getElementById(href);
    const topOffset = 70;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
//activeMenu 
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top > offset && top < offset + height){
      navLink.forEach(links => {
        links.classList.remove('active');
        console.log(document.querySelector('header nav a[href*=' + id + ']'))
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};
//Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
});
// Google Map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 40.6686, lng: -73.8999 },
    zoom: 13.5,
    mapId: '2f084b4895741534',
  });

  const marker = new google.maps.Marker({
    position: { lat: 40.6781, lng: -73.8981 },
    map: map,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}

window.initMap = initMap;
