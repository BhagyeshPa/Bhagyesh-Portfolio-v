const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));

const form = document.querySelector(".contact-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("submitted");
  form.reset();
});

const cards = document.querySelectorAll(".project-card, .skill, .about-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    card.style.transform = `translate3d(${x * 0.02}px, ${y * 0.02}px, 0)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate3d(0, 0, 0)";
  });
});

const hero = document.querySelector(".hero");
const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove", (event) => {
  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 10;
  const y = (event.clientY / innerHeight - 0.5) * 10;

  hero.style.setProperty("transform", `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`);

  blobs.forEach((blob, index) => {
    const factor = (index + 1) * 0.4;
    blob.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0)`;
  });
});
