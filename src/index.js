import "./styles/projectWindow.css";
import "./styles/detailsWindow.css";
import "./styles/buttonsAndLinks.css";
import "./styles/styles.css";
import "./styles/editWindow.css";

import { openWindow, closeWindow } from "./domStuff/utilityFunctions";
import todoComponent from "./domStuff/components/todoItemComponent";

import homeProjectsArray from "./projectData";
import { arrayOfProjects } from "./projectData";
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
  projectItems,
} from "./domStuff/getElements";

console.log(projectItems);

// projectItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     alert("Item");
//   });
// });

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
    complete: false,
  });
});

addTaskButton.addEventListener("click", () => {
  homeProjects.editTask(editWindow);
});

class Project {
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
    this.displayTasks();
    closeWindow(editWindow);
  }

  editTask() {
    openWindow(editWindow);
  }
}

const homeProjects = new Project(homeProjectsArray);

let listOfProjects = [homeProjects];

arrayOfProjects.forEach((project) => {
  let item = new Project(project);
  listOfProjects.push(item);
});

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", (e) => {
    todoContent.innerHTML = "";
    console.log("olleh, dlrow");
    console.log("InnerText: ", projectItems[i].innerText);

    listOfProjects.forEach((item) => {
      let projectName = item.arrayOfTodos[0].project;
      if (projectName == projectItems[i].innerText) {
        console.log("ProJECT!!!");
        item.displayTasks();
      }
    });
  });
}

function displayProjectTask(tasks) {
  tasks.forEach((item) => {
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
