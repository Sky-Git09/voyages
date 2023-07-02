let searchForm = document.querySelector(".search-form")
document.querySelector("#search-btn").onclick = ()=>{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    menubar.classList.remove('active')
}

let micBtn = document.querySelector("#mic-btn")
micBtn.onclick = ()=>{
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event)
    {
        document.getElementById('search-box').value = event.results[0][0].transcript;
    }
    recognition.start();
}

let shoppingCart = document.querySelector(".shopping-cart")
document.querySelector("#cart-btn").onclick = ()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    menubar.classList.remove('active')
}

let menubar = document.querySelector(".navbar")
document.querySelector("#menu-btn").onclick = ()=>{
    menubar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
}

//form
const inputs = document.querySelectorAll('.input');

function focusfunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusfunc);
    input.addEventListener("blur", blurFunc);
})
//form

//slider
document.getElementById("register-link").addEventListener("click",function(){
    if (window.innerWidth < 770){
        document.getElementById("signup").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
    else if(window.innerWidth <995){
        document.getElementById("overlay").style.transform = 'translate(46vh , -25px)';
    }
    else if(window.innerWidth <1180){
        document.getElementById("overlay").style.transform = 'translate(61vh , -25px)';
    }
    else if(window.innerWidth <1400){
        document.getElementById("overlay").style.transform = 'translate(550px , -25px)';
    }
    else {
        document.getElementById("overlay").style.transform = 'translate(750px , -25px)';
    }
})
document.getElementById("login-link").addEventListener("click",function(){
    if(window.innerWidth <770){
        document.getElementById("login").style.display = "block";
        document.getElementById("signup").style.display = "none";
    }
    else {
        document.getElementById("overlay").style.transform = 'translate(0px , -25px)';
    }
})

//slider

let userBtn = document.getElementById("user-btn")
let poplogin = document.querySelector(".log-popup")
let closeLog = document.getElementById("close-login")
let form = document.querySelector(".container")
let heado = document.getElementById("header")
let homee = document.getElementById("home")
let servicee = document.getElementById("services")
userBtn.onclick = function(){
    poplogin.classList.add("active")
    form.classList.add("active")
    heado.classList.add("active")
    homee.classList.add("blur")
    servicee.classList.add("blur")
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    menubar.classList.remove('active')
}
closeLog.onclick = function(){
    poplogin.classList.remove("active")
    form.classList.remove("active")
    heado.classList.remove("active")
    homee.classList.remove("blur")
    servicee.classList.remove("blur")
}

function show(){
    let pass = document.getElementById("pass");
    let eyea = document.getElementById("eye");
    let eyesh = document.getElementById("eye-slash")
    
    if (pass.type === 'password'){
        pass.type = "text";
        eyea.style.display = "block";
        eyesh.style.display = "none"
    }
    else{
        pass.type = "password";
        eyea.style.display = "none";
        eyesh.style.display = "block" 
    }
}

function showo(){
    let pass1 = document.getElementById("cpass");
    let eyea1 = document.getElementById("eye1");
    let eyesh1 = document.getElementById("eye-slash1")
    
    if (pass1.type === 'password'){
        pass1.type = "text";
        eyea1.style.display = "block";
        eyesh1.style.display = "none"
    }
    else{
        pass1.type = "password";
        eyea1.style.display = "none";
        eyesh1.style.display = "block" 
    }
}

function showi(){
    let logpass = document.getElementById("logpass");
    let eyea2 = document.getElementById("eye2");
    let eyesh2 = document.getElementById("eye-slash2")
    
    if (logpass.type === 'password'){
        logpass.type = "text";
        eyea2.style.display = "block";
        eyesh2.style.display = "none"
    }
    else{
        logpass.type = "password";
        eyea2.style.display = "none";
        eyesh2.style.display = "block" 
    }
}

//home section
const navBtn = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contentsHome = document.querySelectorAll(".content");

let sliderNav = function(manual){
    navBtn.forEach((ele)=>{
        ele.classList.remove("active")
    });
    slides.forEach((slide)=>{
        slide.classList.remove("active")
    })
    navBtn[manual].classList.add("active");
    slides[manual].classList.add("active");
}
navBtn.forEach((ele, i)=>{
    ele.addEventListener("click", ()=>{
        sliderNav(i)
    })
})

//sticky header
window.addEventListener("scroll", function(){
    let head = document.querySelector(".header");
    let extra = document.querySelector(".extra")
    head.classList.toggle("sticky", window.scrollY > 0);
    extra.classList.toggle("sticky", window.scrollY > 0)
})

//multitext
const typed = new Typed('.multi-text', {
    strings: ['Explore the world', 'Discover the new', 'Be adventurous'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//readmore
let readBtn = document.querySelector("#read-btn");
let cutext = document.querySelector(".smalltxt");

readBtn.addEventListener('click',(e)=>{
    cutext.classList.toggle('show-more');
    if(readBtn.innerText === 'Read more'){
        readBtn.innerText = 'Read less'
    }
    else{
        readBtn.innerText = 'Read more'
    }
})

//readmore1
let readoBtn = document.querySelector("#view1");
let cuotext = document.querySelector(".f1");

readoBtn.addEventListener('click',(e)=>{
    readoBtn.classList.toggle('show-more');
    cuotext.classList.toggle('show-more');
    if(readoBtn.innerText === 'Know More'){
        readoBtn.innerText = 'Know less'
    }
    else{
        readoBtn.innerText = 'Know More'
    }
})

//readmore2
let readqBtn = document.querySelector("#view2");
let cuqtext = document.querySelector(".f2");

readqBtn.addEventListener('click',(e)=>{
    cuqtext.classList.toggle('show-more');
    if(readqBtn.innerText === 'Know More'){
        readqBtn.innerText = 'Know less'
    }
    else{
        readqBtn.innerText = 'Know More'
    }
})

//readmore3
let readwBtn = document.querySelector("#view3");
let cuwtext = document.querySelector(".f3");

readwBtn.addEventListener('click',(e)=>{
    cuwtext.classList.toggle('show-more');
    if(readwBtn.innerText === 'Know More'){
        readwBtn.innerText = 'Know less'
    }
    else{
        readwBtn.innerText = 'Know More'
    }
})

//readmore4
let readrBtn = document.querySelector("#view4");
let curtext = document.querySelector(".f4");

readrBtn.addEventListener('click',(e)=>{
    curtext.classList.toggle('show-more');
    if(readrBtn.innerText === 'Know More'){
        readrBtn.innerText = 'Know less'
    }
    else{
        readrBtn.innerText = 'Know More'
    }
})

//swiper
let swiper = new Swiper(".card_slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });