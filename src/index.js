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

      listOfProjectsObjects.forEach((item) => {
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

window.addEventListener("load", () => {
  console.log("jkskjjv sljfvbsflkj i");
  if (screen.width < 500) {
    toggleNavBar();
  }

  listOfProjectsObjects.forEach((project, i) => {
    if (i > 1) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("select-project");
      newDiv.innerText = project.nameOfProject;
      projectList.appendChild(newDiv);
      chooseProject();

      console.log("Project Data: ", project.nameOfProject);
    }
  });
});

createProjectBtn.addEventListener("click", (name) => {
  // console.log(projectNameInput.value);

  const newDiv = document.createElement("div");
  newDiv.classList.add("select-project");
  newDiv.innerText = projectNameInput.value;
  projectList.appendChild(newDiv);
  closeWindow(projectWindow);
  console.log(projectList);
  chooseProject();

  // listOfProjectsObjects.push(new Project([{ project: projectNameInput.value }]));
  listOfProjectsObjects.push(
    new Project([{ project: projectNameInput.value }])
  );
  listOfProjectsObjects.push(new Project([], projectNameInput.value));
  console.log("New Project: ", listOfProjectsObjects);

  // arrayOfProjects = listOfProjectsObjects;
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
window.onload = function () {};

chooseProject(); // Call function to add event listeners to all project elements

const homeProjects = new Project(homeProjectsArray, "Home");

// Creates an array to contain a list of project objects;
let listOfProjectsObjects = [];

// Checks if arrayOfProjects is empty
// if so, create a empty INBOX project object and adds it to the listOfProjectsObjects array
const inbox = new Project([], "Inbox");
if (arrayOfProjects.length == 0) {
  listOfProjectsObjects = [inbox];
} else {
  listOfProjectsObjects = [];
}

// Create a Project object for from each item supplied from
// "arrayOfProjects" and pushes it to the "listOfProjectsObjects" array
arrayOfProjects.forEach((projectItem, i) => {
  // Issue #023 project object name in this case comes from project property of first
  // task. Which is a big problem if there are no tasks at all

  console.log("Project Item", projectItem.nameOfProject);
  console.log(i);

  // let item = new Project(projectItem, projectItem[0].project); // Original

  let item = new Project(projectItem.arrayOfTodos, projectItem.nameOfProject); // Testing

  listOfProjectsObjects.push(item);
});

// Sets the current project
// Declare variables up top
let currentProject;

let mode = "addingTask";

// //////////////////////////////////////////////////////////
// if (localStorage.getItem("names")) {
//   let storedProjects = JSON.stringify(arrayOfProjects);
//   localStorage.setItem("allProjects", storedProjects);

//   let retrievedProjects = JSON.parse(localStorage.getItem("allProjects"));
//   console.log("Retrieved Projects:  ", retrievedProjects);
// } else {
//   console.log("Sorry!!");
// }

///////////////////////////////////////////////////////////////////////////////////

addTaskButton.addEventListener("click", () => {
  homeProjects.addTaskWindow(editWindow);
  console.log("Hello");
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
  } else if (mode === "editingTask") {
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

export { currentProject, mode, listOfProjectsObjects };
