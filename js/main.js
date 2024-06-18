const nav = document.querySelector(".header__nav");
const hamburger = document.querySelector(".hamburger");
const section = document.querySelector("section");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("nav--open");
  //   section.style.marginTop = "200px";
  hamburger.classList.toggle("hamburger--open");
});

nav.addEventListener("click", function () {
  nav.classList.remove("nav--open");
  //   section.style.marginTop = "200px";
  hamburger.classList.remove("hamburger--open");
});
console.log("shereif");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));
