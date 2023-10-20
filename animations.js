
// ScrollReveal
function revealElement(selector, interval = undefined) {
    ScrollReveal().reveal(selector, {
      easing: 'ease-in',
      interval
    });
  }
  
  revealElement(".about-container");
  revealElement(".title-contact");
  revealElement(".subtitle-contact");
  revealElement(".card", 100);
  revealElement(".contact-card", 100);


//GSAP
const timeline = gsap.timeline({defaults: {duration: .6}});

timeline
    .from('.title', {opacity: 0, x: -30,  ease: 'power2.in'})
    .from('.subtitle', {opacity: 0, x: -30,  ease: 'power2.in'})
    .from('.about', {opacity: 0, y: 30,  ease: 'power2.in'})

