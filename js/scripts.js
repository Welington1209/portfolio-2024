AOS.init();

const icons = Array.from(document.querySelectorAll(".icon"));

icons.map((devIcon) => {
  devIcon.addEventListener("click", () => {
    devIcon.classList.toggle("border");
    devIcon.classList.toggle("hide");
  });
});

const app = document.getElementById("title-home");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter

  .typeString("Judges a book by its cover...")

  .pauseFor(2500)

  .pauseFor(200)
  .deleteChars(25)
  .start();
