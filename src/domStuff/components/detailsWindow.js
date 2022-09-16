import {
  detailsWindow,
  detailsProjectName,
  detailsTitle,
  detailsDescription,
  detailsPriority,
  detailsDueDate,
  detailsTask,
} from "../getElements";
import { closeWindow } from "../utilityFunctions";

function altDetailsComponent(
  titleText,
  details,
  priority,
  dueDate,
  project,
  complete
) {
  detailsWindow.classList.remove("details-low");
  detailsWindow.classList.remove("details-medium");
  detailsWindow.classList.remove("details-high");
  detailsWindow.classList.add("details-" + priority);
  detailsTitle.innerText = titleText;
  detailsDescription.innerText = details;
  if (!details) {
    detailsDescription.innerText = "...no description";
  }
  detailsProjectName.innerText = "Project: " + project;
  detailsProjectName.style.textTransform = "capitalize";
  detailsPriority.innerText = priority;
  detailsDueDate.innerText = "Due date: " + dueDate;
  if (complete) {
    detailsTask.innerText = "Complete";
  } else detailsTask.innerText = "Pending";
}

export { altDetailsComponent };
// export default detailsComponent;
