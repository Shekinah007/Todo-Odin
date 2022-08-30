import { closeDetailsButton, closeEditButton } from "./getElements";
import { openWindow, closeWindow } from "./utilityFunctions";

closeEditButton.addEventListener("click", () => {
  closeWindow(editWindow);
});

closeDetailsButton.addEventListener("click", () => {
  closeWindow(detailsWindow);
  console.log("Close Details");
});
