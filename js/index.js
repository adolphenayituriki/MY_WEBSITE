window.addEventListener("scroll", () => {
      const nav = document.querySelector(".custom-nav");
      if (window.scrollY > 60) {
            nav.classList.add("scrolled");
      } else {
            nav.classList.remove("scrolled");
      }
});


// Navbar scroll effect
window.addEventListener('scroll', function(){
      const navbar = document.querySelector('nav');
      if(window.scrollY > 80){
            navbar.classList.add('scrolled');
      } else {
            navbar.classList.remove('scrolled');
      }
});

      gsap.utils.toArray("section, .card, .hero img, .section-title, .section-subtitle").forEach(elem => {
            gsap.from(elem, {
                  opacity: 0,
                  y: 50,
                  duration: 1,
                  ease: "power2.out",
                  scrollTrigger: {
                  trigger: elem,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
                  }
            });
      });

window.addEventListener('scroll', function(){
document.querySelector('nav').classList.toggle('scrolled', window.scroll);

});
gsap.from("#cv, #cv .section-title, #cv .section-subtitle, #cv .btn", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
            trigger: "#cv",
            start: "top 80%",
            toggleActions: "play none none reverse"
      }
});

// Animate CV Section
gsap.from("#cv .section-title", { opacity: 0, y: -40, duration: 1, scrollTrigger: { trigger: "#cv", start: "top 80%" } });
gsap.from("#cv .section-subtitle", { opacity: 0, y: 40, duration: 1, delay: 0.2, scrollTrigger: { trigger: "#cv", start: "top 80%" } });
gsap.from(".cv-card", { opacity: 0, scale: 0.8, duration: 1.2, delay: 0.4, ease: "elastic.out(1,0.5)", scrollTrigger: { trigger: ".cv-card", start: "top 85%" } });
gsap.to(".cv-shape", { y: 20, repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut" }):
