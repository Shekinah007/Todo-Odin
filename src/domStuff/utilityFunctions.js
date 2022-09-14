import { overlay } from "./getElements";
import { navBar, content, allInputs } from "./getElements";

let isNavOpen = true;
let isWindowOpen = false;

function openWindow(target) {
  if (screen.width > 500) {
    isNavOpen = false;
  }
  target.classList.remove("display-none");
  overlay.classList.remove("overlay-display-none");

  isWindowOpen = true;
}

function closeWindow(target) {
  isWindowOpen = false;
  target.classList.add("display-none");

  if (isNavOpen == false) {
    overlay.classList.add("overlay-display-none");
  }
}

// function toggleNavBar() {
//   if (screen.width < 500) {
//     if (isNavOpen == true) {
//       console.log("I'm alive!!!");

//       navBar.classList.add("nav-close");
//       if (isWindowOpen == false) {
//         overlay.classList.add("overlay-display-none");
//       }
//     } else if (isNavOpen == false) {
//       console.log("I'm here!!");

//       navBar.classList.remove("nav-close");
//       overlay.classList.remove("overlay-display-none");

//       if (isWindowOpen == false) {
//       }
//     }
//   } else {
//     navBar.classList.toggle("nav-close");
//     content.classList.toggle("content-expand");
//   }
//   isNavOpen = !isNavOpen;

//   if (screen.width > 500) {
//     isNavOpen = false;
//   }
// }

function toggleNavBar() {
  if (screen.width < 500) {
    if (isNavOpen == true) {
      closeNavBar();
    } else {
      openNavBar();
    }
  } else {
    navBar.classList.toggle("nav-close");
    content.classList.toggle("content-expand");
  }
}

function openNavBar() {
  navBar.classList.remove("nav-close");
  if (isWindowOpen == false) {
    overlay.classList.remove("overlay-display-none");
  }
  isNavOpen = true;
}

function closeNavBar() {
  navBar.classList.add("nav-close");
  if (isWindowOpen == false) {
    overlay.classList.add("overlay-display-none");
  }

  isNavOpen = false;
}

function clearInputs() {
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].value = "";
    console.log("Input item: ", allInputs[i]);
  }
}

export {
  closeWindow,
  openWindow,
  toggleNavBar,
  closeNavBar,
  openNavBar,
  clearInputs,
};
