// Header
window.addEventListener('scroll', onScroll);

function onScroll() {
    const currentPos = window.scrollY;
    const navLinks = document.querySelectorAll('.nav__link');
    const navAnchors = document.querySelectorAll('.btn__nav');

    navLinks.forEach(item => {
        if (item.offsetTop <= currentPos + 1) {
          navAnchors.forEach(link => {
            link.classList.remove('selected');
            if (item.getAttribute('id') === link.getAttribute('href').substring(1)) {
              link.classList.add('selected');
            }
          });
        } 
        
        if (currentPos >= 2580) {
          document.getElementById('btn__contact').classList.add('selected');
          document.getElementById('btn__about').classList.remove('selected');
        }
    });
}

// Slider

const prev = document.getElementsByClassName('prev');
const next = document.getElementsByClassName('next');
const slide1 = document.getElementById('slide_1');
const slide2 = document.getElementById('slide_2');

//
prev[0].addEventListener('click', function() {

  if (slide1.classList.contains('move-right')) { slide1.classList.remove('move-right'); }
  if (slide1.classList.contains('red-position-left')) { slide1.classList.remove('red-position-left'); }
  if (slide1.classList.contains('blue-position-left')) { slide1.classList.remove('blue-position-left'); }

  if (slide2.classList.contains('move-right')) { slide2.classList.remove('move-right'); }
  if (slide2.classList.contains('red-position-left')) { slide2.classList.remove('red-position-left'); }
  if (slide2.classList.contains('blue-position-left')) { slide2.classList.remove('blue-position-left'); }
  

  if (slide1.classList.contains('move-left')) { slide1.classList.remove('move-left'); }
  if (slide1.classList.contains('red-position-right')) { slide1.classList.remove('red-position-right'); }

  setTimeout(function() {
    slide2.classList.toggle('blue-position-right');
    slide2.classList.toggle('move-left');
  }, 10);

  setTimeout(function() {
    slide1.classList.toggle('move-left');
  }, 10);
});

//
prev[1].addEventListener('click', function() {

  if (slide1.classList.contains('move-right')) { slide1.classList.remove('move-right'); }
  if (slide1.classList.contains('red-position-left')) { slide1.classList.remove('red-position-left'); }
  if (slide1.classList.contains('blue-position-left')) { slide1.classList.remove('blue-position-left'); }

  if (slide2.classList.contains('move-right')) { slide2.classList.remove('move-right'); }
  if (slide2.classList.contains('red-position-left')) { slide2.classList.remove('red-position-left'); }
  if (slide2.classList.contains('blue-position-left')) { slide2.classList.remove('blue-position-left'); }

  setTimeout(function() {
  if (!slide1.classList.contains('move-left')) { slide1.classList.add('move-left'); }
  slide1.classList.toggle('red-position-right');
  slide1.classList.toggle('move-left');
  }, 1);

  setTimeout(function() {
    slide1.classList.toggle('move-left');
  }, 100);

  setTimeout(function() {
  if (!slide2.classList.contains('move-left')) { slide2.classList.add('move-left'); }
  if (!slide2.classList.contains('blue-position-right')) { slide2.classList.add('blue-position-right'); }
  slide2.classList.toggle('move-left'); 
  slide2.classList.toggle('blue-position-right');
  slide2.classList.toggle('blue-position-center');  
  }, 2);

  setTimeout(function() {
    slide2.classList.toggle('move-left'); 
  }, 100);

  setTimeout(function() {
    slide2.classList.toggle('blue-position-center');
    slide2.classList.toggle('move-left'); 
  }, 600);
 });

//
next[0].addEventListener('click', function() {

  if (slide1.classList.contains('move-left')) { slide1.classList.remove('move-left'); }
  if (slide1.classList.contains('red-position-right')) { slide1.classList.remove('red-position-right'); }
  if (slide1.classList.contains('blue-position-right')) { slide1.classList.remove('blue-position-right'); }

  if (slide2.classList.contains('move-left')) { slide2.classList.remove('move-left'); }
  if (slide2.classList.contains('red-position-right')) { slide2.classList.remove('red-position-right'); }
  if (slide2.classList.contains('blue-position-right')) { slide2.classList.remove('blue-position-right'); }


  if (slide1.classList.contains('move-right')) { slide1.classList.remove('move-right'); }
  if (slide1.classList.contains('red-position-left')) { slide1.classList.remove('red-position-left'); }

  setTimeout(function() {
    slide1.classList.toggle('move-right');
  }, 10);

  setTimeout(function() {
    slide2.classList.toggle('blue-position-left');
    slide2.classList.toggle('move-right');
  }, 10);
 });

//
next[1].addEventListener('click', function() {

  if (slide1.classList.contains('move-left')) { slide1.classList.remove('move-left'); }
  if (slide1.classList.contains('red-position-right')) { slide1.classList.remove('red-position-right'); }
  if (slide1.classList.contains('blue-position-right')) { slide1.classList.remove('blue-position-right'); }

  if (slide2.classList.contains('move-left')) { slide2.classList.remove('move-left'); }
  if (slide2.classList.contains('red-position-right')) { slide2.classList.remove('red-position-right'); }
  if (slide2.classList.contains('blue-position-right')) { slide2.classList.remove('blue-position-right'); }

  setTimeout(function() {
    if (!slide1.classList.contains('move-right')) { slide1.classList.add('move-right'); }
    slide1.classList.toggle('red-position-left');
    slide1.classList.toggle('move-right');
  }, 1);

  setTimeout(function() {
    slide1.classList.toggle('move-right');
  }, 100);

  setTimeout(function() {
    if (!slide2.classList.contains('move-right')) { slide2.classList.add('move-right'); }
    if (!slide2.classList.contains('blue-position-left')) { slide2.classList.add('blue-position-left'); }
    slide2.classList.toggle('move-right'); 
    slide2.classList.toggle('blue-position-left');
    slide2.classList.toggle('blue-position-center');  
  }, 2);

  setTimeout(function() {
    slide2.classList.toggle('move-right'); 
  }, 100);

  setTimeout(function() {
    slide2.classList.toggle('blue-position-center');
    slide2.classList.toggle('move-right'); 
  }, 600);
 });

// Display on-off

 var display_1 = document.getElementById('display_1');

 display_1.addEventListener('click', function() {
  let bg = document.getElementById('vertical-bg-slide-1');
  bg.classList.toggle('opacity');
 });

 var display_2 = document.getElementById('display_2');

 display_2.addEventListener('click', function() {
  let bg = document.getElementById('horizontal-bg-slide-1');
  bg.classList.toggle('opacity');
 });

 var display_3 = document.getElementById('display_3');

 display_3.addEventListener('click', function() {
  let bg = document.getElementById('left-slide-2-small');
  bg.classList.toggle('opacity');
 });

 var display_4 = document.getElementById('display_4');

 display_4.addEventListener('click', function() {
  let bg = document.getElementById('right-slide-2-small');
  bg.classList.toggle('opacity');
 });

 var display_5 = document.getElementById('display_5');

 display_5.addEventListener('click', function() {
  let bg = document.getElementById('bg-screen-slide-2');
  bg.classList.toggle('opacity');
 });


// Portfolio active buttons

const activePortfolio = item => {
  document.querySelectorAll('.button').forEach(button => button.classList.remove('selected-portfolio'));
  item.target.classList.add('selected-portfolio');
};

document.querySelectorAll('.button').forEach(item => item.addEventListener('click', activePortfolio));

// Portfolio image interaction

const activeImage = item => {
  document.querySelectorAll('.portfolio-columns > div').forEach(img => img.classList.remove('bordered'));
  item.target.classList.add('bordered');
};

document.querySelectorAll('.portfolio-columns > div').forEach(item => item.addEventListener('click', activeImage));


var portfolioItems = document.querySelectorAll('.portfolio-columns > div');

var portfolioAll = document.getElementById('portfolio-all');
var webDesign = document.getElementById('portfolio-web');
var graphicDesign = document.getElementById('portfolio-graphic');
var artwork = document.getElementById('portfolio-artwork');

portfolioAll.addEventListener('click', function() {

  portfolioItems.forEach(el => el.classList.remove('hidden'));
 });

webDesign.addEventListener('click', function() {
  portfolioItems.forEach(el => {
    el.classList.contains('web-design') ? (el.classList.add('visible'), el.classList.remove('hidden')) : el.classList.add('hidden');
  });
 });

 graphicDesign.addEventListener('click', function() {
  portfolioItems.forEach(el => {
    el.classList.contains('graphic-design') ? (el.classList.add('visible'), el.classList.remove('hidden')) : el.classList.add('hidden');
  });
 });
 
 artwork.addEventListener('click', function() {
  portfolioItems.forEach(el => {
    el.classList.contains('artwork') ? (el.classList.add('visible'), el.classList.remove('hidden')) : el.classList.add('hidden');
  });
 });

// get a quote

const SUBMITBUTTON = document.getElementById('submit');
const CLOSEBUTTON = document.getElementById('close-btn');

SUBMITBUTTON.addEventListener('click', (event) => {
  const subject = document.getElementById('subject').value.toString();
  document.getElementById('result-subject').innerText = subject;

  if (subject == '') {
    document.getElementById('result-subject').innerText = 'Empty';
  }

  const describe = document.getElementById('textarea').value.toString();
  document.getElementById('result-describe').innerText = describe;

  if (describe == '') {
    document.getElementById('result-describe').innerText = 'Empty';
  }

  const name = document.getElementById('name').value.toString();
  let patterName = new RegExp('[a-zA-Z]+');
  if (!patterName.test(name)) { return false }

  const email = document.getElementById('email').value.toString();
  let patterMail = new RegExp('.+@[a-zA-Z]+\.com');
  if (!patterMail.test(email)) { return false }
  event.preventDefault();
  document.getElementById('message-block').classList.remove('hidden');
});

CLOSEBUTTON.addEventListener('click', () => {
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('form').reset();
});

// burger-menu

const burger = document.querySelector('.burger-menu');

burger.addEventListener('click', burgerMenu);

function burgerMenu() {
  console.log('hello');

  var x = document.getElementById("nav-buttons");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  burger.classList.toggle('transform');

  document.querySelector('.logo').classList.toggle('logo-positioning-burger');
  document.querySelector('#burger-shadow').classList.toggle('burger-shadow');

}