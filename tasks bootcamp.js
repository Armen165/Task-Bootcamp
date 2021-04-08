const clear = document.querySelector('.clear');
const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.querySelector('.add');

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle';
const LINE_THROUGH = 'lineThrough';
let LIST = [];
let id = 0;

function addToDo(toDo, id, trash, done) {
    if (trash) { return };
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : '';
    const item = `
    <li class="item">

    <i class="far ${DONE} complete"  id = ${id}></i>
    <p class = 'text ${LINE} ' >${toDo}</p>
    <i class="fas fa-trash-restore delete" id = ${id}></i>
    </li>
    
    `;
    const position = 'beforeend';
    list.insertAdjacentHTML(position, item)
}

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').style.textDecoration
    LIST[element.id].done = LIST[element.id].done ? false : true
}
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener('click', function (event) {
    const element = event.target;
    const elementFirst = element.classList.contains('complete');
    if (elementFirst === true) {
        const k = LIST[element.id].done;
        element.nextSibling.nextSibling.style.textDecoration = k ? '' : 'line-through';
        completeToDo(element)
    } else if (element.classList.contains('delete')) {
        removeToDo(element);
    }
})

function plus() {
    add_1();
}

function add_1() {
    const toDo = input.value;
    if (toDo) {
        addToDo(toDo, id, false, false);
        LIST.push({
            name: toDo,
            id: id,
            done: false,
            trash: false
        });

        id++;
    }

    input.value = '';
}

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        add_1()
    }
})

clear.addEventListener('click', function () {
    location.reload()
})





















