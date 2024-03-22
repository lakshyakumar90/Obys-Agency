let tl = gsap.timeline();

tl.from(".line h1", {
    y: 160,
    opacity:0,
    stagger: 0.2,
    duration:0.7,
    delay:0.5
});

tl.from("#para", {
    opacity:0,
    duration:0.5
})

tl.from("#line1-part1", {
    opacity:0,
    onStart: function(){
        let h5Timer = document.querySelector("#line1-part1 h5");
        let grow = 0;

        let h5Interval = setInterval(function(){
            if(grow < 100){
                h5Timer.innerHTML = grow++;
            } else{
                h5Timer.innerHTML = grow;
                clearInterval(h5Interval);
            }
        }, 20)
    }
})

tl.to(".line h4", {
    animationName: "h5Animation",
    opacity:1
});

tl.to("#loader", {
    opacity: 0,
    duration:0.5,
    delay:2.2,
    ease: "power5"
})

tl.from("#page1", {
    y:1600,
    opacity:0,
    duration:0.5,
    delay:0.2
})

tl.to("#loader", {
    display: "none"
})