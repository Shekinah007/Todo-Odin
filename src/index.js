import "./styles/projectWindow.css";
import "./styles/detailsWindow.css";
import "./styles/buttonsAndLinks.css";
import "./styles/styles.css";
import "./styles/editWindow.css";

import homeProjectsArray from "./projectData";
import {
  navBar,
  content,
  home,
  addButton,
  detailsB,
  overlay,
  closeDetailsButton,
  closeEditButton,
  editWindow,
  editButton,
  addTaskButton,
  todoContent,
  editDetailsInput,
  editTitleInput,
  submitEditButton,
  detailsWindow,
  navToggleButton,
  fullScreenBtn,
  editProjectInput,
  editPriorityInput,
  editDateInput,
  addProjectBtn,
  projectWindow,
  projectNameInput,
  cancelProjectBtn,
  createProjectBtn,
} from "./domStuff/getElements";

addEventListener("load", function () {
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    viewport.content + ", height=" + window.innerHeight
  );
});

import { openWindow, closeWindow } from "./domStuff/utilityFunctions";

import todoComponent from "./domStuff/components/todoItemComponent";

addProjectBtn.addEventListener("click", () => {
  openWindow(projectWindow);
});

cancelProjectBtn.addEventListener("click", () => {
  console.log("Hello project");
  closeWindow(projectWindow);
});

fullScreenBtn.addEventListener("click", () => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
});

navToggleButton.addEventListener("click", () => {
  navBar.classList.toggle("nav-close");
  content.classList.toggle("content-expand");
});

closeEditButton.addEventListener("click", () => {
  closeWindow(editWindow);
});

closeDetailsButton.addEventListener("click", () => {
  closeWindow(detailsWindow);
  console.log("Close Details");
});

todoContent.onscroll = () => {
  console.log("Hello, todo-content");
};

submitEditButton.addEventListener("click", () => {
  homeProjects.addTask({
    title: editTitleInput.value,
    details: editDetailsInput.value,
    priority: editPriorityInput.value,
    dueDate: editDateInput.value,
    project: editProjectInput.value,
    // complete: false,
  });
});

addTaskButton.addEventListener("click", () => {
  homeProjects.editTask(editWindow);
});

class Projects {
  constructor(arrayOfTodos) {
    this.arrayOfTodos = arrayOfTodos;
  }

  displayTasks() {
    this.arrayOfTodos.forEach((item) => {
      todoContent.append(
        todoComponent(
          item.title,
          item.details,
          item.priority,
          item.dueDate,
          item.project
        )
      );
    });
  }

  addTask(object) {
    this.arrayOfTodos.unshift(object);
    todoContent.innerHTML = "";
    // console.log("Home Projects Array: ", homeProjectsArray);
    this.displayTasks();
    closeWindow(editWindow);
  }

  editTask() {
    openWindow(editWindow);
  }
}

const homeProjects = new Projects(homeProjectsArray);
homeProjects.displayTasks();

// document.documentElement.style.setProperty("overflow", "auto");
// const metaViewport = document.querySelector("meta[name=viewport]");
// metaViewport.setAttribute(
//   "content",
//   "height=" + initialHeight + "px, width=device-width, initial-scale=1.0"
// );

const metaViewport = document.querySelector("meta[name=viewport]");
metaViewport.setAttribute(
  "content",
  "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
);
