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
  projectList,
} from "./domStuff/getElements";

console.log(projectItems);

// projectItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     alert("Item");
//   });
// });

createProjectBtn.addEventListener("click", () => {
  console.log(projectNameInput.value);
  // listOfProjects.push(new Project([]));

  const newDiv = document.createElement("div");
  newDiv.classList.add("select-project");
  newDiv.innerText = projectNameInput.value;

  projectList.appendChild(newDiv);

  closeWindow(projectWindow);

  console.log(projectList);
});

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
// ////////////////////////////////////////////////////////////
let listOfProjects = [homeProjects];
// /////////////////////////////////////////////////////////////////
arrayOfProjects.forEach((project) => {
  let item = new Project(project);
  listOfProjects.push(item);
});

let currentProject = "Home";

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", (e) => {
    todoContent.innerHTML = "";
    console.log("InnerText: ", projectItems[i].innerText);

    listOfProjects.forEach((item) => {
      let projectName = item.arrayOfTodos[0].project;
      if (projectName == projectItems[i].innerText) {
        currentProject = item;
        console.log(item.arrayOfTodos);
        console.log("ProJECT!!!");
        item.displayTasks();
        console.log("Item: ", item);
        // displayProjectTask(item.arrayOfTodos);
      }
    });
  });
}

function addTask(project, object) {
  project.push(object);
}

addTaskButton.addEventListener("click", () => {
  homeProjects.editTask(editWindow);
});

submitEditButton.addEventListener("click", () => {
  console.log("Current: ", currentProject);
  currentProject.addTask({
    title: editTitleInput.value,
    details: editDetailsInput.value,
    priority: editPriorityInput.value,
    dueDate: editDateInput.value,
    project: editProjectInput.value,
    complete: false,
  });
  console.log("Current Project: ", currentProject);
});

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
