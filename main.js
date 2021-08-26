

const menuBtnArrow = document.querySelector('.menu-btn-arrow');
const leftPanel = document.querySelector('.leftPanel');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = true;

leftPanel.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('close');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('close');
        menuOpen = false;
    }
}, false)

menuBtnArrow.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('close');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('close');
        menuOpen = false;
    }
}, false)

// ---------------------

var tl0 = new TimelineMax();
const controller0 = new ScrollMagic.Controller();

tl0.to('.helloText', 1.5, {y:-150, opacity: 0, ease: Power4.easeInOut});

const helloScene = new ScrollMagic.Scene({
    triggerElement: ".scrollTriggerDiv",
    start: "center center",
    triggerHook: "onEnter",

})
    .setTween(tl0)
        .addTo(controller0);

// ---------------------

var tl = new TimelineMax()
    .add(TweenMax.from('.collaborate', .8, {y:-20, opacity: 0, ease: Power4.easeInOut}), "first")
    .add(TweenMax.from('.work', 1.2, {y:-60, opacity: 0, ease: Power4.easeInOut}), "first")
    .add(TweenMax.from('.dropLine', .8, {y:-20, opacity: 0, scale: 1, ease: Power4.easeInOut}), "second")
    .add(TweenMax.from('.mail', 1.2, {y:-60, opacity: 0, ease: Power4.easeInOut}), "second")
    
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: "#container-contact",
})
    .setTween(tl)
        .addTo(controller);

// ---------------------


var tl2 = new TimelineMax()
    .add(TweenMax.from('.profilePicture', 1.5, {y:+40, opacity: 0, ease: Power4.easeInOut}), "first")
    .add(TweenMax.from('.profileTextHey', 1.5, {y:+80, opacity: 0, ease: Power4.easeInOut}), "first")
    .add(TweenMax.from('.profileText', 2, {y:+80, opacity: 0, ease: Power4.easeInOut}), "first")

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#wrapper",
})
    .setTween(tl2)
        .addTo(controller2);

//------------


var tl3 = new TimelineMax()
    // .add(TweenMax.from('.right-arrow-btn', 1.5, { opacity: 0, ease: Power4.easeInOut}), "first")
    // .add(TweenMax.from('.left-arrow-btn', 1.5, {opacity: 0, ease: Power4.easeInOut}), "first")
    .add(TweenMax.from('.scrolling-wrapper', 1.5, {y:+80, opacity: 0, ease: Power4.easeInOut}), "first")

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".scrollTriggerDivTwo",
})
    .setTween(tl3)
        .addTo(controller3);

//------------

var projectCard = document.querySelectorAll('.card');
var numCards = projectCard.length;
scrollableProject = document.querySelector('.scrolling-wrapper');

const widthProject = scrollableProject.offsetWidth;


document.querySelector(".right-arrow-btn").addEventListener("click", () => {
    scrollableProject.scrollLeft += widthProject +1;
});

document.querySelector(".left-arrow-btn").addEventListener("click", () => {
   scrollableProject.scrollLeft -= widthProject +1;
});


//----------------------------------------------------------------------------

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function bringToBack(element) {
    element.style.zIndex = "-1";
}

function bringToFront(element) {
    element.style.zIndex = "1";
}

function revealElement(element) {
    element.style.opacity = "1";
}

function hideElement(element) {
    element.style.opacity = "0";
}

jQuery("#video-play-button-audrey").on('click',function(){
    var video = jQuery("#video-audrey");
    video.attr("src", video.data("autoplay-src") );

    setTimeout(function (){
        video.css("z-index", 1 )   
    }, 1000);
});

jQuery("#video-play-button-khang").on('click',function(){
    var video = jQuery("#video-khang");
    video.attr("src", video.data("autoplay-src") );

    setTimeout(function (){
        video.css("z-index", 1 )   
    }, 1000);
});

function switchOffVideos() {
    var names = ["audrey","khang"];
    var arrayLength = names.length;
    for (var i = 0; i < arrayLength; i++) {
        var video = jQuery("#video"+"-"+names[i]);
        video.attr("src", video.data("src") );
        video.css("z-index", -1 );
    }
}

jQuery("#right-arrow-btn").on('click',function(){
    switchOffVideos();
});

jQuery("#left-arrow-btn").on('click',function(){
    switchOffVideos();
});