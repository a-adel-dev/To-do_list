export class Project {
  constructor(name, app) {
    this.name = name;
    this.taskList = [];
    this.addToApp(app);
  }

  addToApp(app) {
    app.addProject(this);
  }

  createProject(name) {
    this.name = name;
    this.taskList = [];
  }

  //   deleteProject() {
  //     // Perform any necessary cleanup or deletion related to the project
  //     // and remove it from memory
  //   }

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
}
