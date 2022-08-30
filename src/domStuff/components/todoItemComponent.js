import {
  overlay,
  editWindow,
  closeDetailsButton,
  closeEditButton,
  detailsWindow,
} from "../getElements";

import { openWindow, closeWindow } from "../utilityFunctions";
import detailsComponent from "./detailsWindow";

function todoComponent(titleText, details, priority, dueDate) {
  const container = document.createElement("div");
  container.classList.add("todo-item");

  const firstDiv = document.createElement("div");
  const input = document.createElement("input");
  input.type = "checkbox";
  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = titleText;

  firstDiv.append(input, title);

  const secondDiv = document.createElement("div");

  const detailsButton = document.createElement("button");
  detailsButton.classList.add("details-button");
  detailsButton.innerText = "Details";

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerText = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Delete";

  const date = document.createElement("p");
  date.classList.add("date");
  date.innerText = dueDate;

  secondDiv.append(detailsButton, editButton, date, deleteButton);

  container.append(firstDiv, secondDiv);

  detailsButton.addEventListener("click", () => {
    openWindow(detailsWindow);
    // detailsWindow.innerHTML = "";
    // detailsWindow.append(
    //   detailsComponent(titleText, details, priority, dueDate)
    // );
    detailsComponent(titleText, details, priority, dueDate);
  });

  editButton.addEventListener("click", () => {
    openWindow(editWindow);
  });

  // closeEditButton.addEventListener("click", () => {
  //   closeWindow(editWindow);
  // });

  return container;
}

export default todoComponent;
