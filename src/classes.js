import { todoContent } from "./domStuff/getElements";
import todoComponent from "./domStuff/components/todoItemComponent";
import { openWindow } from "./domStuff/utilityFunctions";
import { closeWindow } from "./domStuff/utilityFunctions";
import { editWindow } from "./domStuff/getElements";

import { arrayOfProjects } from "./projectData";
import {
  listOfProjectsObjects,
  renderProjects,
  currentProject,
  getEveryTask,
} from "./index";

class Project {
  constructor(arrayOfTodos, nameOfProject) {
    this.arrayOfTodos = arrayOfTodos;
    this.nameOfProject = nameOfProject;
  }

  displayTasks() {
    todoContent.innerHTML = "";
    this.arrayOfTodos.forEach((item, index) => {
      todoContent.append(
        todoComponent(
          item.title,
          item.details,
          item.priority,
          item.dueDate,
          item.project,
          index,
          item.complete
        )
      );
    });
  }

  addTask(object) {
    this.arrayOfTodos.unshift(object);
    this.displayTasks();
    closeWindow(editWindow);

    getEveryTask();
    renderProjects();
    this.saveData();
  }

  addTaskWindow() {
    openWindow(editWindow);
  }

  deleteTask(index) {
    this.arrayOfTodos.splice(index, 1);
    this.displayTasks();

    getEveryTask();
    renderProjects();
    this.saveData();
  }

  editTask(index, object) {
    this.arrayOfTodos.splice(index, 1, object);
    this.displayTasks();
    closeWindow(editWindow);

    getEveryTask();
    this.saveData();
  }

  altEditTask(index, object) {
    this.arrayOfTodos.forEach((item, i) => {
      if (index == i) {
        item.title = object.title;
        item.details = object.details;
        item.priority = object.priority;
        item.dueDate = object.dueDate;
        item.project = object.project;
        item.complete = object.complete;
      }
    });
    this.displayTasks();
    closeWindow(editWindow);

    getEveryTask();
    this.saveData();
  }

  saveData() {
    // let storedProjects = JSON.stringify(arrayOfProjects);
    // localStorage.setItem("allProjects", storedProjects);

    // The idea is to save project after every action
    // that mutates to data in the -listOfProjectObjects-

    let parsedProjects = JSON.stringify(listOfProjectsObjects);
    localStorage.setItem("allProjects", parsedProjects);

    console.log("Class all projects: ", arrayOfProjects);
    console.log("Class all projects: ", listOfProjectsObjects);

    console.log("Project Objects: ", listOfProjectsObjects);
  }
}

export default Project;
