export function FilteredTasksView(App) {
  const element = document.createElement("div");

  switch (App.getFilter()) {
    case "today":
      element.innerHTML = "";
      element.innerHTML = App.getFilter() + " todays tasks";
      break;
    case "priority":
      element.innerHTML = "";
      element.innerHTML = App.getFilter() + " priority tasks";
      break;
    case "calendar":
      element.innerHTML = "";
      element.innerHTML = App.getFilter() + " calendar";
      break;
    default:
      element.innerHTML = "";
      element.innerHTML = App.getFilter() + " default content";
  }

  return element;
}
