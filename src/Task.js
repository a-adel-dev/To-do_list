const moment = require("moment");

import { Project } from "./Project.js";

export class Task {
  constructor(name, project) {
    this.name = name;
    // this.project = project;
    this.addToProject(project);
    this._description = "";
    this._tags = [];
    this._creationDate = moment();
    this._dueDate = null;
    this._priority = false;
    this._isFinished = false;
    this._color = "#999999";
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this._description = description;
  }

  get tags() {
    return this._tags;
  }

  set tags(tags) {
    this._tags = tags;
  }

  get creationDate() {
    return this._creationDate;
  }

  set creationDate(creationDate) {
    this._creationDate = moment(creationDate);
  }

  get dueDate() {
    return this._dueDate;
  }

  setDueDate(dueDate) {
    this._dueDate = moment(dueDate);
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    this._priority = priority;
  }

  get isFinished() {
    return this._isFinished;
  }

  set isFinished(isFinished) {
    this._isFinished = isFinished;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  addToProject(project) {
    project.addTask(this);
  }

  finishTask() {
    this.isFinished = true;
  }
}
