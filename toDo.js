function dark() { // setting up dark-mode 
var element = document.body;
element.classList.toggle("dark-mode"); //dark-mode class
}
//document.getElementById("current_date").innerHTML = Date();
const d = new Date();
let day = d.getDay();

let addToDoButton =document.getElementById('addToDo');
let toDoContainer = document.getElementById('newTask');
let inputField = document.getElementById('tasks');
let removeButton = document.getElementById('remove');

addToDoButton.addEventListener('click', function(){
    var input = document.createElement('li')
    input.classList.add('tasks')
    input.innerText = inputField.value;
    toDoContainer.appendChild(input);
    inputField.value ='\n';

   // if (inputField.value=='')
    //return null;

    input.addEventListener('click', function(){
        input.style.textDecoration = "line-through";
        inputField.value  = " ";

    })
    input.addEventListener('dblclick', function(){
        toDoContainer.removeChild(input);


    })
})

