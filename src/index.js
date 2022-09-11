import { format } from "date-fns";

import editTaskComponent from "./domStuff/components/editComponent";
import { editIndex } from "./domStuff/components/todoItemComponent";
import { editComponentIndex } from "./domStuff/components/editComponent";

console.log(format(new Date(2022, 2, 43), "MM/dd/yyyy"));

import "./styles/projectWindow.css";
import "./styles/detailsWindow.css";
import "./styles/buttonsAndLinks.css";
import "./styles/styles.css";
import "./styles/editWindow.css";
import "./styles/taskComponent.css";

import Project from "./classes";
import {
  openWindow,
  closeWindow,
  toggleNavBar,
  isOpen,
} from "./domStuff/utilityFunctions";
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
  // ////////////
  submitTaskButton,
  // submitEditButton,

  // ////////////
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
  contentHeader,
} from "./domStuff/getElements";

let selectedProject;
let currentProjectElement;

// Function to choose current project
function chooseProject() {
  for (let i = 0; i < projectItems.length; i++) {
    projectItems[i].addEventListener("click", (e) => {
      todoContent.innerHTML = "";
      console.log("InnerText: ", projectItems[i].innerText);

      // console.log("Selected Project: ", selectedProject);
      // console.log(
      //   "🚀 ~ file: index.js ~ line 55 ~ currentProjectElement",
      //   currentProjectElement
      // );
      // console.log("Current Project Array: ", currentProject);

      listOfProjects.forEach((item) => {
        // let projectName = item.arrayOfTodos[0].project;
        if (item.nameOfProject == projectItems[i].innerText) {
          // console.log("Name: of project: ", item.nameOfProject);
          selectedProject = projectItems[i].innerText;

          if (currentProjectElement) {
            currentProjectElement.classList.remove("project-selected");
          }
          currentProjectElement = projectItems[i];
          currentProjectElement.classList.add("project-selected");
          contentHeader.innerText = "-- " + projectItems[i].innerText + " --";

          // projectItems[i].classList.add("project-selected");

          currentProject = item;
          currentProject.displayTasks();

          if (screen.width < 500) {
            toggleNavBar();
          }

          // item.displayTasks();

          // console.log("Selected Project: ", selectedProject);
          // console.log(
          //   "🚀 ~ file: index.js ~ line 55 ~ currentProjectElement",
          //   currentProjectElement
          // );
          // console.log("Current Project Array: ", currentProject);
        }
      });
    });
  }
}

createProjectBtn.addEventListener("click", () => {
  // console.log(projectNameInput.value);
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
  toggleNavBar();
});
closeEditButton.addEventListener("click", () => {
  closeWindow(editWindow);
});
closeDetailsButton.addEventListener("click", () => {
  closeWindow(detailsWindow);
});

// Opens nav bar on page load if device width < 500px
window.onload = function () {
  if (screen.width < 500) {
    toggleNavBar();
  }
};

chooseProject(); // Call function to add event listeners to all project elements

const homeProjects = new Project(homeProjectsArray, "Home");

const inbox = new Project(arrayOfProjects[0], "Inbox");

// Creates an array to contain a list of project objects;
let listOfProjects = [inbox];

// Create a Project object for from each item supplied from
// "arrayOfProjects" and pushes it to the "listOfProjects" array
arrayOfProjects.forEach((projectItem) => {
  let item = new Project(projectItem, projectItem[0].project);
  listOfProjects.push(item);
});
// Sets the current project
let currentProject = inbox;
let mode = "addingTask";

addTaskButton.addEventListener("click", () => {
  homeProjects.addTaskWindow(editWindow);
  mode = "addingTask";
});

submitTaskButton.addEventListener("click", () => {
  console.log("Current: ", currentProject);
  if (mode === "addingTask") {
    currentProject.addTask({
      title: editTitleInput.value,
      details: editDetailsInput.value,
      priority: editPriorityInput.value,
      dueDate: editDateInput.value,
      project: currentProject.nameOfProject,
      complete: false,
    });
    console.log("Current Project: ", currentProject);
  } else if (mode === "editingTask") {
    console.log(
      "Current Project: ",
      currentProject.arrayOfTodos[editComponentIndex].complete
    );
    currentProject.editTask(editComponentIndex, {
      title: editTitleInput.value,
      details: editDetailsInput.value,
      priority: editPriorityInput.value,
      dueDate: editDateInput.value,
      project: currentProject.nameOfProject,
      complete: currentProject.arrayOfTodos[editComponentIndex].complete,
    });

    mode = "addingTask";
    console.log("Component index: ", editComponentIndex);
  }
});

// Clicks on the first project, the INBOX
projectItems[0].click();

export { currentProject, mode };
