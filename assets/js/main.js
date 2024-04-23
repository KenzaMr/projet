const icon= document.querySelector("#burger")
const nav = document.querySelector("nav");
icon.addEventListener("click", function () {
  // Si la nav a la class active on enleve class active
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    console.log(nav)
  }
  // sinon on ajoute la class active
  else {
    nav.setAttribute("class", "active");
    console.log(nav)
  }
});