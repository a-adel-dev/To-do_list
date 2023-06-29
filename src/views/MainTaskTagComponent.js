import { RenderApp } from "./RenderApp";
import { ContentView } from "./ContentView";
import { FilteredTasksView } from "./FilteredTasksView.Js";

export function MainTaskTagComponent(App, parent, img, text, func, filter) {
  const element = document.createElement("div");
  element.classList.add("flex", "gap-2");
  parent.appendChild(element);

  const Icon = new Image();
  Icon.src = img;
  element.appendChild(Icon);

  const title = document.createElement("h1");
  title.classList.add("font-bold");
  title.innerHTML = text;
  element.appendChild(title);

  const numTodaysTasks = document.createElement("button");

  numTodaysTasks.addEventListener("click", () => {
    RenderApp(App, filter);
  });
  numTodaysTasks.innerHTML = func().length.toString();
  parent.appendChild(numTodaysTasks);
}
