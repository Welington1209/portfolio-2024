const htmlIcon = document.querySelector("#html-icon");

const cssIcon = document.querySelector("#css-icon");

const jsIcon = document.querySelector("#js-icon");

const reactIcon = document.querySelector("#react-icon");

const gitIcon = document.querySelector("#git-icon");

const sassIcon = document.querySelector("#sass-icon");

const gitHubIcon = document.querySelector("#gitHub-icon");

const icons = [
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  sassIcon,
  gitHubIcon,
];

icons.map((devIcon) => {
  devIcon.addEventListener("click", () => {
    devIcon.classList.toggle("border");
    devIcon.classList.toggle("hide");
  });
});
