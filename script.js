const list = document.querySelectorAll(".list");
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");

// for active button
list.forEach((item) => item.addEventListener("click", activelink));