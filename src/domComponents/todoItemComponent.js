import { content } from "./getElements";

function todoComponent(titleText, details, priority, dueDate) {
  const container = document.createElement("div");
  container.classList.add("todo-item");

  const firstDiv = document.createElement("div");
  const input = document.createElement("input");
  input.type = "checkbox";
  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = titleText;

  firstDiv.append(input, title);

  const secondDiv = document.createElement("div");

  const detailsButton = document.createElement("button");
  detailsButton.classList.add("details-button");
  detailsButton.innerText = "Details";

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerText = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Delete";

  const date = document.createElement("p");
  date.classList.add("date");
  date.innerText = dueDate;

  secondDiv.append(detailsButton, editButton, date, deleteButton);

  container.append(firstDiv, secondDiv);

  return container;
}

export default todoComponent;
