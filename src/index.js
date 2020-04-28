const addTaskButton = document.getElementById('add-task-button');
const taskList = new TaskList();

addTaskButton.addEventListener('click', addTaskToList);

function addTaskToList() {
  const description = getTaskDescriptionFromDOM();
  const deadline = getTaskDeadlineFromDOM();
  const category = getTaskCategoryFromDOM();
  const task = new Task(description, deadline, category);
  taskList.add(task);
  updateDOM();
}

function updateDOM() {
  const table = document.getElementById('task-table');

  let taskListHTML = ``;
  for (task of taskList.get()) {
    taskListHTML += `<tr>
    <td>${task.getDescription()}</td>
    <td>${task.getDeadline()}</td>
    <td>${task.getCategory()}</td>
    </tr>`;
  }

  table.innerHTML = taskListHTML;
}
