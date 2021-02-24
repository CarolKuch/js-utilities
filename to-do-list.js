const addButton = document.querySelector('.to-do-add-button');
let toDoUl = document.querySelector('.to-do-ul');
let toDoText = document.querySelector('.to-do-text');
let checkboxes = [];
let showSelectedToggler = document.querySelector('.to-do-show-selected');
let selectedCheckboxes = [];
let showToggler = 0;

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
    
    checkboxes = document.querySelectorAll('input[type=checkbox]'); 
    console.log(checkboxes);
    if(showToggler === 0){
        if(event.target.checked){
            checkboxes.forEach(checkbox => {
                if(!checkbox.checked){   
                    checkbox.disabled = true;
                }
            });
        }
        showToggler = 1;
    }else{
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
        });
        showToggler = 0;
    }
    console.log(showToggler);
}

addButton.addEventListener('click', createElement);
toDoText.addEventListener('keyup', addButtonToggler);
showSelectedToggler.addEventListener('change', ()=>{showSelectedCheckboxes(event)});
