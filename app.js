//SELECTORS for select all your element you need
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//EVENT LISTENER
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//FUNCTIONS
function addTodo(event){
    //PREVENT FROM SUBMITTING
    event.preventDefault();
    //TO DO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //crateli
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //COMPLATE BTN
    const complatedButton = document.createElement('button');
    complatedButton.innerHTML = '<i class="fas fa-check"></i>';
    complatedButton.classList.add("complete-btn");
    todoDiv.appendChild(complatedButton);
    //tRASH BTN
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to LIST
    todoList.appendChild(todoDiv);
    //clear todo value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation fall
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    //Check Mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
            todo.style.display = "flex";
            break;
        case "completed":
            if(todo.classList.contains("completed")){
                todo.style.display = "flex";
            }
            else{
                todo.style.display = "none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains("completed")){
                todo.style.display = "flex";
            }
            else{
                todo.style.display = "none";
            }
            break;
        }
    });
}
