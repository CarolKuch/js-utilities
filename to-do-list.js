const addButton = document.querySelector('.to-do-add-button');
let toDoUl = document.querySelector('.to-do-ul');
let toDoText = document.querySelector('.to-do-text');
let checkboxes = [];
const showSelectedToggler = document.querySelector('.to-do-show-selected');
let selectedCheckboxes = [];
let showToggler = 0;
let listItemDeleteButton = document.querySelector('.to-do-item-delete-button');


const addButtonToggler = () => {
    if (toDoText.value){
        addButton.disabled = false;
    }else{
        addButton.disabled = true;
    }
}

const createElement = () => {    
    if(toDoText.value){
        let li = document.createElement('li');
        let text = document.createTextNode(toDoText.value);
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        let x = document.createElement('img');
        x.setAttribute('src', 'img/x.svg');
        x.setAttribute('class', 'to-do-item-delete-button');
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(x);
        toDoUl.appendChild(li);
        x.addEventListener('click', deleteListItem, false);
    }
}

const deleteListItem = (e) => {
    e.target.parentElement.remove();
}

const showSelectedCheckboxes = (e) => {    
    checkboxes = document.querySelectorAll('input[type=checkbox]'); 
    console.log(checkboxes);
    if(showToggler === 0){
        if(e.target.checked){
            checkboxes.forEach(checkbox => {
                if(!checkbox.checked){   
                    checkbox.parentElement.style.display = "none";
                }
            });
        }
        showToggler = 1;
    }else{
        checkboxes.forEach(checkbox => {
            checkbox.parentElement.style.display = "block";
        });
        showToggler = 0;
    }
    console.log(showToggler);
}

addButton.addEventListener('click', createElement);
toDoText.addEventListener('keyup', addButtonToggler);
showSelectedToggler.addEventListener('change', showSelectedCheckboxes, false);
listItemDeleteButton.addEventListener('click', deleteListItem, false);