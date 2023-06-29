import { ASide } from "./ASide.js";
import { ContentView } from "./ContentView.js";
import { NewProjectDialoge } from "./NewProjectDialogue.js";

function component(App) {
  const appView = document.createElement("div");
  appView.classList.add("flex", "h-full");

  appView.appendChild(ASide(App));
  appView.appendChild(ContentView(App));
  if (App.NewProjectDialoge) {
    appView.appendChild(NewProjectDialoge(App));
  }

  //create and append right col
  console.log(App.projectList);

  return appView;
}

export function RenderApp(App, filter) {
  document.body.innerHTML = "";
  App.setFilter(filter);
  document.body.appendChild(component(App));
}
