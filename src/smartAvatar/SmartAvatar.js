import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import SmartMessageParser from "./SmartMessageParser";
import SmartActionProvider from "./SmartActionProvider";

import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage("Hi! Ask me about my projects, skills, or learning journey!")],
  botName: "NityaBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f06292",
    },
    chatButton: {
      backgroundColor: "#f06292",
    },
  },
};

function SmartAvatar() {
  const [show, setShow] = useState(false);

  return (
    <div className="ai-avatar-container">
      <div className="ai-avatar-button" onClick={() => setShow(!show)}>
        🤖
      </div>
      {show && (
        <div className="ai-chatbot">
          <Chatbot config={config} messageParser={SmartMessageParser} actionProvider={SmartActionProvider} />
        </div>
      )}
    </div>
  );
}

export default SmartAvatar;
