// Get necessary elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Add event listener for the add button
addButton.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("task-text");
    taskTextElement.innerText = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteTask);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
}

// Function to delete a task
function deleteTask() {
  const taskItem = this.parentNode;
  taskList.removeChild(taskItem);
}
