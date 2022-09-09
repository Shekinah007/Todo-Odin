import EditIcon from "./images2/pencil-outline.svg";

import {
  overlay,
  editWindow,
  closeDetailsButton,
  closeEditButton,
  detailsWindow,
} from "../getElements";

import { openWindow, closeWindow } from "../utilityFunctions";
import detailsComponent from "./detailsWindow";
import { altDetailsComponent } from "./detailsWindow";
import editTaskComponent from "./editComponent";
import { currentProject, mode } from "../..";

var editIndex;

function todoComponent(titleText, details, priority, dueDate, project, index) {
  let itemIndex = index;
  editIndex = index;

  const container = document.createElement("div");
  container.classList.add("todo-item");

  // const dataset = titleText

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
  detailsButton.innerText = "Info";

  const editButton = document.createElement("img");
  editButton.classList.add("edit-button");
  // editButton.innerText = "Hello";
  editButton.src = EditIcon;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Del";

  deleteButton.addEventListener("click", () => {
    currentProject.deleteTask(itemIndex);
  });

  const date = document.createElement("p");
  date.classList.add("date");
  date.innerText = dueDate;

  secondDiv.append(detailsButton, editButton, date, deleteButton);

  container.append(firstDiv, secondDiv);

  detailsButton.addEventListener("click", () => {
    openWindow(detailsWindow);
    altDetailsComponent(titleText, details, priority, dueDate, project);
  });

  title.addEventListener("click", () => {
    openWindow(detailsWindow);
    // console.log("Item Index= ", itemIndex);
    altDetailsComponent(titleText, details, priority, dueDate, project);
  });

  editButton.addEventListener("click", () => {
    // let newIndex =
    openWindow(editWindow);
    editTaskComponent(
      titleText,
      details,
      priority,
      dueDate,
      project,
      itemIndex
    );
    mode = "editingTask";
    console.log("Edit Button Index: ", itemIndex);
  });

  closeEditButton.addEventListener("click", () => {
    closeWindow(editWindow);
  });

  closeDetailsButton.addEventListener("click", () => {
    closeWindow(detailsWindow);
    console.log("Close Details");
  });

  return container;
}

function returnIndex() {
  return editIndex;
}

export default todoComponent;
export { editIndex };
export { returnIndex };
