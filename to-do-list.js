const addButton = document.querySelector('.to-do-add-button');
let toDoUl = document.querySelector('.to-do-ul');
let toDoText = document.querySelector('.to-do-text');
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let showSelectedToggler = document.querySelector('.to-do-show-selected');
let selectedCheckboxes = [];

const addButtonToggler = () => {
    if (toDoText.value){
        addButton.disabled = false;
    }else{
        addButton.disabled = true;
    }
}

const createElement = () => {
    let li = document.createElement('li');
    let text = document.createTextNode(toDoText.value);
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    
    if(toDoText.value){
        li.appendChild(checkbox);
        li.appendChild(text);
        toDoUl.appendChild(li);
    }
}

const showSelectedCheckboxes = (event) => {
    if(event.target.checked){
        checkboxes.forEach(checkbox => {
            if(checkbox.checked){   
                selectedCheckboxes.push(checkbox);
            }else{
                checkbox.disabled = true;
            }
        });  
        
    }
}

addButton.addEventListener('click', createElement);
toDoText.addEventListener('keyup', addButtonToggler);
showSelectedToggler.addEventListener('change', ()=>{showSelectedCheckboxes(event)});
