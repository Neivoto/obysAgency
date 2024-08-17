var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    const timer = document.querySelector("#line1-part1 h5");
    var count = 0;
    setInterval(() => {
      if (count <= 100) {
        timer.innerText = count.toString().padStart("2", "0");
        count++;
      }
    }, 30);
  }
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:0
})
tl.to("#loader", {
  opacity: 0,
  duration:0.4,
  delay: 3
});
tl.from("#page1",{
    y:1200,
    delay:0.2,
    opacity:0,
    ease: Power4
})
tl.to("#loader",{
    display:"none"
})
