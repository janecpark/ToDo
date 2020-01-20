const input = document.querySelector('form input');
const form = document.querySelector('form')
const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const spans = document.querySelectorAll('span')
const save = document.querySelector('#save')

load();

form.addEventListener('submit', function(e){
    e.preventDefault()
    todoValue = input.value 
    input.value ='';
    const newTodo = document.createElement('li')
    newTodo.innerHTML = `<span><i class="fa fa-trash" aria-hidden="true"></i></span>${todoValue}`;
    ul.appendChild(newTodo)
});



ul.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('done')
    }
})

function deleteTodo(){
    ul.addEventListener('click', function(e){
        if(e.target.tagName === 'I'){
            e.target.parentElement.parentElement.remove()
        }
});
}

save.addEventListener('click', function(){
    localStorage.setItem('todolist', ul.innerHTML)
})

function load(){
    if(localStorage.getItem('todolist')){
        ul.innerHTML = localStorage.getItem('todolist');
        deleteTodo();
    }
}
deleteTodo()
















