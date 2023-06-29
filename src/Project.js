const moment = require("moment");

export class Project {
  constructor(name, app) {
    this.name = name;
    this.taskList = [];
    this.addToApp(app);
    this.taskListExpanded = false;
  }

  addToApp(app) {
    app.addProject(this);
  }

  createProject(name) {
    this.name = name;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(task) {
    const index = this.taskList.indexOf(task);
    if (index !== -1) {
      this.taskList.splice(index, 1);
    }
  }

  getTaskByName(name) {
    return this.taskList.find((task) => task.name === name);
  }

  getTaskCount() {
    return this.taskList.length;
  }

  getCompletedTaskCount() {
    return this.taskList.filter((task) => task.isFinished).length;
  }

  getTasksByDate(date) {
    return this.taskList.filter((task) => {
      const taskDueDate = task.dueDate;
      return (
        date.diff(taskDueDate, "days") < 1 &&
        date.diff(taskDueDate, "days") >= 0
      );
    });
  }

  getTasksByDateRange(date, otherDate) {
    return this.taskList.filter((task) => {
      return task.dueDate.isBetween(date, otherDate, null, "[]");
    });
  }
}
