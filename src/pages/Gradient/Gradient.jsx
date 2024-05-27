import React, { useState, useLayoutEffect } from "react"
import { v4 as uuidv4 } from "uuid"

import GradientGenerator from "@components/GradientGenerator"
import MessageContainer from "@components/MessageContainer"
import { ThemeMode, themeModeLocalStorageKey } from "@shared/constants"

const Gradient = () => {
  const [messages, setMessages] = useState([])
 
  const addNewMessage = newMessage => {
    const newMessageArray = [
      ...messages,
      {
        id: uuidv4(),
        ...newMessage
      }
    ]

    setMessages(newMessageArray)
  }

  const handleRemoveMessage = messageId => {
    setMessages(prevState =>
      prevState.filter(message => message.id !== messageId)
    )
  }


  return (
    <>
      <GradientGenerator addNewMessage={addNewMessage} />

      <MessageContainer
        messages={messages}
        handleRemoveMessage={handleRemoveMessage}
      />
    </>
  )
}

export default Gradient