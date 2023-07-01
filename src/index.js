import { Task } from "./Task.js";
import { Project } from "./Project.js";
import { App } from "./App.js";
import { RenderApp } from "./views/RenderApp.js";

import "./style.css";

const toDo = new App();

const serializedImportedData = JSON.parse(localStorage.getItem("appData"));

function ParseJSONData(App, data) {
  const projects = data.projectList;
  projects.forEach((project) => {
    let currentProject = new Project(project.name, App);
    const tasks = project.taskList;
    tasks.forEach((task) => {
      const newTask = new Task(task.name, currentProject);
      newTask.creationDate = task._creationDate;
      newTask.color = task._color;
      newTask.description = task._description;
      newTask.setDueDate(task._dueDate);
      newTask.priority = task._priority;
      newTask.isFinished = task._isFinished;
    });
  });
}

document.body.classList.add("flex", "flex-col", "h-screen");

if (serializedImportedData) {
  ParseJSONData(toDo, serializedImportedData);
  RenderApp(toDo, "defaultContent");
} else {
  const personal = new Project("Personal", toDo);
  const work = new Project("Work", toDo);

  let myTask = new Task("visit the doctor", personal);
  myTask.setDueDate("2023-07-05");

  myTask.priority = true;

  let myotherTask = new Task("get the groceries", personal);
  myotherTask.setDueDate("2023-06-29");
  RenderApp(toDo, "defaultContent");
}
