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
import "./styles/projectSelect.css";

import Project from "./classes";
import {
  openWindow,
  closeWindow,
  toggleNavBar,
  isOpen,
  closeNavBar,
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
  projectList,
  contentHeader,
  projectItems,
  projectTasks,
  projectElementContainers,
  deleteProjectBtns,
} from "./domStuff/getElements";

let selectedProject;
let currentProjectElement;
let currentProjectElementContainer;

// Function to choose current project
function chooseProject() {
  for (let i = 0; i < projectItems.length; i++) {
    projectItems[i].addEventListener("click", (e) => {
      console.log("Project Element Name: ", projectItems[i].innerText);

      listOfProjectsObjects.forEach((item) => {
        // let projectName = item.arrayOfTodos[0].project;
        if (item.nameOfProject == projectItems[i].innerText) {
          // console.log("Name: of project: ", item.nameOfProject);
          selectedProject = projectItems[i].innerText;

          if (currentProjectElement) {
            currentProjectElement.classList.remove("project-selected");

            // Added
            currentProjectElementContainer.classList.remove(
              "container-selected"
            );
          }
          currentProjectElement = projectItems[i]; // OG
          currentProjectElement.classList.add("project-selected"); // OG

          // /////////////////////////////////////////////////
          // currentProjectElement = projectElementContainers[i];
          // ///////////////////////////////////////////////////////////
          // currentProjectElement.classList.add("container-selected");

          currentProjectElementContainer = projectElementContainers[i]; // *
          currentProjectElementContainer.classList.add("container-selected"); // *

          contentHeader.innerText = "-- " + projectItems[i].innerText + " --";

          // projectItems[i].classList.add("project-selected");

          currentProject = item;
          currentProject.displayTasks();
          if (screen.width < 500) {
            closeNavBar();
          }
        }
      });
    });
  }
}

function projectComponent(projectName, index, noOfTasks) {
  const container = document.createElement("div");
  container.classList.add("select-container");

  const projectNameDiv = document.createElement("div");
  projectNameDiv.classList.add("select-project");
  projectNameDiv.innerText = projectName;

  const tasks = document.createElement("p");
  tasks.classList.add("number-of-tasks");
  tasks.innerText = 0;
  if (noOfTasks) {
    tasks.innerHTML = noOfTasks;
  }

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("delete-project");
  deleteProjectButton.innerText = "del";

  deleteProjectButton.addEventListener("click", () => {
    // alert(index);
    listOfProjectsObjects.splice(index, 1);
    renderProjects();
  });

  container.append(projectNameDiv, deleteProjectButton, tasks);

  return container;
}

function renderProjects() {
  projectList.innerHTML = "";
  listOfProjectsObjects.forEach((project, i) => {
    if (i <= 1) {
      projectTasks[i].innerText = project.arrayOfTodos.length;
    }
    if (i > 1) {
      console.log("Project Object: ", project.arrayOfTodos.length);
      projectList.appendChild(
        projectComponent(project.nameOfProject, i, project.arrayOfTodos.length)
      );

      chooseProject();
    }
  });
}

window.addEventListener("load", () => {
  if (screen.width < 500) {
    toggleNavBar();
  }

  // On initial load of page, load every project from data if any
  renderProjects();
});

createProjectBtn.addEventListener("click", (name) => {
  closeWindow(projectWindow);
  console.log(projectList);

  listOfProjectsObjects.push(new Project([], projectNameInput.value));
  projectList.appendChild(
    projectComponent(projectNameInput.value, listOfProjectsObjects.length - 1)
  );
  console.log("New Project: ", listOfProjectsObjects);

  chooseProject();
  currentProject.saveData();
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
const all = new Project([], "All");
if (arrayOfProjects.length == 0) {
  listOfProjectsObjects = [inbox, all];
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
  // renderProjects();
});

// Clicks on the first project, the INBOX
projectItems[0].click();

export { currentProject, mode, listOfProjectsObjects, renderProjects };
