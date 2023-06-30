import { Task } from "./Task.js";
import { Project } from "./Project.js";
import { App } from "./App.js";
import { RenderApp } from "./views/RenderApp.js";

import "./style.css";

const moment = require("moment");

const toDo = new App();

const serializedImportedData = JSON.parse(localStorage.getItem("appData"));
// const serializedImportedData = null;
// console.log(localStorage.getItem("appData"));

/*
{"projectList":[{"name":"Personal","taskList":[{"name":"visit the doctor",
"_description":"","_tags":[],"_creationDate":"2023-06-30T17:53:01.925Z",
"_dueDate":"2023-07-04T21:00:00.000Z","_priority":true,"_isFinished":false,
"_color":"#999999"},{"name":"get the groceries","_description":"","_tags":[],"_creationDate":"2023-06-30T17:53:01.926Z","_dueDate":"2023-06-28T21:00:00.000Z","_priority":false,"_isFinished":false,"_color":"#999999"}],"taskListExpanded":false},{"name":"Work","taskList":[],"taskListExpanded":false}],"tagList":[],"contentFilter":"defaultContent","projectsExpanded":false,"newProjectDialoge":false,"NewTaskDialoge":false,"currentProject":null,"currentTask":null,"taskView":false}
*/

function ParseJSONData(App, data) {
  //   console.log(data);
  const projects = data.projectList;
  //   console.log(projects);
  projects.forEach((project) => {
    let currentProject = new Project(project.name, App);
    // console.log(project.name);
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
  //   console.log(App);
}

// const personal = new Project("Personal", toDo);
// const work = new Project("Work", toDo);

// let myTask = new Task("visit the doctor", personal);
// myTask.setDueDate("2023-07-05");

// myTask.priority = true;

// let myotherTask = new Task("get the groceries", personal);
// myotherTask.setDueDate("2023-06-29");

// console.log(toDo);

ParseJSONData(toDo, serializedImportedData);

// if (serializedImportedData) {
//   Object.assign(toDo, JSON.parse(serializedImportedData));
//   console.log(toDo);
//   RenderApp(toDo, "defaultContent");
// } else {
//   const personal = new Project("Personal", toDo);
//   const work = new Project("Work", toDo);

//   let myTask = new Task("visit the doctor", personal);
//   myTask.setDueDate("2023-07-05");

//   myTask.priority = true;

//   let myotherTask = new Task("get the groceries", personal);
//   myotherTask.setDueDate("2023-06-29");
//   RenderApp(toDo, "defaultContent");
// }

document.body.classList.add("flex", "flex-col", "h-screen");
RenderApp(toDo, "defaultContent");
// const defaultContent = document.createElement("div");
// defaultContent.innerHTML = "default content";
// RenderApp(toDo, "defaultContent");
// console.log(toDo);

// console.log(JSON.stringify(toDo));
// console.log(JSON.stringify(toDo, getCircularReplacer()));

// localStorage.clear();
