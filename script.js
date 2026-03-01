gsap.registerPlugin(ScrollTrigger);

const car = document.querySelector(".car");
const roadProgress = document.querySelector(".road-progress");
const progressText = document.querySelector(".progress-text");
const milestones = document.querySelectorAll(".milestone");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

/* 🚗 CAR MOVE */
tl.to(car, {
  x: () => document.querySelector(".road-wrapper").offsetWidth - car.offsetWidth - 20,
  ease: "none"
}, 0);

/* 🟩 GREEN BAR FILL */
tl.to(roadProgress, {
  width: "100%",
  ease: "none"
}, 0);

/* 📝 TEXT REVEAL */
tl.to(progressText, {
  clipPath: "inset(0 0% 0 0)",
  ease: "none"
}, 0);

/* 🪧 MILESTONES APPEAR WITH SCROLL */
milestones.forEach((mile, i) => {
  gsap.fromTo(
    mile,
    { opacity: 0, y: mile.classList.contains("top") ? -50 : 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".hero",
        start: () => `top+=${i * 400} top`, // stagger milestones
        end: "bottom bottom",
        scrub: true
      }
    }
  );
});