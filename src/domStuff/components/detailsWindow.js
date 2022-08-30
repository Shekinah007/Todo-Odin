import {
  detailsWindow,
  detailsProjectName,
  detailsTitle,
  detailsDescription,
} from "../getElements";
import { closeWindow } from "../utilityFunctions";
// const firstDiv = detailsWindow.getElementsByTagName("div")[0];

// function detailsComponent(titleText, details, priority, dueDate) {
//   const container = document.createElement("div");
//   container.classList.add("details-window");

//   const closeButton = document.createElement("button");
//   closeButton.classList.add("close-details-button");
//   closeButton.innerText = "Close";

//   const title = document.createElement("p");
//   title.classList.add("details-title");
//   title.innerText = titleText;

//   const description = document.createElement("div");
//   description.classList.add("details-description");
//   description.innerText = details;

//   closeButton.addEventListener("click", () => {
//     closeWindow(detailsWindow);
//   });

//   container.append(closeButton, title, description);

//   return container;
// }

function altDetailsComponent(titleText, details, priority, dueDate, project) {
  detailsTitle.innerText = titleText;
  detailsDescription.innerText = details;
  detailsProjectName.innerText = "Project: " + project;
}

export { altDetailsComponent };
// export default detailsComponent;
