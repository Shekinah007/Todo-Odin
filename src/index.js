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
  content,
} from "./domComponents/getElements";

import todoComponent from "./domComponents/todoItemComponent";

let array = [
  {
    title: "Hello World",
    details: "Greetings from me to you",
    priority: "Medium",
    dueDate: "12/12/44",
    complete: false,
  },
  { title: "Everybody loves ice cream", details: "I love ice-cream" },
];

detailsButton.addEventListener("click", () => {
  //   toggleDisplay(overlay, detailsWindow);
  content.append(
    todoComponent("Hello World", "come one", "medium", "20/1/8839")
  );
});

closeDetailsButton.addEventListener("click", () => {
  toggleDisplay(overlay, detailsWindow);
});

closeEditButton.addEventListener("click", () => {
  toggleDisplay(overlay, editWindow);
});

editButton.addEventListener("click", () => {
  toggleDisplay(overlay, editWindow);
});

function toggleDisplay(overlay, target) {
  overlay.classList.toggle("display-none");
  target.classList.toggle("display-none");
}

class Projects {
  constructor(arrayOfTodos) {
    this.arrayOfTodos = arrayOfTodos;
  }
}
