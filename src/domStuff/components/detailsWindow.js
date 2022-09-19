import {
  detailsWindow,
  detailsProjectName,
  detailsTitle,
  detailsDescription,
  detailsPriority,
  detailsDueDate,
  detailsTask,
  detailsDateAdded,
} from "../getElements";
import { closeWindow } from "../utilityFunctions";

function altDetailsComponent(
  titleText,
  details,
  priority,
  dueDate,
  project,
  complete,
  dateCreated
) {
  console.log("Details Added: ", dateCreated);

  detailsWindow.classList.remove("details-low");
  detailsWindow.classList.remove("details-medium");
  detailsWindow.classList.remove("details-high");

  detailsDateAdded.innerText = dateCreated;
  detailsWindow.classList.add("details-" + priority);
  detailsTitle.innerText = titleText;
  detailsDescription.innerText = details;
  if (!details) {
    detailsDescription.innerText = "...no description";
  }
  detailsProjectName.innerText = "Project: " + project;
  detailsProjectName.style.textTransform = "capitalize";
  detailsPriority.innerText = priority;
  let formattedDate = new Date(dueDate) + "";
  if (!dueDate) {
    formattedDate = "Not Set";
  }
  date.innerText = formattedDate.substring(0, 16);
  detailsDueDate.innerText = "Due date: " + formattedDate.substring(0, 16);

  if (complete) {
    detailsTask.innerText = "Complete";
  } else detailsTask.innerText = "Pending";
}

export { altDetailsComponent };
// export default detailsComponent;
