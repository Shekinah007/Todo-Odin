const content = document.querySelector(".content");
const addButton = document.querySelector(".add-button");
const detailsButton = document.querySelector(".details-button");
const home = document.querySelector(".home");
const detailsWindow = document.querySelector(".details-window");
const editWindow = document.querySelector(".edit-window");
const editButton = document.querySelector(".edit-button");
const overlay = document.querySelector(".overlay");
const closeDetailsButton = document.querySelector(".close-details-button");
const closeEditButton = document.querySelector(".close-edit-button");
const addTaskButton = document.querySelector(".add-task");
const todoContent = document.querySelector(".todo-content");

const editTitleInput = document.querySelector(".edit-title-input");
const editDetailsInput = document.querySelector(".edit-details-input");
const editDateInput = document.querySelector(".edit-date-input");
const editPriorityInput = document.querySelector(".edit-priority-input");
const editProjectInput = document.querySelector(".edit-project-input");

const submitEditButton = document.querySelector(".submit-edit");

const detailsProjectName = document.querySelector(".details-label");
const detailsTitle = document.querySelector(".details-title");
const detailsDescription = document.querySelector(".details-description");
const detailsPriority = document.querySelector(".details-priority");
const detailsDueDate = document.querySelector(".details-dueDate");

const navToggleButton = document.querySelector(".nav-toggle");
const navBar = document.querySelector("nav");
const fullScreenBtn = document.querySelector(".fullscreen-btn");

const addProjectBtn = document.querySelector(".add-project-btn");
const projectWindow = document.querySelector(".project-window");
const projectNameInput = document.querySelector(".project-name-input");
const createProjectBtn = document.querySelector(".submit-project");
const cancelProjectBtn = document.querySelector(".close-project-window");

const projectItems = document.getElementsByClassName("select-project");

export {
  content,
  addButton,
  detailsButton,
  overlay,
  closeDetailsButton,
  detailsWindow,
  home,
  closeEditButton,
  editWindow,
  editButton,
  addTaskButton,
  todoContent,
  editTitleInput,
  editDetailsInput,
  submitEditButton,
  detailsProjectName,
  detailsTitle,
  detailsDescription,
  detailsPriority,
  detailsDueDate,
  navToggleButton,
  navBar,
  fullScreenBtn,
  editDateInput,
  editPriorityInput,
  editProjectInput,
  addProjectBtn,
  projectWindow,
  projectNameInput,
  createProjectBtn,
  cancelProjectBtn,
  projectItems,
};
