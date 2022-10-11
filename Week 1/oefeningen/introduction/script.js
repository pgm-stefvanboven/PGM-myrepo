const pElement = document.querySelector(".person");
pElement.addEventListener("click", function(ev) {
  const fullName = prompt("Enter full name");
  pElement.querySelector(".fullname").textContent = fullName;
});