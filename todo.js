//<i class="fa fa-check-square-o" aria-hidden="true"></i>
// <i class="fa fa-trash-o" aria-hidden="true"></i>

const item_show = document.getElementById("item-show");
item_show.addEventListener("click" , deleteItem);

if(localStorage.storedList){
    loadList();
}

function addItem(){
    const data = document.getElementById("item");

    if(data.value == " "){
        alert("fill the input first");
        return false;
    }else{
        const todo_container = document.createElement("div");
        todo_container.classList.add("todo_menu");

        //creating list

        const list_item = document.createElement("li");
        list_item.innerText = data.value;
        list_item.classList.add("listing");
        todo_container.appendChild(list_item);

        // creating check button

        const check_button = document.createElement("button");
        check_button.classList.add("check");
        check_button.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
        todo_container.appendChild(check_button);

        // trash button
        const trash_button = document.createElement("button");
        trash_button.classList.add("trash");
        trash_button.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        todo_container.appendChild(trash_button);
        item_show.appendChild(todo_container);
        saveList();
        data.value=" ";

    }
}

function deleteItem(e){
    const item = e.target;

    if(item.classList[0] === 'trash'){
        const todoPar = item.parentElement;
        todoPar.remove();
        

    }
    if(item.classList[0] === 'check'){
        const todoPar = item.parentElement;
        todoPar.classList.toggle('complete');

    }
    saveList();
}

function saveList(){
    localStorage.storedList = document.getElementById("item-show").innerHTML;
}
function loadList(){
    document.getElementById("item-show").innerHTML = localStorage.storedList;
}