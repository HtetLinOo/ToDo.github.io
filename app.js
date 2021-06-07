let minTextLength = 3;
let input = document.getElementById("input");
let list = document.getElementById("list");
let i = 1;
// let date = new Date();
// let currentTime = date.getHours() + ":" + date.getMinutes();

document.getElementById("input").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        addList();
    }
})

function showList(text) {
    list.innerHTML += `
  <li class="list-item" id="list${i}"> 
    <span id="listText${i}">
        ${text}
        <br>
        ${showDate()}
    </span>
    <div class="list-btn-group">
        <button class="btn-del" onclick="deleteList(${i})"><i class="far fa-trash-alt fa-1x"></i></button>
        <button class="btn-edit" onclick="editList(${i})"><i class="fas fa-edit fa-1x"></i></button>
    </div>
         
  </li>
  `;
    i++;
}

function showDate() {
    let date = new Date();
    let currentTime = date.toLocaleTimeString() + " " + date.toLocaleString('default', {
        month: 'long'
    }) + " " + date.getDate();
    return currentTime;
}

function deleteList(listId) {
    let current = document.getElementById(`list${listId}`);
    let currentText = document.getElementById(`listText${listId}`).innerHTML;

    let deleteConfirm = confirm(`Are you sure want to delete? List '${currentText}'`);

    if (deleteConfirm) {
        list.removeChild(current);
    } else {
        console.log("Delete cancel");
    }
}

function editList(listId) {
    let current = document.getElementById(`listText${listId}`);
    let newText = prompt("says something", current.innerHTML);
    if (textFilter(newText)) {
        current.innerHTML = newText;
    }

}

function textFilter(x) {
    if (x) {
        if (x.length >= minTextLength) {
            return x;
        } else {
            alert("minimun length is 3");
            return false;
        }
    } else {
        alert("input text is empty");
        return false;
    }
}


function addList() {

    let inputText = textFilter(input.value);

    if (inputText) {
        showList(inputText);

        input.value = "";
    }

}