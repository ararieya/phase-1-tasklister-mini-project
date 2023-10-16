document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const taskDescription = document.getElementById(
      "new-task-description"
    ).value;

    if (taskDescription.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);
      document.getElementById("new-task-description").value = "";
    }
  });
});
