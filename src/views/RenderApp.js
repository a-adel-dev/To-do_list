import { ASide } from "./ASide.js";
import { ContentView } from "./ContentView.js";
import { Dialoge } from "./Dialoge.js";
import { NewProjectDialoge } from "./NewProjectDialogue.js";
import { NewTaskDialoge } from "./NewTaskDialoge.js";

function component(App) {
  const appView = document.createElement("div");
  appView.classList.add("flex", "h-full");

  appView.appendChild(ASide(App));
  appView.appendChild(ContentView(App));

  if (App.newProjectDialoge) {
    appView.appendChild(Dialoge(App, NewProjectDialoge(App)));
  }

  if (App.newTaskDialoge) {
    appView.appendChild(Dialoge(App, NewTaskDialoge(App)));
  }

  //create and append right col
  //console.log(App.projectList);

  return appView;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("p-12", "bg-blue-500", "text-white");

  const heading = document.createElement("h1");
  heading.textContent = "My To-Do List";
  heading.classList.add("text-2xl", "font-bold", "mb-2");
  header.appendChild(heading);

  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("text-center", "p-2", "bg-blue-400");

  const textNode1 = document.createTextNode("Developed by Ahmad Adel | ");
  footer.appendChild(textNode1);

  const link = document.createElement("a");
  link.href = "https://github.com/a-adel-dev/To-do_list";
  link.textContent = "source";
  footer.appendChild(link);

  return footer;
}

export function RenderApp(App, filter) {
  document.body.innerHTML = "";
  document.body.appendChild(createHeader());
  App.setFilter(filter);
  document.body.appendChild(component(App));
  document.body.appendChild(createFooter());

  const serializedData = JSON.stringify(App);
  localStorage.setItem("appData", serializedData);
}
