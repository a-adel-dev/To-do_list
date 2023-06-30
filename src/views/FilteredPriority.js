import { createHeaderWithTitle } from "./FilteredViewHeader";
import { createTaskCard } from "./taskSimpleView";

export function FilteredPriority(App) {
  const priorityTasks = App.getPriorityTasks();

  const element = document.createElement("div");
  element.classList.add("w-full");

  element.appendChild(createHeaderWithTitle("Priority"));

  if (priorityTasks.length <= 0) {
    const nothing = document.createElement("h1");
    nothing.classList.add(
      "w-full",
      "p-12",
      "bg-slate-200",
      "rounded",
      "font-bold",
      "text-center"
    );
    nothing.innerHTML = "You're done for today! Go have some fun!";
    element.appendChild(nothing);
  } else {
    priorityTasks.forEach((task) => {
      element.append(createTaskCard(App, task));
    });
  }

  return element;
}
