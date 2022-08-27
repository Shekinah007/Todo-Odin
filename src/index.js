import {
  home,
  addButton,
  detailsButton,
  detailsWindow,
  overlay,
  closeDetailsButton,
  closeEditButton,
  editWindow,
  editButton,
  addTaskButton,
  todoContent,
} from "./domComponents/getElements";

import todoComponent from "./domComponents/todoItemComponent";
import homeProjectsArray from "./projectData";
console.log(homeProjectsArray);

addTaskButton.addEventListener("click", () => {
  homeProjects.addTask({
    title: "New Tack Here",
    details: "new Dummny Task",
    priority: "High",
    dueDate: "13/10/4408",
    complete: false,
  });
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
        todoComponent(item.title, item.detauls, item.priority, item.dueDate)
      );
    });
  }

  addTask(object) {
    this.arrayOfTodos.push(object);
    todoContent.innerHTML = "";
    this.displayTasks();
  }
  //   editTask() {}
}

const homeProjects = new Projects(homeProjectsArray);
homeProjects.displayTasks();
