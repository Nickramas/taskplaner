const addTaskButton = document.getElementById('add-task-button');
const deleteAllTasksButton = document.getElementById('delete-all-tasks-button');
const tasklist = new Tasklist();

function init() {
  const tasklistFromLocalStorage = JSON.parse(getTasklistFromLocalStorage());

  if (
    tasklistFromLocalStorage !== undefined &&
    tasklistFromLocalStorage !== null &&
    tasklistFromLocalStorage !== 'undefined'
  ) {
    tasklist.set(tasklistFromLocalStorage);
    updateDOM();
    updateTasksPerDayChart(tasklist.get());
  }
}

function addTaskToList() {
  const description = getTaskDescriptionFromDOM();
  const deadline = getTaskDeadlineFromDOM();
  const category = getTaskCategoryFromDOM();
  const task = new Task(description, deadline, category);
  tasklist.add(task);
  tasklist.sort();
  updateDOM();
  saveTasklistInLocalStorage(tasklist.get());
  updateTasksPerDayChart(tasklist.get());
}

function deleteAllTasksFromList() {
  tasklist.clear();
  saveTasklistInLocalStorage(tasklist.get());
  updateDOM();
  updateTasksPerDayChart(tasklist.get());
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
addTaskButton.addEventListener('click', addTaskToList);
deleteAllTasksButton.addEventListener('click', deleteAllTasksFromList);
