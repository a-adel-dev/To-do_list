import { FilteredTasksView } from "./FilteredTasksView.Js";
import { TaskDetailedView } from "./TaskDetailedView";
const moment = require("moment");

export function ContentView(App) {
  // <div class="right-col h-full w-full"></div>
  const element = document.createElement("div");

  element.classList.add(
    "content-view",
    "h-full",
    "w-full",
    "flex",
    "flex-col",
    "items-center",
    "p-24",
    "right-col"
  );

  if (App.taskView) {
    element.appendChild(TaskDetailedView(App));
    return element;
  }

  element.appendChild(FilteredTasksView(App));

  return element;
}
