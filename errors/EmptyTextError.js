class EmptyTextError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyTextError";
  }
}

module.exports = EmptyTextError;
