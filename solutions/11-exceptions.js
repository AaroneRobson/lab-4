export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

const parseJson = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    throw new ParseError('Invalid JSON string');
  }
};

export { parseJson };