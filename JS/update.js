import { todos } from './app.js';
import { renderTodos } from './load.js';


export function updateTodo(index, newTitle, newDesc) {
  todos[index].title = newTitle;
  todos[index].desc = newDesc;


  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos();
}




