
let todos = JSON.parse(localStorage.getItem("todos")) || [];
const list = document.getElementById("todo-list");

function renderTodos() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item p-2 border mb-2 flex justify-between items-center";

        li.innerHTML = `
            <div>
                <h3 class="font-bold">${todo.title}</h3>
                <p>${todo.desc}</p>
            </div>
            <div class="flex gap-2">
                <button class="edit-btn bg-blue-500 text-white px-2 rounded">Edit</button>
                <button class="delete-btn bg-red-500 text-white px-2 rounded">Delete</button>
            </div>
        `;

        list.appendChild(li);

        li.querySelector(".edit-btn").addEventListener("click", () => {
            localStorage.setItem("editIndex", index);
            window.location.href = "index.html"; // redirect back to form page
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            renderTodos();
        });
    });
}

renderTodos();
