// Dark - Light Mode
const switcher = document.querySelector(".switch input");
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

switcher.addEventListener("change", switchTheme);

// Navigation
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// Mouse enter/leave
const images = document.querySelectorAll(".scalableImage");

images.forEach((scalableImage) => {
  scalableImage.addEventListener("mouseenter", () => {
    scalableImage.style.transform = "scale(1.2)";
    scalableImage.style.transitionDuration = "0.5s";
  });
  scalableImage.addEventListener("mouseleave", () => {
    scalableImage.style.transform = "scale(1.0)";
  });
});

// Form - validation
const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const notifName = document.querySelector(".notifName");
const notifEmail = document.querySelector(".notifEmail");
const notifPassword1 = document.querySelector(".notifPassword1");
const notifPassword2 = document.querySelector(".notifPassword2");
const wrongPassword = document.querySelector(".wrongPassword");

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  if (fullName.value === "") {
    notifName.style.display = "block";
  }

  setTimeout(() => {
    notifName.style.display = "none";
  }, 3000);

  if (email.value === "") {
    notifEmail.style.display = "block";
  }

  setTimeout(() => {
    notifEmail.style.display = "none";
  }, 3000);

  if (password1.value === "") {
    notifPassword1.style.display = "block";
  }

  setTimeout(() => {
    notifPassword1.style.display = "none";
  }, 3000);

  if (password2.value === "") {
    notifPassword2.style.display = "block";
  }

  setTimeout(() => {
    notifPassword2.style.display = "none";
  }, 3000);

  if (password1.value != password2.value) {
    wrongPassword.style.display = "block";
  }

  setTimeout(() => {
    wrongPassword.style.display = "none";
  }, 3000);
});

// Button to top
const buttonUp = document.querySelector(".button-up");

const scrollFunction = () => {
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop === 0) {
    scrollTop = document.body.scrollTop;
  }
  if (scrollTop + windowHeight >= documentHeight) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
};

window.addEventListener("scroll", scrollFunction);

buttonUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
