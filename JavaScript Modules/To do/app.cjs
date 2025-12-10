const { addTask, removeTask, listTasks } = require("./todo.cjs");

addTask("Learn JS modules");
addTask("Finish assignment");
addTask("Review notes");

removeTask(1);

console.log(listTasks());
