export function SideTaskComponent(task, func) {
  // <div class="task-tag flex pl-2 gap-3 items-baseline">
  //           <div
  //             class="colored-circle w-3 h-3 bg-blue-400 rounded-full"
  //           ></div>
  //           <h1>shopping</h1>
  //         </div>

  const element = document.createElement("div");
  element.classList.add("flex", "pl-2", "gap-3", "items-baseline");

  const circle = document.createElement("div");
  circle.classList.add("w-3", "h-3", "rounded-full");
  circle.style.backgroundColor = task.color;

  element.appendChild(circle);

  const text = document.createElement("button");
  text.innerHTML = task.name;
  text.addEventListener("click", func);

  element.appendChild(text);

  return element;
}
