import findAnswer from "./smartResponseMap";

class SmartActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  speakText(text) {
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = "en-US";
    speechSynthesis.speak(ut);
  }

  handleAnswer = (message) => {
    const reply = findAnswer(message);
    const botMsg = this.createChatBotMessage(reply);

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMsg],
    }));

    this.speakText(reply);
  };
}

export default SmartActionProvider;

