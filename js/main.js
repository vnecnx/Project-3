// SNOOZE BUTTON

const bodytl = gsap.timeline();
const button = document.querySelector('.snooze-container');
const buttontext = document.querySelector('.snooze-container p');

button.addEventListener('click', () =>{
    bodytl.to(".wine-liquid", {duration: 1, ease: "power4.out", backgroundColor:"#aac3f7", onStart: () => {
        console.log("Animation started!");
        buttonelement.classList.add('buttonactive');}}, "start")
        .to("body", {duration: 1, ease: "power4.out", backgroundColor: "rgb(240, 233, 213)"}, "start")
        .to(".clock-display", {duration: 1, ease: "power4.out", backgroundColor: "#2f2f2f", boxShadow: "none"}, "start") 
        .to(".clock-display-text", {duration: 1, ease: "power4.out", color: "#36db78"}, "start")
        .to(".snooze-container", {duration: 1, ease: "power4.out", boxShadow: "none"}, "start") 
        .to(".snooze-container p", {duration: 1, ease: "power4.out", color: "black"}, "start")
        .to(".snooze-container", {duration: 1, ease: "power4.out", backgroundColor: "rgb(243, 244, 255)", boxShadow: "8px 8px 0 0 #afafff"}, "start")
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
});
