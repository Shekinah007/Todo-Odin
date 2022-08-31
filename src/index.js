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
} from "./domStuff/getElements";

import { openWindow, closeWindow } from "./domStuff/utilityFunctions";

import todoComponent from "./domStuff/components/todoItemComponent";

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
