import { overlay } from "./getElements";
import { navBar, content } from "./getElements";

let isOpen = true;
let isWindowOpen = false;

function openWindow(target) {
  overlay.classList.remove("overlay-display-none");
  target.classList.remove("display-none");

  isWindowOpen = !isWindowOpen;

  console.log("Is window open", isWindowOpen);
  console.log("Is Navbar open", isOpen);
}
function closeWindow(target) {
  target.classList.add("display-none");
  isWindowOpen = !isWindowOpen;

  if (!isOpen && screen.width < 500) {
    return;
  }
  console.log("Is window open", isWindowOpen);
  console.log("Is Navbar open", isOpen);
  overlay.classList.add("overlay-display-none");
}

function toggleNavBar() {
  console.log("Is window open", isWindowOpen);
  console.log("Is Navbar open", isOpen);
  if (screen.width < 500) {
    if (!isOpen && isWindowOpen) {
      navBar.classList.add("nav-close");
      content.classList.add("content-expand");
      overlay.classList.add("overlay-display-none");
    } else if (!isOpen && !isWindowOpen) {
      navBar.classList.add("nav-close");
      content.classList.add("content-expand");
      overlay.classList.add("overlay-display-none");
    } else {
      navBar.classList.remove("nav-close");
      content.classList.remove("content-expand");
      overlay.classList.remove("overlay-display-none");
    }
  } else {
    navBar.classList.toggle("nav-close");
    content.classList.toggle("content-expand");
  }

  isOpen = !isOpen;
}

// function toggleNavBar() {
//   console.log("Is window open", isWindowOpen);
//   console.log("Is Navbar open", isOpen);
//   if (screen.width < 500) {
//     if (!isOpen && isWindowOpen) {
//       navBar.classList.add("nav-close");
//       content.classList.add("content-expand");
//       // overlay.classList.add("overlay-display-none");
//       isOpen = !isOpen;
//     } else if (!isOpen && !isWindowOpen) {
//       navBar.classList.add("nav-close");
//       content.classList.add("content-expand");
//       overlay.classList.add("overlay-display-none");
//       isOpen = !isOpen;
//     } else {
//       navBar.classList.remove("nav-close");
//       content.classList.remove("content-expand");
//       overlay.classList.remove("overlay-display-none");

//       isOpen = !isOpen;
//     }
//   } else {
//     navBar.classList.toggle("nav-close");
//     content.classList.toggle("content-expand");
//     isOpen = !isOpen;
//   }
//   if (isWindowOpen) {
//     overlay.classList.add("overlay-display-none");
//   }
//   if (!isWindowOpen) {
//     overlay.classList.remove("overlay-display-none");
//   }
//   isOpen = !isOpen;
// }

export { closeWindow, openWindow, toggleNavBar };
