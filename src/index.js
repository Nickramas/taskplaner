const addTaskButton = document.getElementById('add-task-button');
const deleteAllTasksButton = document.getElementById('delete-all-tasks-button');
const tasklist = new Tasklist();

addTaskButton.addEventListener('click', addTaskToList);
deleteAllTasksButton.addEventListener('click', deleteAllTasksFromList);

function init() {
  const tasklistFromLocalStorage = JSON.parse(getTasklistFromLocalStorage());

  if (
    tasklistFromLocalStorage !== undefined &&
    tasklistFromLocalStorage !== null &&
    tasklistFromLocalStorage !== 'undefined'
  ) {
    tasklist.set(tasklistFromLocalStorage);
    updateDOM();
  }
}

function addTaskToList() {
  const description = getTaskDescriptionFromDOM();
  const deadline = getTaskDeadlineFromDOM();
  const category = getTaskCategoryFromDOM();
  const task = new Task(description, deadline, category);
  tasklist.add(task);
  updateDOM();
  saveTasklistInLocalStorage(tasklist.get());
}

function deleteAllTasksFromList() {
  tasklist.clear();
  saveTasklistInLocalStorage(tasklist.get());
  updateDOM();
}

function updateDOM() {
  const table = document.getElementById('task-table');

  let taskListHTML = ``;
  for (task of tasklist.get()) {
    taskListHTML += `<tr>
    <td>${task.description}</td>
    <td>${task.deadline}</td>
    <td>${task.category}</td>
    </tr>`;
  }

  table.innerHTML = taskListHTML;
}

init();
