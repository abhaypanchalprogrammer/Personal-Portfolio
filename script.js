console.log("abhay chetanbhai panchal");
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme");
const hover = document.querySelector(".home1");
const hoverReveal = document.querySelector(".main");
const hover2 = document.querySelector("#abhay");
const hoverReveal1 = document.querySelector(".abhu");
const hoverReveal2 = document.querySelector(".main3");
const hover3 = document.querySelector(".projects");
const image = document.querySelector("#mypic");
const imagee = document.querySelector("#mypicture");
const cv = document.querySelector("#cv");

hover.addEventListener("click", (event) => {
  event.preventDefault();
  if (hoverReveal.classList.contains("show")) {
    hoverReveal.classList.remove("show");
  } else if (hoverReveal1.classList.contains("show")) {
    hoverReveal1.classList.remove("show");
    hoverReveal.classList.add("show");
  } else if (hoverReveal2.classList.contains("show")) {
    hoverReveal2.classList.remove("show");
    hoverReveal.classList.add("show");
  } else {
    hoverReveal.classList.add("show");
  }
});
hover2.addEventListener("click", (event) => {
  event.preventDefault();
  if (hoverReveal1.classList.contains("show")) {
    hoverReveal1.classList.remove("show");
  } else if (hoverReveal.classList.contains("show")) {
    hoverReveal.classList.remove("show");
    hoverReveal1.classList.add("show");
  } else if (hoverReveal2.classList.contains("show")) {
    hoverReveal2.classList.remove("show");
    hoverReveal1.classList.add("show");
  } else {
    hoverReveal1.classList.add("show");
  }
});

hover3.addEventListener("click", (event) => {
  event.preventDefault();

  if (hoverReveal2.classList.contains("show")) {
    hoverReveal2.classList.remove("show");
  } else {
    hoverReveal.classList.remove("show");
    hoverReveal1.classList.remove("show");
    hoverReveal2.classList.add("show");
  }
});

function nextPagee() {
  window.open(
    "https://www.instagram.com/programmer14_25/profilecard/?igsh=YjQyeHJpN3lldWlq"
  );
}
function openTwitter() {
  window.open("https://x.com/programmer2005");
}
function nextPage() {
  window.open("https://abhaypanchalprogrammer.github.io/Personal-Portfolio/assets/CV-1.pdf");
}
function openlink() {
  window.open("https://www.linkedin.com/in/abhay-panchal-05966a337");
}
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  image.src = "pic.jpg";
  imagee.src = "pic.jpg";
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  image.src = "myself.jpg";
  imagee.src = "myself.jpg";
  localStorage.setItem("darkmode", null);
};
if (darkmode === "active") enableDarkmode();
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
