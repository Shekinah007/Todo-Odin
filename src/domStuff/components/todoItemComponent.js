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

function todoComponent(
  titleText,
  details,
  priority,
  dueDate,
  project,
  index,
  complete
) {
  let itemIndex = index;
  editIndex = index;

  console.log("Project:       ,mdfvjfv", project);
  const container = document.createElement("div");
  container.classList.add("todo-item");

  // const dataset = titleText

  const firstDiv = document.createElement("div");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = complete;

  // Functions to add and remove classes related to checkbox
  function addCheckedClass() {
    title.classList.add("title-complete");
    container.classList.add("todo-complete");
  }
  function removeCheckedClass() {
    title.classList.remove("title-complete");
    container.classList.remove("todo-complete");
  }

  // Changes the "complete" property of task item based on
  // checkbox state
  input.addEventListener("change", () => {
    title.classList.toggle("title-complete");
    container.classList.toggle("todo-complete");
    currentProject.arrayOfTodos.forEach((item, i) => {
      if (itemIndex == i) {
        if (input.checked == true) {
          item.complete = true;
          addCheckedClass();
        } else {
          item.complete = false;
          removeCheckedClass();
        }
      }
      console.log("Foreach: ", item.complete);
    });

    // console.log(currentProject.arrayOf);
  });

  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = titleText;

  // Add relevant css classes based on the "complete" property
  // on initial load of component
  if (input.checked === true) {
    addCheckedClass();
  }

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
    console.log("Current Project:", currentProject);
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
    altDetailsComponent(titleText, details, priority, dueDate, project);
  });

  editButton.addEventListener("click", () => {
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
