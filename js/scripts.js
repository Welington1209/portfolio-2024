AOS.init();

const icons = Array.from(document.querySelectorAll(".icon"));

icons.map((devIcon) => {
  devIcon.addEventListener("click", () => {
    devIcon.classList.toggle("border");
    devIcon.classList.toggle("hide");
  });
});

const homeH2 = document.getElementById("home-h2");

var typewriter = new Typewriter(homeH2, {
  loop: true,
});

typewriter

  .typeString("I'm a Software Engineer.")

  .pauseFor(2500)

  .pauseFor(200)
  .deleteChars(20)
  .start();

