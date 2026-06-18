document.getElementById("lastModified").innerHTML =
    "Last Modification: " + document.lastModified;

const button = document.getElementById("hambutton");
const menu = document.querySelector(".navigation");

button.addEventListener("click", () => {
    menu.classList.toggle("show");
});