const input = document.querySelector('form input');
const form = document.querySelector('form')
const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const spans = document.querySelectorAll('span')
const storedList = JSON.parse(localStorage.getItem('todolist')) || [];


    for (let i = 0; i < storedList.length; i++) {
      let newTodo = document.createElement("li");
      newTodo.innerText = storedList[i].task;
      newTodo.done = storedList[i].done ? true : false;
      if (newTodo.done) {
        newTodo.classList.add('done')
      }
      ul.appendChild(newTodo);
    }
   

form.addEventListener('submit', function(e){
    e.preventDefault()
    todoValue = input.value 
    input.value ='';
    let newTodo = document.createElement('li')
    newTodo.innerText = todoValue;
    newTodo.done = false;
    ul.appendChild(newTodo)
    storedList.push({task: todoValue, done: false})
    localStorage.setItem('todolist', JSON.stringify(storedList))   

});


ul.addEventListener('click', function(e){
    const clicked = e.target
    if(!clicked.done){
        clicked.classList.add('done')
        clicked.done = true;
    }else{
        clicked.style.textDecoration = "none";
        clicked.done = false;
    }

    for(var i =0; i< storedList.length; i++){
        if(storedList[i].task === clicked.innerText){
            storedList[i].done = clicked.done;
            console.log(storedList)
            localStorage.setItem('todolist', JSON.stringify(storedList))
        }
    }

})
















