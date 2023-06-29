import { RenderApp } from "./RenderApp";
import { Project } from "../Project";

export function NewProjectDialoge(App) {
  const element = document.createElement("div");

  const form = document.createElement("form");
  const group = document.createElement("div");

  group.classList.add("flex", "gap-4");

  const input = document.createElement("input");
  input.classList.add("w-full");
  input.id = "project-name";
  const label = document.createElement("label");
  label.innerHTML = "Project name";
  label.classList.add("flex-shrink-0");

  const submit = document.createElement("button");
  submit.innerHTML = "New Project";
  submit.classList.add(
    "bg-accent",
    "text-white",
    "p-2",
    "rounded",
    "mx-auto",
    "mt-4",
    "block"
  );

  submit.type = "button";

  submit.addEventListener("click", (e) => {
    e.stopPropagation();
    if (input.value.trim() != "") {
      console.log("name");
      var newProject = new Project(input.value, App);
      App.newProjectDialoge = false;
      RenderApp(App, App.getFilter());
    } else {
      input.placeholder = "enter valid name...";
      input.classList.add("border-solid", "border", "border-red-500");
      console.log(e);
    }
  });

  group.appendChild(label);

  group.appendChild(input);
  form.appendChild(group);
  form.appendChild(submit);

  element.appendChild(form);

  return element;
}
