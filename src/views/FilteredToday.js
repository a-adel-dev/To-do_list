import { createTaskCard } from "./taskSimpleView";
import { createHeaderWithTitle } from "./FilteredViewHeader";
const moment = require("moment");

export function FilteredToday(App) {
  const todaysTasks = App.getTodaysTasks();

  const element = document.createElement("div");

  element.appendChild(createHeaderWithTitle("Today"));

  element.classList.add("w-full");

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
