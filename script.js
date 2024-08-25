const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('tasks');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <div class="task-details">
            <span class="task-title">${title}</span>
            <span class="task-deadline">${deadline}</span>
        </div>
        <div class="task-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    taskList.appendChild(newTask);

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('priority').value = 'High'; // Reset priority
    document.getElementById('category').value = 'Personal'; // Reset category

    // Add event listeners for edit and delete buttons
    newTask.querySelector('.edit-btn').addEventListener('click', editTask);
    newTask.querySelector('.delete-btn').addEventListener('click', deleteTask);
}

function editTask() {
    // You'll need to implement the logic to edit a task
    // This could involve populating a form with the current task details
    // and allowing the user to update them.
    alert('Edit task feature is not yet implemented!');
}

function deleteTask() {
    // Get the parent list item (the task)
    const taskItem = this.parentElement.parentElement;
    // Remove the task item from the list
    taskItem.remove();
}