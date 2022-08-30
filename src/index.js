const body = document.querySelector("body");

import homeProjectsArray from "./projectData";
import {
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
  submitTaskButton,
  detailsWindow,
} from "./domStuff/getElements";

import { openWindow, closeWindow } from "./domStuff/utilityFunctions";

import todoComponent from "./domStuff/components/todoItemComponent";

// editButton.addEventListener("click", () => {
//   openWindow(editWindow);
// });

closeEditButton.addEventListener("click", () => {
  closeWindow(editWindow);
});

closeDetailsButton.addEventListener("click", () => {
  closeWindow(detailsWindow);
  console.log("Close Details");
});

console.log(homeProjectsArray);

body.onscroll = () => {
  console.log("Hello body");
};

todoContent.onscroll = () => {
  console.log("Hello, todo-content");
};

content.onscroll = () => {
  console.log("hello, content");
};

// addTaskButton.addEventListener("click", () => {
//   homeProjects.addTask({
//     title: "New Tack Here",
//     details: "new Dummny Task",
//     priority: "High",
//     dueDate: "13/10/4408",
//     complete: false,
//   });
// });

submitTaskButton.addEventListener("click", () => {
  homeProjects.addTask({
    title: editTitleInput.value,
    details: editDetailsInput.value,
    priority: "High",
    dueDate: "13/10/4408",
    complete: false,
  });
});

addTaskButton.addEventListener("click", () => {
  homeProjects.editTask(editWindow);
});

// editButton.addEventListener("click", () => {
//   console.log("Heoo,");
// });

class Projects {
  constructor(arrayOfTodos) {
    this.arrayOfTodos = arrayOfTodos;
  }

  displayTasks() {
    this.arrayOfTodos.forEach((item) => {
      todoContent.append(
        todoComponent(item.title, item.details, item.priority, item.dueDate)
      );
    });
  }

  addTask(object) {
    this.arrayOfTodos.unshift(object);
    todoContent.innerHTML = "";
    console.log("Home Projects Array: ", homeProjectsArray);
    this.displayTasks();
    closeWindow(editWindow);
  }
  editTask() {
    openWindow(editWindow);
  }
}

const homeProjects = new Projects(homeProjectsArray);
homeProjects.displayTasks();
