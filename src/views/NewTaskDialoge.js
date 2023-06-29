import { RenderApp } from "./RenderApp";
import { Project } from "../Project";
import { Task } from "../Task";
const moment = require("moment");

export function NewTaskDialoge(App) {
  const element = document.createElement("div");

  const form = document.createElement("form");

  form.classList.add("grid", "grid-cols-3", "gap-4");

  const taskNameInput = document.createElement("input");
  taskNameInput.classList.add("w-full", "col-span-2");
  taskNameInput.id = "task-name";
  const taskLabel = document.createElement("label");
  taskLabel.htmlFor = "task-name";
  taskLabel.innerHTML = "Task name";
  form.appendChild(taskLabel);
  form.appendChild(taskNameInput);

  const taskColorInput = document.createElement("input");
  taskColorInput.classList.add("w-full", "col-span-2");
  taskColorInput.id = "task-color";
  taskColorInput.type = "color";
  taskColorInput.value = "#999";
  const taskColorLabel = document.createElement("label");
  taskColorLabel.htmlFor = "task-color";
  taskColorLabel.innerHTML = "Task color";
  form.appendChild(taskColorLabel);
  form.appendChild(taskColorInput);

  let projectSelector = document.createElement("SELECT");
  projectSelector.classList.add("w-full", "col-span-2");
  projectSelector.id = "project-name";

  App.projectList.map((lang, i) => {
    let opt = document.createElement("option");
    opt.value = i; // the index
    opt.innerHTML = lang.name;
    projectSelector.append(opt);
  });

  const projectSelectorLabel = document.createElement("label");
  projectSelectorLabel.htmlFor = "project-name";
  projectSelectorLabel.innerHTML = "Project";
  form.appendChild(projectSelectorLabel);
  form.appendChild(projectSelector);

  const taskDescription = document.createElement("textarea");
  taskDescription.classList.add("w-full", "col-span-2");
  taskDescription.id = "task-area";
  const taskareaLabel = document.createElement("label");
  taskareaLabel.htmlFor = "task-area";
  taskareaLabel.innerHTML = "Description";
  form.appendChild(taskareaLabel);
  form.appendChild(taskDescription);

  const dueDateInput = document.createElement("input");
  dueDateInput.classList.add("w-full", "col-span-2");
  dueDateInput.id = "due-date";
  dueDateInput.type = "date";
  const currentDate = moment().format("YYYY-MM-DD");
  dueDateInput.value = currentDate;
  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "due-date";
  dueDateLabel.innerHTML = "Due date";
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);

  const priorityCheckbox = document.createElement("input");
  priorityCheckbox.classList.add("col-span-2");
  priorityCheckbox.id = "priority";
  priorityCheckbox.type = "checkbox";
  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "priority";
  priorityLabel.innerHTML = "Priority";
  form.appendChild(priorityLabel);
  form.appendChild(priorityCheckbox);

  const submit = document.createElement("button");
  submit.innerHTML = "New Task";
  submit.classList.add(
    "bg-accent",
    "text-white",
    "p-2",
    "rounded",
    "mx-auto",
    "mt-4",
    "block",
    "col-start-3",
    "w-full"
  );

  submit.type = "button";

  submit.addEventListener("click", (e) => {
    e.stopPropagation();
    if (taskNameInput.value.trim() != "") {
      console.log("name");
      var newTask = new Task(
        taskNameInput.value,
        App.projectList[projectSelector.value]
      );
      const dueDateValue = dueDateInput.value;
      newTask.setDueDate(moment(dueDateValue, "YYYY-MM-DD"));
      newTask.color = taskColorInput.value;
      newTask.description = taskDescription.value;
      newTask.priority = priorityCheckbox.value;

      App.newTaskDialoge = false;
      RenderApp(App, App.getFilter());
    } else {
      taskNameInput.placeholder = "enter valid name...";
      taskNameInput.classList.add("border-solid", "border", "border-red-500");
      console.log(e);
    }
  });

  form.appendChild(submit);

  element.appendChild(form);

  return element;
}
