import { overlay } from "./getElements";

function openWindow(target) {
  overlay.classList.remove("display-none");
  target.classList.remove("display-none");
}
function closeWindow(target) {
  overlay.classList.add("display-none");
  target.classList.add("display-none");
}

export { closeWindow, openWindow };
