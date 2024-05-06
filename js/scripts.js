AOS.init();


const icons = Array.from(document.querySelectorAll(".icon"));

// const sections = Array.from(document.getElementsByTagName("section"));

// const observer = new IntersectionObserver((entries) => {
//   Array.from(entries).map((entry) => {

//     const entriesTarget = entry.target;

//     if (entry.isIntersecting) {
//       entriesTarget.classList.add("show");

//       entriesTarget.classList.remove("hidden-section");
//     } else {
//       entriesTarget.classList.remove("show");

//       entriesTarget.classList.add("hidden-section");
//     }
//   });
// });

// sections.map((sectionDom) => {
//   observer.observe(sectionDom);
// });

icons.map((devIcon) => {
  devIcon.addEventListener("click", () => {
    devIcon.classList.toggle("border");
    devIcon.classList.toggle("hide");
  });
});

const app = document.getElementById('title-home');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Judges a book by its cover ...')
.pauseFor(2000)
// .deleteAll()
.pauseFor(200)
.deleteChars(25)
.start();


