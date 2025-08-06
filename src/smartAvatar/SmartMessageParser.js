class SmartMessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    this.actionProvider.handleAnswer(message);
  }
}

export default SmartMessageParser;
