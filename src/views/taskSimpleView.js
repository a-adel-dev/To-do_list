import { RenderApp } from "./RenderApp";

export function createTaskCard(App, task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add(
    "task-card",
    "bg-slate-200",
    "rounded-lg",
    "relative",
    "px-4",
    "py-2",
    "overflow-hidden",
    "w-full",
    "m-2"
  );

  taskCard.addEventListener("click", () => {
    App.currentTask = task;
    App.taskView = true;
    RenderApp(App, App.getFilter());
  });

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "task-complete";
  checkbox.id = "task-complete";
  checkbox.checked = task.isFinished;
  checkbox.addEventListener("change", (event) => {
    event.stopPropagation();
    const checkbox = event.target;
    if (checkbox.checked) {
      task.isFinished = true;
    } else {
      task.isFinished = false;
    }
    RenderApp(App, App.getFilter());
  });
  taskCard.appendChild(checkbox);

  const label = document.createElement("label");
  label.htmlFor = "task-complete";
  label.classList.add("task-title", "font-semibold", "text-lg", "ml-4");
  if (task.isFinished) {
    label.classList.add("line-through");
  } else {
    label.classList.remove("line-through");
  }
  label.textContent = task.name;
  taskCard.appendChild(label);

  const dateDisplay = document.createElement("div");
  dateDisplay.classList.add("date-display", "text-sm", "text-gray-500");

  dateDisplay.textContent = task.dueDate.format("DD-MM-YYYY");
  taskCard.appendChild(dateDisplay);

  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
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
  deleteButton.classList.add(
    "delete-task-button",
    "absolute",
    "w-16",
    "h-full",
    "bg-orange-700",
    "right-0",
    "top-0",
    "font-extrabold",
    "text-4xl",
    "text-gray-50"
  );
  deleteButton.textContent = "X";
  taskCard.appendChild(deleteButton);

  return taskCard;
}
