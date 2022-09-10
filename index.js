// burger
const btnBurger = document.querySelector(".header-burger");
const nav = document.querySelector("nav");
const burger = document.querySelector(".nav");
const socialLink = document.querySelector("#socialMedia");
const closeBurger = document.querySelector(".closeBurger");
const burgerLinks = document.querySelectorAll(".nav-link");
const btnLogin = document.querySelector(".btn-login");
const body = document.querySelector("body");

function toggleBurgerClassList() {
  nav.classList.toggle("open-burger");
  burger.classList.toggle("open-burger");
}

btnBurger.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBurgerClassList();
});

if (burgerLinks.length > 0) {
  for (let i = 0; i < burgerLinks.length; i++) {
    const burgerLink = burgerLinks[i];
    burgerLink.addEventListener("click", (e) => {
      toggleBurgerClassList();
    });
  }
}
closeBurger.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBurgerClassList();
});

// pop-up
const popup = document.querySelector(".popup-area");
const registration = document.querySelector(".registration-btn");
const logInBtn = document.querySelector(".log-in-btn");
const haventAcc = document.querySelector(".havent-account");
const haveAcc = document.querySelector(".have-account");
const passRecovery = document.querySelector(".pass-recovery");
const socBtns = document.querySelector(".soc-btn");

const inputEemail = document.querySelector(".input-email");
const inputPass = document.querySelector(".input-password");
const btnSignIn = document.querySelector(".form-btn");

let result = "";

function addValue() {
  let userEmail = inputEemail.value;
  let userPass = inputPass.value;
  if (
    userEmail === null ||
    userEmail === "" ||
    userEmail === " " ||
    userPass === null ||
    userPass === "" ||
    userPass === " "
  ) {
    return (result = "You have not entered any data");
  } else {
    return (result = `Your email: ${userEmail};
  Your password: ${userPass}`);
  }
}
function showResult() {
  alert(result);
}
function clearInput() {
  inputEemail.value = "";
  inputPass.value = "";
}
function toggleClassHidden() {
  socBtns.classList.toggle("hidden");
  haventAcc.classList.toggle("hidden");
  haveAcc.classList.toggle("hidden");
  passRecovery.classList.add("hidden");
}
function openRegistrationForm() {
  btnSignIn.innerHTML = "Singn Up";
  toggleClassHidden();
}
function loginIn() {
  btnSignIn.innerHTML = "Singn In";
  toggleClassHidden();
}
function activePopUp() {
  popup.classList.toggle("open-popup");
  body.classList.toggle("block-scroll");
}

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBurgerClassList();
  activePopUp();
  popup.addEventListener("transitionend", (e) => {
    popup.classList.add("popup-background");
  });
});
registration.addEventListener("click", (e) => {
  openRegistrationForm();
});
logInBtn.addEventListener("click", (e) => {
  loginIn();
});
popup.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".popup-area")) {
    activePopUp();
    popup.addEventListener("transitionend", (e) => {
      popup.classList.remove("popup-background");
    });
  }
});
btnSignIn.addEventListener("click", (e) => {
  addValue();
  showResult();
  activePopUp();
  clearInput();
  popup.addEventListener("transitionend", (e) => {
    popup.classList.remove("popup-background");
  });
});
// slider
const slider = document.querySelector(".destination-container");
const sliderLeftArrow = document.querySelector(".arrow-container-left");
const sliderRightArrow = document.querySelector(".arrow-container-right");
const sliderElements = document.querySelectorAll(".destination");
const navDots = document.querySelectorAll(".glr-dot-style");

let count = 0;
function toggleDotsActiveClass() {
  if (count === -1 || count === 2) {
    navDots[0].classList.remove("glr-nav-active");
    navDots[1].classList.remove("glr-nav-active");
    navDots[2].classList.add("glr-nav-active");
  } else if (count === -2 || count === 1) {
    navDots[0].classList.add("glr-nav-active");
    navDots[1].classList.remove("glr-nav-active");
    navDots[2].classList.remove("glr-nav-active");
  } else if (count === 0) {
    navDots[0].classList.remove("glr-nav-active");
    navDots[1].classList.add("glr-nav-active");
    navDots[2].classList.remove("glr-nav-active");
  }
}

if (body.clientWidth > 767) {
  count = 0;
  navDots[1].classList.add("glr-nav-active");
} else {
  count = 1;
  navDots[0].classList.add("glr-nav-active");
}

function sliderStyle() {
  slider.style.transform = "translateX(" + count * 35 + "%)";
}

function leftScroll() {
  count++;
  count <= 1 ? sliderStyle() : (count = -1);
  toggleDotsActiveClass();
  sliderStyle();
}

function rightScroll() {
  count--;
  count >= -1 ? sliderStyle() : (count = 1);
  toggleDotsActiveClass();
  sliderStyle();
}

sliderLeftArrow.addEventListener("click", () => {
  leftScroll();
});
sliderRightArrow.addEventListener("click", () => {
  rightScroll();
});

// hero
const searchBtn = document.querySelector(".btn-search");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Sorry, it is not working right now.");
});
