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
const editForm = document.querySelector(".editCreate-form");

const submitTaskButton = document.querySelector(".submit-task");

const projectForm = document.querySelector(".project-form");
const detailsProjectName = document.querySelector(".details-label");
const detailsTitle = document.querySelector(".details-title");
const detailsDescription = document.querySelector(".details-description");
const detailsPriority = document.querySelector(".details-priority");
const detailsDueDate = document.querySelector(".details-dueDate");
const detailsTask = document.querySelector(".task-status");

const navToggleButton = document.querySelector(".nav-toggle");
const navBar = document.querySelector("nav");
const fullScreenBtn = document.querySelector(".fullscreen-btn");

const addProjectBtn = document.querySelector(".add-project-btn");
const projectWindow = document.querySelector(".project-window");
const projectNameInput = document.querySelector(".project-name-input");
const createProjectBtn = document.querySelector(".submit-project");
const cancelProjectBtn = document.querySelector(".close-project-window");
const projectList = document.querySelector(".project-list");

const projectItems = document.getElementsByClassName("select-project");
const projectElementContainers =
  document.getElementsByClassName("select-container");
const projectTasks = document.getElementsByClassName("number-of-tasks");
const deleteProjectBtns = document.getElementsByClassName("delete-project");

const contentHeader = document.querySelector(".content-header");

const allInputs = document.getElementsByClassName("input");

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
  editForm,
  editDetailsInput,
  // /////////////////
  submitTaskButton,
  // submitEditButton,

  detailsProjectName,
  detailsTitle,
  detailsDescription,
  detailsPriority,
  detailsDueDate,
  detailsTask,
  navToggleButton,
  navBar,
  fullScreenBtn,
  editDateInput,
  editPriorityInput,
  editProjectInput,
  addProjectBtn,
  projectForm,
  projectWindow,
  projectNameInput,
  createProjectBtn,
  cancelProjectBtn,
  projectList,
  projectTasks,
  deleteProjectBtns,
  projectItems,
  projectElementContainers,
  contentHeader,
  allInputs,
};
