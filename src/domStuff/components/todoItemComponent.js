import EditIcon from "./images2/file-document-edit.svg";
import DeleteIcon from "./images2/delete.png";

import { listOfProjectsObjects } from "../..";

import {
  editWindow,
  closeDetailsButton,
  closeEditButton,
  detailsWindow,
  deleteWindow,
  confirmDeleteBtn,
  deleteTitle,
  deleteTarget,
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
  complete,
  dateCreated
) {
  let itemIndex = index;
  console.log("item Index: ", index);
  editIndex = index;

  console.log("Project:", project);
  const container = document.createElement("div");
  container.classList.add("todo-item");
  // if (index == currentProject.arrayOfTodos.length - 1 && mode == "addingTask") {
  //   container.classList.add("animation-enter");
  // }
  // setTimeout(() => {
  //   container.classList.remove("animation-enter");
  // }, 500);

  // setTimeout(() => {
  //   container.classList.add("animation-enter");
  // }, 1000);

  // Adds class based on priority value
  container.classList.add(priority + "-priority");

  const firstDiv = document.createElement("div");
  firstDiv.classList.add("title-container");
  firstDiv.classList.add("title-" + priority);

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
      currentProject.displayTasks();
    });

    currentProject.saveData();
  });

  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = titleText;

  // Add relevant css classes based on the "complete" property
  // on initial load of component
  if (input.checked === true) {
    addCheckedClass();
  }

  if (currentProject.nameOfProject == "All") {
    firstDiv.append(title);
  } else firstDiv.append(title);

  const secondDiv = document.createElement("div");

  const detailsButton = document.createElement("button");
  detailsButton.classList.add("details-button");
  detailsButton.innerText = "Info";

  // const editButton = document.createElement("img");
  const editButton = new Image();
  editButton.src = EditIcon;
  editButton.classList.add("edit-button");
  // editButton.innerText = "Hello";
  // editButton.src = EditIcon;

  const deleteButton = new Image();
  deleteButton.src = DeleteIcon;

  deleteButton.classList.add("delete-button");

  function confirmTaskDelete() {
    container.classList.add("animation-slideOut");
    closeWindow(deleteWindow);

    setTimeout(() => {
      currentProject.deleteTask(itemIndex);
      confirmDeleteBtn.removeEventListener("click", confirmTaskDelete);
    }, 300);
  }

  deleteButton.addEventListener("click", () => {
    openWindow(deleteWindow);
    deleteTarget.innerText = "Task:";
    deleteTitle.innerText = titleText + " ?";
    confirmDeleteBtn.addEventListener("click", confirmTaskDelete);
  });

  const date = document.createElement("p");
  date.classList.add("date");
  let formattedDate = new Date(dueDate) + "";
  if (!dueDate) {
    formattedDate = "";
  }
  date.innerText = formattedDate.substring(0, 10);

  if (currentProject.nameOfProject == "All") {
    secondDiv.append(date);
  } else {
    secondDiv.append(date, editButton, deleteButton);
  }

  // secondDiv.append(detailsButton, editButton, date, deleteButton);

  container.append(input, firstDiv, secondDiv);

  detailsButton.addEventListener("click", () => {
    openWindow(detailsWindow);
    altDetailsComponent(
      titleText,
      details,
      priority,
      dueDate,
      project,
      complete,
      dateCreated
    );
  });

  date.addEventListener("click", () => {
    openWindow(detailsWindow);
    altDetailsComponent(
      titleText,
      details,
      priority,
      dueDate,
      project,
      complete,
      dateCreated
    );
  });
  firstDiv.addEventListener("click", () => {
    openWindow(detailsWindow);
    altDetailsComponent(
      titleText,
      details,
      priority,
      dueDate,
      project,
      complete,
      dateCreated
    );
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
