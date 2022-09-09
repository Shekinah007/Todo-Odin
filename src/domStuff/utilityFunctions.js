import { overlay } from "./getElements";
import { navBar, content } from "./getElements";

let isOpen = true;
let isWindowOpen = false;

function openWindow(target) {
  target.classList.remove("display-none");

  setTimeout(() => {
    overlay.classList.remove("overlay-display-none");
  }, 250);

  isWindowOpen = !isWindowOpen;

  // console.log("Is window open", isWindowOpen);
  // console.log("Is Navbar open", isOpen);
}
function closeWindow(target) {
  overlay.classList.add("overlay-display-none");

  setTimeout(() => {
    target.classList.add("display-none");
  }, 60);
  isWindowOpen = !isWindowOpen;

  if (!isOpen && screen.width < 500) {
    return;
  }
  // console.log("Is window open", isWindowOpen);
  // console.log("Is Navbar open", isOpen);
}

function toggleNavBar() {
  // console.log("Is window open", isWindowOpen);
  // console.log("Is Navbar open", isOpen);
  if (screen.width < 500) {
    if (!isOpen && isWindowOpen) {
      navBar.classList.add("nav-close");
      content.classList.add("content-expand");

      // setTimeout(() => {
      //   overlay.classList.remove("overlay-display-none");
      // }, 500);

      overlay.classList.add("overlay-display-none");
      console.log("First");
    } else if (!isOpen && !isWindowOpen) {
      navBar.classList.add("nav-close");
      content.classList.add("content-expand");
      overlay.classList.add("overlay-display-none");
      // setTimeout(() => {
      //   overlay.classList.remove("overlay-display-none");
      // }, 500);
      console.log("Second");
    } else {
      navBar.classList.remove("nav-close");
      content.classList.remove("content-expand");
      overlay.classList.remove("overlay-display-none");
      console.log("Third");
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

function addCheckedClass() {}

export { closeWindow, openWindow, toggleNavBar };
