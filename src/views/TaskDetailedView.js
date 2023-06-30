import { RenderApp } from "./RenderApp";
const moment = require("moment");

export function TaskDetailedView(App) {
  App.taskView = false;
  const element = document.createElement("div");

  //   element.classList.add("flex", "justify-center", "items-center");
  element.classList.add(
    "w-full",
    "p-12",
    "bg-slate-200",
    "rounded",
    "font-bold",
    "text-center",
    "content-view"
  );

  const content = document.createElement("div");

  content.classList.add(
    "w-full",
    "p-12",
    "bg-slate-200",
    "rounded",
    "font-bold",
    "text-center"
  );

  const task = App.currentTask;

  const form = document.createElement("form");

  form.classList.add("grid", "grid-cols-3", "gap-4");

  const taskNameInput = document.createElement("input");
  taskNameInput.classList.add("w-full", "col-span-2");
  taskNameInput.id = "task-name";
  taskNameInput.value = task.name;
  const taskLabel = document.createElement("label");
  taskLabel.htmlFor = "task-name";
  taskLabel.innerHTML = "Task name";
  form.appendChild(taskLabel);
  form.appendChild(taskNameInput);

  const taskColorInput = document.createElement("input");
  taskColorInput.classList.add("w-full", "col-span-2");
  taskColorInput.id = "task-color";
  taskColorInput.type = "color";
  taskColorInput.value = task.color;
  console.log(task.color);
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
  taskDescription.value = task.description;
  const taskareaLabel = document.createElement("label");
  taskareaLabel.htmlFor = "task-area";
  taskareaLabel.innerHTML = "Description";
  form.appendChild(taskareaLabel);
  form.appendChild(taskDescription);

  const dueDateInput = document.createElement("input");
  dueDateInput.classList.add("w-full", "col-span-2");
  dueDateInput.id = "due-date";
  dueDateInput.type = "date";
  dueDateInput.value = task.dueDate.format("YYYY-MM-DD");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "due-date";
  dueDateLabel.innerHTML = "Due date";
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);

  const priorityCheckbox = document.createElement("input");
  priorityCheckbox.classList.add("col-span-2");
  priorityCheckbox.id = "priority";
  priorityCheckbox.type = "checkbox";
  priorityCheckbox.checked = task.priority;
  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "priority";
  priorityLabel.innerHTML = "Priority";
  form.appendChild(priorityLabel);
  form.appendChild(priorityCheckbox);

  const FinishTask = document.createElement("button");
  FinishTask.innerHTML = "Finsh Task";
  FinishTask.classList.add(
    "bg-accent",
    "text-white",
    "p-2",
    "rounded",
    "mx-auto",
    "mt-4",
    "block",
    "w-full"
  );

  FinishTask.addEventListener("click", (e) => {
    e.stopPropagation();
    task.isFinsihed = true;

    App.taskView = true;
    RenderApp(App, App.getFilter());
  });

  form.appendChild(FinishTask);

  const updateTask = document.createElement("button");
  updateTask.innerHTML = "Update Task";
  updateTask.classList.add(
    "bg-accent",
    "text-white",
    "p-2",
    "rounded",
    "mx-auto",
    "mt-4",
    "block",
    "w-full"
  );

  updateTask.type = "button";

  updateTask.addEventListener("click", (e) => {
    e.stopPropagation();
    if (taskNameInput.value.trim() != "") {
      task.name = taskNameInput.value;

      App.projectList.forEach((project) => {
        const tasks = project.taskList;
        tasks.forEach((porjectTask) => {
          if (task === porjectTask) {
            project.removeTask(task);
          }
        });
      });

      task.addToProject(App.projectList[projectSelector.value]);
      const dueDateValue = dueDateInput.value;
      task.setDueDate(moment(dueDateValue, "YYYY-MM-DD"));
      task.color = taskColorInput.value;
      task.description = taskDescription.value;
      task.priority = priorityCheckbox.value;

      RenderApp(App, App.getFilter());
    } else {
      taskNameInput.placeholder = "enter valid name...";
      taskNameInput.classList.add("border-solid", "border", "border-red-500");
    }
  });

  form.appendChild(updateTask);

  const deleteTask = document.createElement("button");
  deleteTask.innerHTML = "Delete Task";
  deleteTask.classList.add(
    "bg-red-600",
    "text-white",
    "p-2",
    "rounded",
    "mx-auto",
    "mt-4",
    "block",
    "w-full"
  );

  deleteTask.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log(App.projectList[projectSelector.value].name);
    // App.projectList[projectSelector.value].removeTask(task);

    App.projectList.forEach((project) => {
      const tasks = project.taskList;
      tasks.forEach((porjectTask) => {
        if (task === porjectTask) {
          project.removeTask(task);
        }
      });
    });
    RenderApp(App, App.getFilter());
  });

  form.appendChild(deleteTask);

  content.appendChild(form);

  element.appendChild(content);

  return element;
}
