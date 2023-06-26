export function MainTaskTagComponent(parent, img, text, func) {
  const element = document.createElement("div");
  element.classList.add("flex", "gap-2");
  parent.appendChild(element);

  const Icon = new Image();
  Icon.src = img;
  element.appendChild(Icon);

  const title = document.createElement("h1");
  title.classList.add("font-bold");
  title.innerHTML = text;
  element.appendChild(title);

  const numTodaysTasks = document.createElement("a");
  numTodaysTasks.href = "#"; //filterbydate()
  numTodaysTasks.innerHTML = func().length.toString();
  parent.appendChild(numTodaysTasks);
}
