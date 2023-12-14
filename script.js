gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



function cursorAmimation () {
    var corsor = document.querySelector("#cursor");
var page1 = document.querySelector("#page-cont");

page1.addEventListener("mousemove", function(val) {
   gsap.to(corsor, {
    y : val.y,
    x : val.x 
   })
})

page1.addEventListener("mouseenter", function () {
    gsap.to(corsor, {
        scale:1,
        opacity:1,
    })
})

page1.addEventListener("mouseleave", function () {
    gsap.to(corsor, {
        scale:0,
        opacity:0,

    })
})
}

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration: 1,
  stagger:.5
})

tl.to("#loader h3",{
  x:-40,
  opacity:0,
  duration: 1,
  stagger:.5
})

tl.to("#loader",{
  x:-40,
  opacity:0,
  duration:.5,
})

tl.to("#loader",{
  display:"none"
})

tl.from("#page-cont h1 span",{
  opacity:0,
  duration:.5,
  y:100,
  stagger:.1
})

gsap.to("#page2-top h3",{
  y:"",
  duration:1,
  delay: .5,
  scrollTrigger: {
    trigger:"#page2-top h3",
    scroller:"#main",
    start: "top 90%",
    end:"top 95%",
    scrub:2
  }

})

gsap.to("#para h1",{
  y:"",
  duration:1,
  delay: .5,
  scrollTrigger: {
    trigger:".elem h1",
    scroller:"#main",
    start: "top 85%",
    end:"top 90%",
    // markers:true,
    scrub:2
  }
})

gsap.to("#page2-top1 h3",{
  y:"",
  duration:1,
  delay: .5,
  scrollTrigger: {
    trigger:"#page2-top1 h3",
    scroller:"#main",
    start: "top 90%",
    end:"top 95%",
    scrub:2
  }

})

gsap.to("#para1 h1",{
  y:"",
  duration:1,
  delay: .5,
  scrollTrigger: {
    trigger:".elem1 h1",
    scroller:"#main",
    start: "top 85%",
    end:"top 90%",
    // markers:true,
    scrub:2
  }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




cursorAmimation ();