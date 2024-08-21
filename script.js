window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function loadingAnimations() {
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
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 0,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3,
  });
  tl.from("#page1", {
    y: 1200,
    delay: 0.2,
    opacity: 0,
    ease: Power4,
    delay: 0.2,
    duration: 0.6,
  });
  tl.to("#main", {
    backgroundColor: "#151515",
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from(".hero h1 ,.hero h2 , .hero h3", {
    y: 160,
    duration: 0.5,
    stagger: 0.2,
  });
  tl.from(
    "#hero1, #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}

function cursorAnimation() {
  document.querySelectorAll("#hero3 h2").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        duration: 0.3,
        css: {
          color: "transparent",
          fontWeight: 500,
          webkitTextStroke: "1px white",
          borderBottom: "0.6vw solid transparent",
        },
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        duration: 0.3,
        css: {
          borderBottom: "0.6vw solid white",
          color: "white",
        },
      });
    });
  });

  window.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor",{
      top:dets.y,
      left:dets.x,
      duration:0.3
    })
  })
  Shery.makeMagnet("#nav-part2 h4");

  const navH4 = document.querySelectorAll("#nav-part2 h4")
  navH4.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
      console.log(1)
      gsap.to("#cursor",{
        scale:1.6
      })
    })
  })
  navH4.forEach((elem)=>{
    elem.addEventListener("mouseleave",()=>{
      console.log(1)
      gsap.to("#cursor",{
        scale:1
      })
    })
  })

  const videoContainer = document.querySelector("#video-container");
  videoContainer.addEventListener("mouseenter", () => {
    videoContainer.addEventListener("mousemove", (dets) => {
      gsap.to("#cursor", {
        opacity: 0,
      });
      gsap.to("#play-btn", {
        left: dets.x - 550,
        y: dets.y - 250,
      });
    });
  });
  videoContainer.addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      opacity: 1,
    });
    gsap.to("#play-btn", {
      y: 0,
      left: "70%",
    });
  });
}

function imageHeaderAnimation() {
  const imageContainer = document.querySelectorAll(".image-container");

  imageContainer.forEach((elem) => {
    const header = elem.querySelector("h1");
    elem.addEventListener("mouseenter", () => {
      gsap.to(header, {
        y: "-50%",
        duration: 0.3,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(header, {
        y: 0,
        duration: 0.3,
      });
    });
  });
}
function sheryanimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: -0.69, range: [-1, 1] },
      zindex: { value: 9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7586081100042094 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 3, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.37, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.76, range: [0, 10] },
      metaball: { value: 0.38, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 11.45, range: [0, 100] },
    },
    gooey: true,
  });
}

function playVideo() {
  flag = 0;
  const playVideo = document.querySelector("#video-container");
  const playBtn = document.querySelector("#play-btn");

  playVideo.addEventListener("click", () => {
    const video = document.querySelector("#video-container video");
    if (flag == 0) {
      video.play();
      gsap.to("video", {
        opacity: 1,
      });
      flag = 1;
      playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M5 3H9V21H5V3ZM15 3H19V21H15V3Z"></path></svg>`;
      gsap.to("#play-btn", {
        scale: 0.5,
      });
    } else {
      video.pause();
      gsap.to("#play-btn", {
        scale: 1,
      });
      flag = 0;
      playBtn.innerHTML = `<svg class="button__play-icon" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="visibility: inherit; opacity: 1" ><path d="M20 12L2.43406e-07 24L-7.15256e-07 -8.74228e-07L20 12Z" fill="white"></path></svg>`;
      gsap.to("video", {
        opacity: 0,
      });
    }
  });
}
function textAnimation() {
  const footerHeader = document.querySelector(".footer-header");
  $(document).ready(function() {
    $('#footerH1').textillate({
        in: { effect: 'fadeIn',sequence:true},
        out: { effect: 'fadeOut',sequence:true }
    });
    const tl = gsap.timeline({paused:true})

    tl.to("#footerH1",{
      autoAlpha: 1,
      duration: 1,
      onStart: function(){
        $("#footerH1").textillate("in")
      }
    })
    tl.to("#footerH1",{
      autoAlpha: 1,
      duration: 1,
      onComplete: function(){
        $("#footerH1").textillate("out")
      }
    })
    $(footerHeader).on('mouseenter', function() {
      $('#footerH1').addClass('silkFont');
      tl.play()
    });

    $(footerHeader).on('mouseleave', function() {
      $('#footerH1').removeClass('silkFont').textillate('out');
      tl.reverse();
    });
  });
}

textAnimation();
playVideo();
loadingAnimations();
cursorAnimation();
locomotiveAnimation();
imageHeaderAnimation();
sheryanimation();
