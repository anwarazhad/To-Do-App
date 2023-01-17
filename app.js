const todoInput = document.getElementById("todo-input");
const addTodo = document.getElementById("add-todo");
const todoItems = document.getElementById("todo-items");

addTodo.addEventListener("click", function(event) {
  event.preventDefault();
  if (todoInput.value === "") return;
  
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = todoInput.value;
  
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", function() {
    todoItems.removeChild(todoItem);
  });
  todoItem.appendChild(deleteBtn);
  
  todoItems.appendChild(todoItem);
  todoInput.value = "";
});
