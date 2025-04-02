// SNOOZE BUTTON

const button = document.querySelector('.snooze-container');
const buttontext = document.querySelector('.snooze-container p');
const buttonactive = document.querySelector('.buttonactive');
const bodytl = gsap.timeline({ paused: true });

bodytl
  .to(".wine-liquid", { duration: 1, ease: "power4.out", backgroundColor: "#aac3f7" }, "start")
  .to("body", { duration: 1, ease: "power4.out", backgroundColor: "rgb(240, 233, 213)" }, "start")
  .to(".clock-display", { duration: 1, ease: "power4.out", backgroundColor: "#2f2f2f", boxShadow: "none" }, "start")
  .to(".clock-display-text", { duration: 1, ease: "power4.out", color: "#36db78" }, "start")
  .to(".snooze-container", { duration: 1, ease: "power4.out"}, "start")
  .to(".snooze-container p", { duration: 1, ease: "power4.out", color: "black" }, "start")
  .to(".snooze-container", { duration: 1, ease: "power4.out", backgroundColor: "rgb(243, 244, 255)", boxShadow: "8px 8px 0 0 #afafff" }, "start");

button.addEventListener('click', () => {
  if (button.classList.contains('buttonactive')) {
    bodytl.play();
    button.classList.remove('buttonactive');
    buttontext.innerHTML = "SNOOZE";
  } else {
    bodytl.reverse();
    button.classList.add('buttonactive');
    buttontext.innerHTML = "BOOZE";
  }
});





// LAMP LIGHT

const chainbutton = document.querySelector('.lamp-chain');
const lampactive = document.querySelector('.lampactive');
const lamptl = gsap.timeline({ paused: true });

lamptl
    .to(".lamp-chain", { duration: 0.5, ease: "power4.out", y: 20}, "lighton")
    .to(".lamp-chain", { duration: 0.5, ease: "power4.out", y: 0, delay: 0.5}, "lighton")
    .to(".lamp-bulb", { duration: 1, ease: "bounce.in", backgroundColor: "rgb(255, 236, 62)" }, "lighton")
    .to(".lamp-light", { duration: 1, ease: "bounce.in", opacity: ".3" }, "lighton");

chainbutton.addEventListener('click', () => {
    if (chainbutton.classList.contains('lampactive')) {
        lamptl.play();
        chainbutton.classList.remove('lampactive');
    } 
    else {
        lamptl.reverse();
        chainbutton.classList.add('lampactive');
    }
});
