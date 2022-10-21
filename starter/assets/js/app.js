/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

function createTask() {
    // initialiser task form
    let to_do = document.getElementById('to-do-tasks');
    let in_progress = document.getElementById('in-progress-tasks');
    let well_done = document.getElementById('done-tasks');

    to_do.innerHTML='';
    in_progress.innerHTML='';
    well_done.innerHTML='';

    let to_do_count = 0;
    let in_progress_count = 0;
    let well_done_count = 0;

    // Afficher le boutton save
    for (let i = 0 ; i < tasks.length; i++) {
        let btn = `
        <div class="d-flex justify-content-end">
            <button id="${tasks[i].id}" class="d-flex w-100 bg-white border-0">
                <div class="text-green fs-5 ps-3 py-2">
                    <i class="`+((tasks[i].the_status == "To Do") ? "fa-regular fa-circle-question" : (tasks[i].the_status == "In Progress") ? "fas fa-circle-notch fa-spin" : "fa-regular fa-circle-check")+`"></i>
                </div>
                <div class="text-start ps-4 pb-3">
                    <div class="fs-5">${tasks[i].the_title}</div>
                    <div class="">
                        <div class="fw-lighter">#${tasks[i].id} created in ${tasks[i].the_date}</div>
                        <div class="fw-light" title="${tasks[i].the_description}">${tasks[i].the_description.substring(0, 70)}...</div>
                    </div>
                    <div class="mt-2">
                        <span class="bg-blue text-white rounded-3 px-2 py-1">${tasks[i].the_priority}</span>
                        <span class="bg-gray-400 rounded-3 px-2 py-1">${tasks[i].the_type}</span>
                    </div>
                </div>
            </button>
            <button class="border-0 bg-white d-flex fs-5 py-2">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`;
        
        if(tasks[i].the_status == 'To Do') {
            to_do_count++;
            to_do.innerHTML += btn;
        }
        else if(tasks[i].the_status == 'In Progress') {
            in_progress_count++;
            in_progress.innerHTML += btn;
        }
        else if (tasks[i].the_status == 'Done') {
            well_done_count++;
            well_done.innerHTML += btn;
        }
    }
    document.getElementById('to-do-tasks-count').innerText = to_do_count;
    document.getElementById('in-progress-tasks-count').innerText = in_progress_count;
    document.getElementById('done-tasks-count').innerText = well_done_count;

    // Ouvrir modal form
    
}

function saveTask() {
    // Recuperer task attributes a partir les champs input
    let new_title       = document.getElementById('Title');
    let new_type        = document.querySelectorAll('input[Type="radio"]');
    let new_priority    = document.getElementById('Priority');
    let new_status      = document.getElementById('Status');
    let new_date        = document.getElementById('Date');
    let new_description = document.getElementById('Description');

    let is_true;

    for (let i = 0; i < new_type.length; i++) {
        if (new_type[i].checked) {
            is_true = new_type[i].value;
        }
    }

    // Créez task object
    let infoTask = {
        id: tasks.length + 1,
        the_title       : new_title.value,
        the_type        : is_true,
        the_priority    : new_priority.value,
        the_status      : new_status.value,
        the_date        : new_date.value,
        the_description : new_description.value,
    }
    console.log(infoTask);

    // Ajoutez object au Array
    tasks.push(infoTask);

    // refresh tasks
    console.log(tasks);

    createTask();

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}