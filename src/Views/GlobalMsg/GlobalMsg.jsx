import React, { useEffect, useState } from 'react'
import "./GlobalMsg.css"
import { useLocation } from 'react-router-dom'
import MessageBox from '../../Components/MessageBox/MessageBox'
import { motion, useAnimate } from "framer-motion"
import messagesFromJson from "../../Data/messages.json"

function GlobalMsg() {

  const [messages, setMessages] = useState(messagesFromJson);

  const [scope, animate] = useAnimate()

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    let newMsgs = messages.concat({ user: "Bubbl3Waffl3", date: "Yesterday at 9:35 PM", text: inputValue })
    setMessages(newMsgs)
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    const animateBubble = async (selector, options, duration) => {
      if (!scope?.current) return
      await animate(selector, options, { duration })
    }
    
    const animateMessages = async () => {
      await animate(scope.current, { x: "0%" }, { duration: 0.125 })
    
      for (let i = 0; i < Math.min(15, messages.length); i++) {
        let index = messages.length - i - 1
        await animateBubble(`.bubble-${index}`, { scale: 1, x: "0%" }, 0.1)
      }
    
      animateBubble(".message-bubble-send", { scale: 1, x: "0%" }, 0.15)
      animateBubble(".message-bubble-recieve", { scale: 1, x: "0%" }, 0.15)
    }

    animateMessages()

    return () => {

    }
  }, [messages])


  return (
    <motion.div ref={scope}
      initial={{ x: "100%" }}
      className='GlobalMsg'>
      <MessageBox messages={messages} />
      <input type="text" name="Message"
        className='global-message-input'
        placeholder='Type your message...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} />
    </motion.div>
  )
}

export default GlobalMsg