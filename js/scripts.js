const icons = Array.from(document.querySelectorAll(".icon"));

const sections = Array.from(document.getElementsByTagName("section"));

const observer = new IntersectionObserver((entries) => {
  const entriesObject = entries[0].target;
  console.log(entriesObject);
  if (entriesObject.classList.contains("hide-section")) {
    entriesObject.classList.remove("hide-section");
  } else {
    entriesObject.classList.add("hide-section");
  }
}, {});

sections.map((sectionDom) => {
  observer.observe(sectionDom);
});

icons.map((devIcon) => {
  devIcon.addEventListener("click", () => {
    devIcon.classList.toggle("border");
    devIcon.classList.toggle("hide");
  });
});
