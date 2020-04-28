function getTaskDescriptionFromDOM() {
  return document.getElementById('text-task-description').value;
}

function getTaskCategoryFromDOM() {
  return document.getElementById('select-task-category').value;
}

function getTaskDeadlineFromDOM() {
  return document.getElementById('date-task-deadline').value;
}

function saveTasklistInLocalStorage(tasklist) {
  window.localStorage.setItem('tasklist', JSON.stringify(tasklist));
}

function getTasklistFromLocalStorage() {
  return window.localStorage.getItem('tasklist');
}
