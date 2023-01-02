document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.getElementById("new-task-description").value;
    const newTaskLi = document.createElement("li");
    newTaskLi.innerText = newTask;
    document.getElementById("tasks").appendChild(newTaskLi);
    document.getElementById("new-task-description").value = "";
  });
});
