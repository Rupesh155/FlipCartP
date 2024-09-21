// script.js
// Timeline for coordinated animations
let tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.5 });
// Animating the first circle
tl.to(".circle1", {
    duration: 2,
    x: 300,
    scale: 2,
    ease: "power4.inOut"
}, "start")
.to(".circle1", {
    duration: 2,
    y: 200,
    ease: "elastic.out(1, 0.3)"
}, "-=1");

// Animating the second circle
tl.to(".circle2", {
    duration: 2,
    x: -300,
    scale: 1.5,
    rotation: 360,
    ease: "power4.inOut"
}, "start+=0.5")
.to(".circle2", {
    duration: 2,
    y: -200,
    ease: "bounce.out"
}, "-=1");

// Animating the third circle
tl.to(".circle3", {
    duration: 2,
    x: 150,
    y: -200,
    scale: 3,
    rotation: -360,
    ease: "power4.inOut"
}, "start+=1")
.to(".circle3", {
    duration: 2,
    x: -150,
    y: 200,
    ease: "elastic.out(1, 0.3)"
}, "-=1");

// Animating the fourth circle
tl.to(".circle4", {
    duration: 2,
    x: -150,
    y: 200,
    scale: 2.5,
    rotation: 720,
    ease: "power4.inOut"
}, "start+=1.5")
.to(".circle4", {
    duration: 2,
    x: 150,
    y: -200,
    ease: "bounce.out"
}, "-=1");
