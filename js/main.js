// Lesson.html stuff
// const squaretl = gsap.timeline();
// const squarebutton = document.querySelector('.square');
// const squarebuttonactive = document.querySelector('.square.active');

// squarebutton.addEventListener('click', () =>{
//     squaretl.to(".square", {duration: 1, ease:"bounce.out", x: 500, rotation: 360}, "start")
//             // .to(".square", {duration: 1, ease:"power4.out", backgroundColor: "blue", onComplete: function() {
//             //     this.targets().forEach(elem => elem.classList.add("active"));
//             //   }}}, "start")
//             .to(".square", {duration: 1, ease:"power4.out", backgroundColor: "blue", onComplete: function() {
//                 this.targets().forEach(elem => elem.classList.add("active"));
//               }})
// })

// squarebuttonactive.addEventListener('click', () =>{
//     console.log*('clicked');
//     squaretl.reverse()
// })


// SNOOZE BUTTON

const bodytl = gsap.timeline();
const button = document.querySelector('.snooze-container');
const buttontext = document.querySelector('.snooze-container p');
// const body = document.querySelector('body');

button.addEventListener('click', () =>{
    bodytl.to(".wine-liquid", {duration: 1, ease: "power4.out", backgroundColor:"#aac3f7"}, "start")
    bodytl.to("body", {duration: 1, ease: "power4.out", backgroundColor: "rgb(240, 233, 213)"}, "start")
    bodytl.to(".clock-display", {duration: 1, ease: "power4.out", backgroundColor: "#2f2f2f", boxShadow: "none"}, "start") 
    bodytl.to(".clock-display-text", {duration: 1, ease: "power4.out", color: "#36db78"}, "start")
    bodytl.to(".snooze-container", {duration: 1, ease: "power4.out", boxShadow: "none"}, "start") 
    bodytl.to(".snooze-container p", {duration: 1, ease: "power4.out", color: "black"}, "start")
    bodytl.to(".snooze-container", {duration: 1, ease: "power4.out", backgroundColor: "rgb(243, 244, 255)", boxShadow: "8px 8px 0 0 #afafff"}, "start")
});



button.addEventListener('click', () =>{
    buttontext.innerHTML = "SNOOZE";
});





// LAMP LIGHT

const lamptl = gsap.timeline();
const chainbutton = document.querySelector('.lamp-chain');

chainbutton.addEventListener('click', () =>{
    console.log('clicked');
    lamptl.to(".lamp-chain", {duration: 0.5, ease: "power4.out", y: 20})
    lamptl.to(".lamp-bulb", {duration: 1, ease: "bounce.in", backgroundColor: "rgb(255, 236, 62)"}, "lighton")
    lamptl.to(".lamp-chain", {duration: 0.5, ease: "power4.out", y: 0}, "lighton")
    lamptl.to(".lamp-light", {duration: 1, ease: "bounce.in", opacity: ".5"}, "lighton")
    // lamptl.to(".lamp-light", {duration: 0.2, ease: "power4.out", opacity: "0"})
    // lamptl.to(".lamp-light", {duration: 1, ease: "power4.out", opacity: ".5"})
});

// TL template
// bodytl.to(".class", {duration: 0, ease: "easetype"}, "start") 


// button.addEventListener('click', () => {
//   const expanded = button.getAttribute('aria-expanded') === 'true' || false;
//   button.setAttribute('aria-expanded',!expanded);
//   body.classList.toggle('expanded');
// });