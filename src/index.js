import { Task } from "./Task.js";
import { Tag } from "./Tag.js";
import { Project } from "./Project.js";
import { App } from "./App.js";
import { viewLayer } from "./TwoColumnDiv.js";

import "./style.css";

const moment = require("moment");

function component() {
  const toDo = new App();
  const personal = new Project("Personal", toDo);

  let myTask = new Task("visit the doctor", personal);

  myTask.addTag(new Tag("downtown", "green", "orange", toDo));
  myTask.addTag(new Tag("health", "white", "red", toDo));

  // const element = document.createElement("div");
  // const twoColumns = new viewLayer();

  // twoColumns.addToParent(element);

  return element;
}

// document.body.appendChild(component());
