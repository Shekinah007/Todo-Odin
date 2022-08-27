import { home, addButton } from "./domComponents/getElements";

addButton.addEventListener("click", () => {
  alert("Clicked");
});
home.addEventListener("click", () => {
  alert("Home");
});
