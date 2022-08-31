import {
  detailsWindow,
  detailsProjectName,
  detailsTitle,
  detailsDescription,
  detailsPriority,
  detailsDueDate,
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
  console.log(
    "🚀 ~ file: detailsWindow.js ~ line 38 ~ altDetailsComponent ~ detailsTitle",
    detailsTitle
  );
  detailsDescription.innerText = details;
  detailsProjectName.innerText = "Project: " + project;
  detailsProjectName.style.textTransform = "capitalize";
  detailsPriority.innerText = priority;
  detailsDueDate.innerText = "Due date: " + dueDate;
}

export { altDetailsComponent };
// export default detailsComponent;
