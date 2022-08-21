window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addNewTask();
    e.target.reset();
  });
};

function addNewTask() {
  let input = document.querySelector("#task-name");
  let title = input.value;

  let task = document.createElement("h5");
  task.innerText = title;

  let list = document.querySelector("#list");
  let index = list.children.length + 1;
  task.innerText = index + ". " + task.innerText;
  console.log(task.innerText, index);
  list.append(task);
}
