AOS.init();

const icons = Array.from(document.querySelectorAll(".icon"));
const homeH2 = document.getElementById("home-h2");
const toTopBtn = document.querySelector("#to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

icons.map((devIcon) => {
  devIcon.addEventListener("click", () => {
    devIcon.classList.toggle("border");
    devIcon.classList.toggle("hide");
  });
});

var typewriter = new Typewriter(homeH2, {
  loop: true,
});

typewriter

  .typeString("I'm a Software Engineer.")

  .pauseFor(2500)

  .pauseFor(200)
  .deleteChars(20)
  .start();
