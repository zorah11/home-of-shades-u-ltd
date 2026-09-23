const menu = document.querySelector(".menu"),
  nav = document.querySelector("#nav");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.querySelector("[data-year]").textContent = new Date().getFullYear();
document.querySelector("#inquiry-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.querySelector(".form-status").textContent =
    "Thank you — your request is ready to send. Contact details will be connected when the site goes live.";
});
