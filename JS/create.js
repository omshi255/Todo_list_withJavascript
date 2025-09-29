import { todos } from './app.js';
import { renderTodos } from './load.js';

export function addTodo(title, desc) {
  const now = new Date();
  const datetime = now.toLocaleString();

  todos.push({
    title: title,
    desc: desc,
    datetime: datetime,
    done: false
  });


  localStorage.setItem("todos", JSON.stringify(todos));
    window.location.href = "./task.html";
  renderTodos();
}
