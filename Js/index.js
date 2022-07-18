// variables

const questions = document.querySelectorAll(".question");
const imginternet = document.querySelector(".img-internet");

// If question is click it's will activate "active element in CSS, the internet image will move"
questions.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.parentNode.classList.contains("active")) {
      element.parentNode.classList.toggle("active");
      imginternet.style.left = "-10%"; //come back to 10%
    } else {
      questions.forEach((element) =>
        element.parentNode.classList.remove("active")
      );
      element.parentNode.classList.add("active");
      imginternet.style.left = "-15%"; //move to 15%
    }
  });
});
