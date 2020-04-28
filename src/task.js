class Task {
  constructor(description, deadline, category) {
    if (description === undefined || description === null) {
      throw new Error('Task is', description);
    }

    if (deadline === undefined || deadline === null || deadline === '') {
      throw new Error('deadline is', deadline);
    }

    if (category === undefined || category === null) {
      throw new Error('category is', category);
    }

    this.description = description;
    this.deadline = deadline;
    this.category = category;
  }

  getDescription() {
    return this.description;
  }

  getDeadline() {
    return this.deadline;
  }

  getCategory() {
    return this.category;
  }
}
