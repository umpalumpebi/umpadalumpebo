const addTaskBtn = document.getElementById('add-btn');
const inputName = document.querySelector("#input-name");

inputName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addTaskBtn.click();
    }
});

addTaskBtn.addEventListener('click', function() {
    const taskName = document.querySelector("#input-name").value;
    const taskDesc = document.querySelector("#input-desc").value;
    const tasksToDo = document.querySelector('body');
    if (!taskName) return;

    const taskDiv = document.createElement("div");
    taskDiv.innerHTML = `
        <div class='createdDiv'>
            <a class='createdName'><b>${taskName}</b></a>
            <a class='createdDescript'>${taskDesc}</a>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
        `;
    tasksToDo.appendChild(taskDiv);
    const completeBtn = taskDiv.querySelector('.complete-btn')
    completeBtn.addEventListener('click', function() {
        const createdName = taskDiv.querySelector('.createdName');
        const createdDescript = taskDiv.querySelector('.createdDescript');
        createdName.style.textDecoration = "line-through rgb(68,68,68)";
        createdDescript.style.textDecoration = "line-through solid rgb(68,68,68)";
        createdName.style.color = 'rgb(119,119,118)';
        createdDescript.style.color = 'rgb(119,119,118)';
    });
    const deleteBtn = taskDiv.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', function() {
        taskDiv.remove();
    });
});