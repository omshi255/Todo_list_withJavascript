// import { addTodo } from './create.js';
// import { renderTodos } from './load.js';

// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// export { todos };

// const form = document.getElementById("todo-form");
// const titleInput = document.getElementById("todo-title");
// const descInput = document.getElementById("todo-desc");

// let editIndex = null;

// export function setEditIndex(index) {
//   editIndex = index;
// }
// window.addEventListener("DOMContentLoaded", () => {
//   const storedIndex = localStorage.getItem("editIndex");
//   if (storedIndex !== null) {
//     const idx = Number(storedIndex);
//     const todo = todos[idx];
//     if (todo) {
//       titleInput.value = todo.title;
//       descInput.value = todo.desc;
//       editIndex = idx;
//     }
//   }
// });
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const title = titleInput.value.trim();
//   const desc = descInput.value.trim();
//   if (!title || !desc) return;

//   if (editIndex !== null) {
//     todos[editIndex].title = title;
//     todos[editIndex].desc = desc;
//     localStorage.setItem("todos", JSON.stringify(todos));
//     editIndex = null;
//   } else {
//     addTodo(title, desc);
//   }

//   titleInput.value = "";
//   descInput.value = "";

//   renderTodos();
// });

// renderTodos();

// export { titleInput, descInput };
import { addTodo } from './create.js';
import { renderTodos } from './load.js';

let todos = JSON.parse(localStorage.getItem("todos")) || [];
export { todos };

const form = document.getElementById("todo-form");
const titleInput = document.getElementById("todo-title");
const descInput = document.getElementById("todo-desc");

let editIndex = null;
export function setEditIndex(index) {
  editIndex = index;
}

// Only run form code if elements exist (index.html)
if (form && titleInput && descInput) {
  window.addEventListener("DOMContentLoaded", () => {
    const storedIndex = localStorage.getItem("editIndex");
    if (storedIndex !== null) {
      const idx = Number(storedIndex);
      const todo = todos[idx];
      if (todo) {
        titleInput.value = todo.title;
        descInput.value = todo.desc;
        editIndex = idx;
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    if (!title || !desc) return;

    if (editIndex !== null) {
      todos[editIndex].title = title;
      todos[editIndex].desc = desc;
      localStorage.setItem("todos", JSON.stringify(todos));
      editIndex = null;
      localStorage.removeItem("editIndex");
    } else {
      addTodo(title, desc);
    }

    titleInput.value = "";
    descInput.value = "";
  });
}

export { titleInput, descInput };
