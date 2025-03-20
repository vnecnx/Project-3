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


// JS scripts placed here

const button = document.querySelector('.snooze-container');
const body = document.querySelector('body');



// button.addEventListener('click', () => {
//   const expanded = button.getAttribute('aria-expanded') === 'true' || false;
//   button.setAttribute('aria-expanded',!expanded);
//   body.classList.toggle('expanded');
// });