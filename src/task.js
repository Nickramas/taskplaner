class Task {
  constructor(description, deadline, category) {
    if (
      description === undefined ||
      description === null ||
      description === ''
    ) {
      throw new Error(1);
    }

    if (deadline === undefined || deadline === null || deadline === '') {
      throw new Error(2);
    }

    if (category === undefined || category === null || category === '') {
      throw new Error(3);
    }

    this.description = description;
    this.deadline = deadline;
    this.category = category;
  }
}
