// active header sticky
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50); //this
});

//************** */   active scroll menu
let lilink = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let seclength = section.length;
  while (--seclength && window.scrollY + 500 < section[seclength].offsetTop) {}
  lilink.forEach((sec) => sec.classList.remove("active"));
  lilink[seclength].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// active menu icon

// let menuicon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menuicon.onclick = () => {
//   menuicon.classList.add("bx-x");
//   menuicon.classList.add("open");
  
// }

// let menuicon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// let isMenuOpen = false; // Track the menu state

// menuicon.onclick = () => {
//   if (!isMenuOpen) {
//     menuicon.classList.add("bx-x");
//     menuicon.classList.add("open");
//     navlist.style.display = "block"; // Show the navigation menu
//     isMenuOpen = true;
//   } else {
//     menuicon.classList.remove("bx-x");
//     menuicon.classList.remove("open");
//     navlist.style.display = "none"; // Hide the navigation menu
//     isMenuOpen = false;
//   }
// };

// window.onscroll= () =>{
//   menuicon.classList.remove("bx-x");
//   navlist.classList.remove("open");
// };



let menuicon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

let isMenuOpen = false; // Track the menu state

menuicon.onclick = () => {
  if (!isMenuOpen) {
    menuicon.classList.add("bx-x");
    navlist.classList.add("open");
    navlist.style.display = "block"; // Show the navigation menu
    isMenuOpen = true;
  } else {
    menuicon.classList.remove("bx-x");
    navlist.classList.remove("open");
    navlist.style.display = "none"; // Hide the navigation menu
    isMenuOpen = false;
  }
};

window.onscroll = () => {
  menuicon.classList.remove("bx-x");
  navlist.classList.remove("open");
};













// menuicon.onclick = () =>{
//   menuicon.classList.remove("navbar");
// }

// window.onscroll=()=>{
//   menuicon.classList.remove("bx-x");
//   navlist.classList.remove("open");

// }
