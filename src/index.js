const addTaskButton = document.getElementById('add-task-button');
const deleteAllTasksButton = document.getElementById('delete-all-tasks-button');
const errorMessage = document.getElementById('error-message');
const tasklist = new Tasklist();

// loading tasklist from local stoage
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
    updateCategoryChart(tasklist.get());
  }
}

function addTaskToList() {
  resetAllBorderColors();
  const description = getTaskDescriptionFromDOM();
  const deadline = getTaskDeadlineFromDOM();
  const category = getTaskCategoryFromDOM();

  try {
    const task = new Task(description, deadline, category);
    tasklist.add(task);
    tasklist.sort();
    updateDOM();
    saveTasklistInLocalStorage(tasklist.get());
    updateTasksPerDayChart(tasklist.get());
    updateCategoryChart(tasklist.get());
  } catch (error) {
    const errorCode = error.message;
    if (errorCode == 1) {
      document.getElementById('text-task-description').style.borderColor =
        'red';
    }
    if (errorCode == 2) {
      document.getElementById('date-task-deadline').style.borderColor = 'red';
    }
    if (errorCode == 3) {
      document.getElementById('select-task-category').style.borderColor = 'red';
    }
  }
}

function deleteAllTasksFromList() {
  tasklist.clear();
  saveTasklistInLocalStorage(tasklist.get());
  updateDOM();
  updateTasksPerDayChart(tasklist.get());
  updateCategoryChart(tasklist.get());
}

function updateDOM() {
  const table = document.getElementById('task-table');

  let taskListHTML = ``;
  for (task of tasklist.get()) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.innerText = task.description;
    td2.innerText = task.deadline;
    td3.innerText = task.category;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
  }
}

function resetAllBorderColors() {
  document.getElementById('text-task-description').style.borderColor = 'grey';
  document.getElementById('date-task-deadline').style.borderColor = 'grey';
  document.getElementById('select-task-category').style.borderColor = 'grey';
}

init();
addTaskButton.addEventListener('click', addTaskToList);
deleteAllTasksButton.addEventListener('click', deleteAllTasksFromList);
