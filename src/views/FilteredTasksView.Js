import { FilteredToday } from "./FilteredToday";
import { FilteredPriority } from "./FilteredPriority";
import { FilteredUpcoming } from "./FilteredUpcoming";

export function FilteredTasksView(App) {
  const element = document.createElement("div");

  element.classList.add("w-full", "filtered-task-view");

  switch (App.getFilter()) {
    case "today":
      element.innerHTML = "";
      element.appendChild(FilteredToday(App));
      break;
    case "priority":
      element.innerHTML = "";
      element.appendChild(FilteredPriority(App));
      break;
    case "calendar":
      element.innerHTML = "";
      element.appendChild(FilteredUpcoming(App));
      break;
    default:
      element.innerHTML = "";
      element.appendChild(FilteredToday(App));
  }

  return element;
}
