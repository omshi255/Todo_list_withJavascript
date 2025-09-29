import { todos, titleInput, descInput, setEditIndex } from "./app.js";
import { deleteTodo } from "./delete.js";

const list = document.getElementById("todo-list");

export function renderTodos(todosToRender) {
  if (!list) return;

  list.innerHTML = "";


  const displayTodos = Array.isArray(todosToRender) ? todosToRender : todos;

  displayTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const titleSpan = document.createElement("strong");
    titleSpan.textContent = todo.title;
    titleSpan.className = todo.done ? "todo-title done" : "todo-title";

    const descSpan = document.createElement("span");
    descSpan.textContent = todo.desc;
    descSpan.className = "todo-desc";

    const dtSpan = document.createElement("span");
    dtSpan.textContent = todo.datetime;
    dtSpan.className = "todo-datetime";

    const dueSpan = document.createElement("span");
    dueSpan.className = "due-date";
    dueSpan.textContent = todo.dueDate ? `Due: ${todo.dueDate}` : "No due date";

    const doneBtn = document.createElement("button");
    doneBtn.textContent = todo.done ? "Undone" : "Done";
    doneBtn.className = "todo-btn done-btn";
    doneBtn.onclick = () => {
      todo.done = !todo.done;
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "todo-btn edit-btn";
    editBtn.onclick = () => {
      if (titleInput && descInput) {
        titleInput.value = todo.title;
        descInput.value = todo.desc;
      }
      setEditIndex(index);
      localStorage.setItem("editIndex", index);
      window.location.href = "./index.html";
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "todo-btn delete-btn";
    deleteBtn.onclick = () => deleteTodo(index);

    const btnWrapper = document.createElement("div");
    btnWrapper.className = "btn-wrapper";
    btnWrapper.appendChild(doneBtn);
    btnWrapper.appendChild(editBtn);
    btnWrapper.appendChild(deleteBtn);

    li.appendChild(titleSpan);
    li.appendChild(descSpan);
    li.appendChild(dtSpan);
    li.appendChild(dueSpan);
    li.appendChild(btnWrapper);

    list.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderTodos();

  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        renderTodos();
      } else {
        const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(query));
        renderTodos(filteredTodos);
      }
    });
  }
});