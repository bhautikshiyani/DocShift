import React from "react"
import ReactDom from "react-dom"
import MessageBox from "@components/MessageBox"

import "./MessageContainer.scss"

const MessageContainer = ({ messages, handleRemoveMessage }) =>
  ReactDom.createPortal(
    <div className="message-container">
      {messages.map(message => (
        <MessageBox
          key={message.id}
          id={message.id}
          text={message.text}
          lifeTime={message.lifeTime}
          onClose={handleRemoveMessage}
        />
      ))}
    </div>,
    document.getElementById("portal")
  )

export default MessageContainer
