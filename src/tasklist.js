class TaskList {
  constructor() {
    this.tasklist = [];
  }

  add(task) {
    this.tasklist.push(task);
  }

  get() {
    return this.tasklist;
  }
}
