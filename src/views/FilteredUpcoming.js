import { createTaskCard } from "./taskSimpleView";
import { createHeaderWithTitle } from "./FilteredViewHeader";

export function FilteredUpcoming(App) {
  const todaysTasks = App.getUpcomingTasks();

  const element = document.createElement("div");
  element.classList.add("w-full");

  element.appendChild(createHeaderWithTitle("Next 7 days"));

  if (todaysTasks.length <= 0) {
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
    todaysTasks.forEach((task) => {
      element.append(createTaskCard(App, task));
    });
  }

  return element;
}
