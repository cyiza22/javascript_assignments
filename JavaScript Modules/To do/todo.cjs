const tasks = require("./storage.cjs");

function addTask(task) {
  tasks.push(task);
}

function removeTask(index) {
  tasks.splice(index, 1);
}

function listTasks() {
  return tasks;
}

module.exports = { addTask, removeTask, listTasks };
