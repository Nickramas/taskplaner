class Task {
  constructor(description, deadline, category) {
    if (
      description === undefined ||
      description === null ||
      description === ''
    ) {
      throw new Error('Task description must be set');
    }

    if (deadline === undefined || deadline === null || deadline === '') {
      throw new Error('Deadline must be set');
    }

    if (category === undefined || category === null || category === '') {
      throw new Error('Category is must be set');
    }

    this.description = description;
    this.deadline = deadline;
    this.category = category;
  }
}
