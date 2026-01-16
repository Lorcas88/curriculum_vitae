export const initScrollReveal = () => {
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.15, // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // Animating when scrolling up
        entry.target.classList.remove("active");
      }
    });
  }, observerOptions);

  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => observer.observe(el));
};
