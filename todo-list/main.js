const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `<span class="text">${newTodoText}</span>
    <span class="close"> &#10006</span>`;
  newLi.innerHTML=newLiInnerHTML;
  todoList.append(newLi);  
  todoInput.value='';
})

todoList.addEventListener("click", (e) =>{
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } 

  if(e.target.classList.contains("close")){
    e.target.parentNode.remove();
  }
},false)