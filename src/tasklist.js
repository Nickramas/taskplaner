class Tasklist {
  constructor() {
    this.tasklist = [];
  }

  add(task) {
    this.tasklist.push(task);
  }

  get() {
    return this.tasklist;
  }

  set(tasklist) {
    this.tasklist = tasklist;
  }

  clear() {
    this.tasklist = [];
  }
}
