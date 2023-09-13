function loco() {
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
loco();

gsap.to("#page>video", {
  scrollTrigger: {
    trigger: `#page>video`,
    start: `3% top`,
    end: `bottom top`,
    scroller: `#main`,
  },
  onStart: () => {
    document.querySelector("#page>video").play();
  },
});

gsap.to("#page", {
  scrollTrigger: {
    trigger: `#page`,
    start: `top top`,
    end: `bottom top`,
    scroller: `#main`,
    pin: true,
  },
});

gsap.to("#apple-I", {
  scrollTrigger: {
    trigger: `#apple-I`,
    start: `5% top`,
    end: `bottom top`,
    scroller: `#main`,
  },
  opacity: 0,
});

var a = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

a.to("#page1>h1", {
  top: `-50%`,
});

var a1 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

a1.to("#page2>h1", {
  top: `-50%`,
});

var a2 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

a2.to("#page3>h1", {
  top: `-50%`,
});

var a3 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

a3.to("#page4>h1", {
  top: `-52%`,
});

var a4 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page6`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

a4.to("#page6>#text-p6", {
  top: `-55%`,
});







var a5 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page27`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


a5.to("#page27>#troff",{
  opacity:0
})


var a6 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page28`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


a6.to("#page28>#snroff",{
  opacity:0
})



gsap.to("#page29>img",{
  scrollTrigger:{
    trigger:`#page29>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.2,
    scroller:`#main`
  },
  opacity:1
})
