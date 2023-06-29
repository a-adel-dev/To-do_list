const moment = require("moment");

export class App {
  constructor() {
    if (App.instance) {
      return App.instance;
    }

    App.instance = this;

    this.projectList = [];
    this.tagList = [];
    this.contentFilter = "default";
    this.projectsExpanded = false;
    this.newProjectDialoge = false;

    return this;
  }

  setFilter(filter) {
    console.log("setting filter to " + filter);
    this.contentFilter = filter;
  }

  getFilter() {
    return this.contentFilter;
  }

  addProject(project) {
    this.projectList.push(project);
  }

  removeProject(project) {
    const index = this.projectList.indexOf(project);
    if (index !== -1) {
      this.projectList.splice(index, 1);
    }
  }

  getProjectList() {
    return this.projectList;
  }

  createTag(tag) {
    this.tagList.push(tag);
  }

  getTodaysTasks() {
    const today = moment().startOf("day");
    const tasks = [];
    for (const project of this.projectList) {
      tasks.push(...project.getTasksByDate(today));
    }
    return tasks;
  }

  getPriorityTasks() {
    const priorityTasks = [];

    for (const project of this.projectList) {
      for (const task of project.taskList) {
        if (task.priority) {
          priorityTasks.push(task);
        }
      }
    }

    return priorityTasks;
  }

  getUpcomingTasks() {
    const today = moment().startOf("day");
    const upcomingDate = moment().add(7, "days").startOf("day");
    const tasks = [];
    for (const project of this.projectList) {
      tasks.push(...project.getTasksByDateRange(today, upcomingDate));
    }
    return tasks;
  }
}
