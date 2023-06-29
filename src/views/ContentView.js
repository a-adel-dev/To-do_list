import { FilteredTasksView } from "./FilteredTasksView.Js";

export function ContentView(App) {
  // <div class="right-col h-full w-full"></div>

  const element = document.createElement("div");
  element.classList.add("h-full", "w-full");
  element.appendChild(FilteredTasksView(App));

  return element;
}
