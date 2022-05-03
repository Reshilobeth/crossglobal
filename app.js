
// gsap.from('.navbar',{
//     duration:1,
//     // delay:.7,
//     y:'-100%',
//     opacity:0,
//     ease:'ease-in-out',
// })

// gsap.from('.nav-item',{
//     duration:1,
//     // delay:.7,
//     y:'-100%',
//     opacity:0,
//     ease:'ease-in-out',
// })

// gsap.from('.nav-link',{
//     duration:.2,
//     y:'-100%',
//     opacity:0,
//     ease:'ease-in-out',
//     stagger:.3,
//     delay:.2,
// })

// gsap.from('.hero-title-container',{
//     duration:1,
//     delay:.5,
//     y:'20%',
//     opacity:0,
//     ease:'ease-in-out',
// })
// gsap.from('.hero-para',{
//     duration:.7,
//     delay:1,
//     y:'30%',
//     opacity:0,
//     ease:'ease-in-out',
// })
// gsap.from('.hero-btn',{
//     duration:.7,
//     delay:1,
//     opacity:0,
//     ease:'ease-out',
// })

const navSlide = ()=>{
    const burger  = document.querySelector('.burger')
    const nav = document.querySelector('.nav-item')
    const navLinks = document.querySelectorAll('.nav-links li')

    // toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')


            //Animate linksn
        navLinks.forEach((links, index) =>{
            if(links.style.animation){
                links.style.animation = ``
            } else{
                links.style.animation = ` navLinkFade 0.5s ease forwards ${index / 9 + .4}s`
            }
        })

        //Burger toggle
        burger.classList.toggle('toggle');

    })
}

navSlide();
