 import { todos } from './app.js';

export function addTodo(title, desc, dueDate) {
  const now = new Date();
  const datetime = now.toLocaleString();

  todos.push({
    title,
    desc,
    datetime,
    dueDate,  
    done: false
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  window.location.href = "./task.html";
}
