// Header

const active = event => {
  document.querySelectorAll('.btn__nav').forEach(btn__nav => btn__nav.classList.remove('selected'));
  event.target.classList.add('selected');
};

document.querySelector('nav').addEventListener('click', active);

// Slider

var prev = document.getElementsByClassName('prev');
var next = document.getElementsByClassName('next');
var list = document.querySelectorAll('.slides > div');

prev[0].addEventListener('click', function() {
 list.forEach(el => el.classList.toggle('hidden'))
});

prev[1].addEventListener('click', function() {
  list.forEach(el => el.classList.toggle('hidden'))
 });

 next[0].addEventListener('click', function() {
  list.forEach(el => el.classList.toggle('hidden'))
 });

 next[1].addEventListener('click', function() {
  list.forEach(el => el.classList.toggle('hidden'))
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
});