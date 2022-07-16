const questions = document.querySelectorAll(".question");

questions.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.parentNode.classList.contains("active")) {
      element.parentNode.classList.toggle("active");
    } else {
      questions.forEach((element) =>
        element.parentNode.classList.remove("active")
      );
      element.parentNode.classList.add("active");
    }
  });
});
