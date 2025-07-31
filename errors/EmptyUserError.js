class EmptyUserError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyUserError";
  }
}

module.exports = EmptyUserError;
