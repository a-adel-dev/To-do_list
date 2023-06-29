import { RenderApp } from "./RenderApp";
import { Project } from "../Project";

export function NewProjectDialoge(App) {
  const element = document.createElement("div");

  element.classList.add(
    "w-full",
    "h-full",
    "flex",
    "justify-center",
    "items-center",
    "absolute",
    "top-0",
    "left-0",
    "bg-black",
    "bg-opacity-75"
  );

  const dialoge = document.createElement("div");
  dialoge.classList.add("w-2/5", "p-8", "bg-slate-200", "rounded-lg");

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

  submit.addEventListener("click", () => {
    var newProject = new Project(input.value, App);
    App.NewProjectDialoge = false;
    RenderApp(App, App.getFilter());
  });

  group.appendChild(label);

  group.appendChild(input);
  form.appendChild(group);
  form.appendChild(submit);
  dialoge.appendChild(form);
  element.appendChild(dialoge);

  return element;
}
