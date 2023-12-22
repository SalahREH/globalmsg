import React, { useEffect, useRef } from 'react';
import "./MessageBox.css"
import Message from '../Message/Message';
// import axios from 'axios';

function MessageBox({ messages }) {
  const scrollContainerRef = useRef(null);

  const scrollToBottom = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // useEffect(() => {
  //   axios.get('URL_DE_TU_API')
  //     .then(response => {
  //       setMessages(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener mensajes:', error);
  //     });
  // }, []); 

  return (
    <div className="message-box" ref={scrollContainerRef}    >
      {messages.map((message, index) => (
        <Message msg={message} i={index} />
      ))}
    </div>
  )
}

export default MessageBox