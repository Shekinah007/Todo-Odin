import { overlay, detailsWindow } from "./getElements";

const body = document.querySelector("body");

function detailsComponent(titleText, details, priority, dueDate) {
  const container = document.createElement("div");
  container.classList.add("details-window");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-details-button");
  closeButton.innerText = "Close";

  const title = document.createElement("p");
  title.classList.add("details-title");
  title.innerText = titleText;

  const description = document.createElement("div");
  description.classList.add("details-description");
  description.innerText = details;

  function toggleDisplay(overlay, target) {
    overlay.classList.toggle("display-none");
    target.classList.toggle("display-none");
  }

  closeButton.addEventListener("click", () => {
    toggleDisplay(overlay, detailsWindow);
  });

  container.append(closeButton, title, description);

  return container;
}

export default detailsComponent;
