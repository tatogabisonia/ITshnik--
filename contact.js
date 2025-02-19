let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Dodajemy nasłuchiwanie kliknięcia dla każdego linku w nawigacji
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Zamykamy menu po kliknięciu w link do sekcji
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});


window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

ScrollReveal({ reset: true, distance: "80px", duration: 2000, delay: 200 });

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(".home-img, .courses-container", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p", {
  origin: "right",
});

// Multiple text

var typed = new Typed(".multiple-text", {
  strings: ["Software Tester"],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Read more

const readMoreBtn = document.querySelector(".read-more");
const moreText = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", function () {
  if (moreText.classList.contains("show")) {
    moreText.style.maxHeight = null;
    readMoreBtn.textContent = "Read more";
  } else {
    moreText.style.maxHeight = moreText.scrollHeight + "px";
    readMoreBtn.textContent = "Show less";
  }
  moreText.classList.toggle("show");
});
