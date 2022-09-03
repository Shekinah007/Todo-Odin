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

let selectedProject;

function chooseProject() {
  for (let i = 0; i < projectItems.length; i++) {
    projectItems[i].addEventListener("click", (e) => {
      todoContent.innerHTML = "";
      console.log("InnerText: ", projectItems[i].innerText);

      listOfProjects.forEach((item) => {
        // let projectName = item.arrayOfTodos[0].project;
        if (item.nameOfProject == projectItems[i].innerText) {
          console.log("Name: of project: ", item.nameOfProject);
          selectedProject = projectItems[i].innerText;
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
}

createProjectBtn.addEventListener("click", () => {
  console.log(projectNameInput.value);
  const newDiv = document.createElement("div");
  newDiv.classList.add("select-project");
  newDiv.innerText = projectNameInput.value;
  projectList.appendChild(newDiv);
  closeWindow(projectWindow);
  console.log(projectList);
  chooseProject();

  // listOfProjects.push(new Project([{ project: projectNameInput.value }]));
  listOfProjects.push(new Project([{ project: projectNameInput.value }]));
  listOfProjects.push(new Project([], projectNameInput.value));
  console.log("New Project: ", listOfProjects);
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
  constructor(arrayOfTodos, nameOfProject) {
    this.arrayOfTodos = arrayOfTodos;
    this.nameOfProject = nameOfProject;
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
arrayOfProjects.forEach((projectItem) => {
  let item = new Project(projectItem, projectItem[0].project);
  listOfProjects.push(item);
});

let currentProject = "Home";

chooseProject();

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
    project: currentProject.nameOfProject,
    complete: false,
  });
  console.log("Current Project: ", currentProject);
});
