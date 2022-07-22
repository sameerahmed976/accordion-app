const button = document.querySelectorAll(".accordion");

button.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    const accordionHeading = e.currentTarget;

    accordionHeading.classList.toggle("active");

    const content = e.currentTarget.nextElementSibling;

    content.classList.toggle("content-active");
  });
});
