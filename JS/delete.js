// import { todos } from './app.js';
// import { renderTodos } from './load.js';


// export function deleteTodo(index) {
//   todos.splice(index, 1);


//   localStorage.setItem("todos", JSON.stringify(todos));

//   renderTodos();
// }
import { todos } from './app.js';

export async function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
 
  if (document.getElementById("todo-list")) {
    const { renderTodos } = await import('./load.js');
    renderTodos();
  }
}
