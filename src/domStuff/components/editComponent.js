import { openWindow } from "../utilityFunctions";

import {
  editWindow,
  editTitleInput,
  editDetailsInput,
  editDateInput,
  editPriorityInput,
  editProjectInput,
} from "../getElements";

function editTaskComponent(title, details, priority, dueDate, project) {
  editTitleInput.value = title;
  editDetailsInput.value = details;
  editDateInput.value = dueDate;
  editPriorityInput.value = priority;

  openWindow(editWindow);
}

export default editTaskComponent;
