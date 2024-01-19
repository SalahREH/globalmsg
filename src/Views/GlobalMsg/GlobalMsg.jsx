import React, { useEffect, useState } from 'react'
import "./GlobalMsg.css"
import MessageBox from '../../Components/MessageBox/MessageBox'
import { motion, useAnimate } from "framer-motion"
import api from "../../Services/api";
import UserDropdown from '../../Components/UserDropdown/UserDropdown';

function GlobalMsg() {

  const [messages, setMessages] = useState([]);

  const [scope, animate] = useAnimate()

  const [inputValue, setInputValue] = useState('');

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser') || '');

  const handleSubmit = async () => {
    try {
      const response = await api.post({ user: "Bubbl3Waffl3", content: inputValue })

    } catch (error) {
      console.error('Error in POST request:', error);
    }
    // let newMsgs = messages.concat({ user: "Bubbl3Waffl3", date: "Yesterday at 9:35 PM", content: inputValue })
    // setMessages(newMsgs)
    setInputValue('');
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await handleSubmit();
      await fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const response = await api.get();
      console.log(messages);
      setMessages(response);
    } catch (error) {
      console.error('Error obtaining data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {


    const animateBubble = async (selector, options, duration) => {
      if (!scope?.current) return
      await animate(selector, options, { duration })
    }

    const animateMessages = async () => {
      await animate(scope.current, { x: "0%" }, { duration: 0.125 })

      // for (let i = 0; i < Math.min(15, messages.length); i++) {
      //   let index = messages.length - i - 1
      //   console.log(index);
      //   await animateBubble(`.bubble-${index}`, { scale: 1, x: "0%" }, 0.1)
      // }

      if (scope.current.querySelector(".message-bubble-send")) {
        animateBubble(".message-bubble-send", { scale: 1, x: "0%" }, 0.15)
      }
      if (scope.current.querySelector(".message-bubble-recieve")) {
        animateBubble(".message-bubble-recieve", { scale: 1, x: "0%" }, 0.15)
      }
    }

    animateMessages()

    return () => {

    }
  }, [messages])


  return (
    <motion.div ref={scope}
      initial={{ x: "100%" }}
      className='GlobalMsg'>
      <UserDropdown currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <MessageBox messages={messages} currentUser={currentUser}/>
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