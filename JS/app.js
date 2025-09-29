
import { addTodo } from './create.js';
import { renderTodos } from './load.js';

let todos = JSON.parse(localStorage.getItem("todos")) || [];
export { todos };

const form = document.getElementById("todo-form");
const titleInput = document.getElementById("todo-title");
const descInput = document.getElementById("todo-desc");
const dateInput = document.getElementById("todo-date"); 

let editIndex = null;
export function setEditIndex(index) {
  editIndex = index;
}


if (form && titleInput && descInput && dateInput) {
  window.addEventListener("DOMContentLoaded", () => {
    const storedIndex = localStorage.getItem("editIndex");
    if (storedIndex !== null) {
      const idx = Number(storedIndex);
      const todo = todos[idx];
      if (todo) {
        titleInput.value = todo.title;
        descInput.value = todo.desc;
        dateInput.value = todo.dueDate || "";
        editIndex = idx;
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    const dueDate = dateInput.value;

    if (!title || !desc) return;

    if (editIndex !== null) {
      todos[editIndex].title = title;
      todos[editIndex].desc = desc;
      todos[editIndex].dueDate = dueDate;
      localStorage.setItem("todos", JSON.stringify(todos));
      editIndex = null;
      localStorage.removeItem("editIndex");
    } else {
      addTodo(title, desc, dueDate);
    }

    titleInput.value = "";
    descInput.value = "";
    dateInput.value = "";
  });
}

export { titleInput, descInput, dateInput };
