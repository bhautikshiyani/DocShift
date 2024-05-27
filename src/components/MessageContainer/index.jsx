import React from "react";
import ReactDOM from "react-dom";
import MessageBox from "@components/MessageBox";

import "./MessageContainer.scss";

const MessageContainer = ({ messages, handleRemoveMessage }) => {
  const portalContainer = document.getElementById("portal");

  if (!portalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="message-container">
      {messages.map((message) => (
        <MessageBox
          key={message.id}
          id={message.id}
          text={message.text}
          lifeTime={message.lifeTime}
          onClose={handleRemoveMessage}
        />
      ))}
    </div>,
    portalContainer
  );
};

export default MessageContainer;
