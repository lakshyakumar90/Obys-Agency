function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector('#main'),
  //   smooth: true
// });
}

function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 160,
    opacity: 0,
    stagger: 0.2,
    delay: 1,
  });

  tl.from("#para", {
    opacity: 0,
    duration: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5Timer = document.querySelector("#line1-part1 h5");
      let grow = 0;

      let h5Interval = setInterval(function () {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = grow;
          clearInterval(h5Interval);
        }
      }, 20);
    },
  });

  tl.to(".line h4", {
    animationName: "h5Animation",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.5,
    delay: 2.2,
    ease: "power5",
  });

  tl.from("#main", {
    y: 1600,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
    duration: 0.3,
  });

  tl.from(
    "#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h1,#hero4 h1, #number-one h1",
    {
      opacity: 0,
      y: 20,
      stagger: 0.1,
    }
  );

  tl.from("#page2", {
    opacity: 0,
    duration: 0.3,
  });
}
function customCursor() {
  document.addEventListener("mousemove", (details) => {
    gsap.to("#custom-cursor", {
      left: details.clientX + "px",
      top: details.clientY + "px",
    });
  });

  let videoContainer = document.querySelector("#video-container");
  let video = document.querySelector("#video-container video");
  videoContainer.addEventListener("mouseenter", () => {
    gsap.to("#custom-cursor", {
      opacity: 0,
    });
    videoContainer.addEventListener("mousemove", (details) => {
      gsap.to("#video-cursor", {
        left: details.x - 500,
        top: details.y - 230,
      });
    });
  });
  videoContainer.addEventListener("mouseleave", () => {
    gsap.to("#custom-cursor", {
      opacity: 1,
    });
    gsap.to("#video-cursor", {
      left: "70%",
      top: "-10%",
    });
  });

  let counter = 0;
  videoContainer.addEventListener("click", () => {
    if (counter == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-pause-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 0.5,
      });
      counter = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-play-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 1,
      });
      counter = 0;
    }
  });
}

function magnetEffect() {
  Shery.makeMagnet("#nav-part1 img, #nav-part3 h4", {});
}

function scrollTrigger(){
  gsap.from("#page3",{
    opacity:0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page3",
      scroller:"#main",
      start: "top 66%",
      end: "top 0%",
      scrub:1
    }
  })

  gsap.from("#page4",{
    opacity:0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page4",
      scroller:"#main",
      start: "top 90%",
      markers:true,
      end: "top 50%",
      scrub:1
    }
  })

  gsap.from("#footer",{
    opacity:0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#footer",
      scroller:"#main",
      start: "top 90%",
      end: "top 50%",
      scrub:1
    }
  })


}

function distortionEffect() {
  Shery.imageEffect(".image-box", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8982746071841418 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0.010752688172043001, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.4, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.23, range: [0, 10] },
      metaball: { value: 0.46, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}

function flagAnimation() {
  let flag = document.querySelector("#flag");
  let flagArea = document.querySelector("#main-section")
  flagArea.addEventListener("mousemove", function (details) {
    gsap.to("#flag", {
      left: details.clientX + "px",
      top: details.clientY + "px",
    })
  });
  document.querySelector("#hero3").addEventListener("mousemove", function(){
    gsap.to("#flag", {
      opacity: 1
  })
})
document.querySelector("#hero3").addEventListener("mouseleave", function () {
  gsap.to("#flag", {
    opacity: 0,
  });
});
}

function footerAnimation() {
  var clutter = "";
  var clutter2 = "";
  document
    .querySelector("#footer-heading h1")
    .textContent.split("")
    .forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
  document.querySelector("#footer-heading h1").innerHTML = clutter;
  document
    .querySelector("#footer-heading h2")
    .textContent.split("")
    .forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`;
    });
  document.querySelector("#footer-heading h2").innerHTML = clutter2;

  document
    .querySelector("#footer-heading")
    .addEventListener("mouseenter", function () {
      
      gsap.to("#footer-heading h1 span", {
        opacity: 0,
        stagger: 0.05,
      });

      gsap.to("#footer-heading h2", {
        display: "block"
      })

      gsap.to("#footer-heading h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1,
      });
    });
  document
    .querySelector("#footer-heading")
    .addEventListener("mouseleave", function () {
      gsap.to("#footer-heading h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
      });
      
      gsap.to("#footer-heading h2 span", {
        opacity: 0,
        stagger: 0.05,
      });

      gsap.to("#footer-heading h2", {
        display: "none"
      })
    });
}



locomotiveScroll();
loadingAnimation();
magnetEffect();
customCursor();
scrollTrigger();
distortionEffect();
flagAnimation();
footerAnimation();