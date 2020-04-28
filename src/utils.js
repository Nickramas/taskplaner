function getTaskDescriptionFromDOM() {
  return document.getElementById('text-task-description').value;
}

function getTaskCategoryFromDOM() {
  return document.getElementById('select-task-category').value;
}

function getTaskDeadlineFromDOM() {
  return document.getElementById('date-task-deadline').value;
}

function saveTasklistToCookies(tasklist) {
  document.cookie = 'tasklist=' + JSON.stringify(tasklist);
}

function getTasklistFromCookies() {
  const cookies = document.cookie.split(';');
  let tasklist = cookies.findIndex((cookie) => {
    return cookie.includes('tasklist=');
  });
  if (tasklist < 0) {
    // if "tasklist=" is not included, findIndex() returns -1
    return;
  }
  tasklist = cookies[tasklist].slice(9); // delete "tasklist=" at the beginning
  return JSON.parse(tasklist);
}
