import { openWindow } from "../utilityFunctions";
import { mode } from "../..";
import { currentProject } from "../..";

import {
  editWindow,
  editTitleInput,
  editDetailsInput,
  editDateInput,
  editPriorityInput,
  editProjectInput,
  submitTaskButton,
} from "../getElements";

import { returnIndex } from "./todoItemComponent";
import { editIndex } from "./todoItemComponent";

var editComponentIndex;

function editTaskComponent(
  title,
  details,
  priority,
  dueDate,
  project,
  itemIndex
) {
  editComponentIndex = itemIndex;

  // submitTaskButton.innerText = "Edit Task";
  editTitleInput.value = title;
  editDetailsInput.value = details;
  editDateInput.value = dueDate;
  editPriorityInput.value = priority;

  console.log("EditComponentIndex: ", editComponentIndex);
}

export default editTaskComponent;
export { editComponentIndex };
