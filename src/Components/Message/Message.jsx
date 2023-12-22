import React, { useState } from 'react'
import "./Message.css"
import { motion } from "framer-motion"

function Message({ msg, i }) {

    let currentUser = {
        username: "Bubbl3Waffl3",
        email: ""
    }

    let changeXdependingOnside = () => {
        if (msg.user == currentUser.username) {
            return {scale: 0, x: "50%"}
        }
        return {scale: 0, x: "-50%"}
    }

    return (
        <motion.div
            
            className="message">
            <div className="message-outer">
                <div className="message-avatar">
                    {msg.user !== currentUser.username && <img className="avatar" src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="Photo" />}
                </div>
                <div className={msg.user !== currentUser.username ? "message-inner-recieve" : "message-inner-send"}>
                    <motion.div initial={changeXdependingOnside()} className={msg.user !== currentUser.username ? `message-bubble-recieve bubble-${i}` : `message-bubble-send bubble-${i}`}>{msg.text}</motion.div>
                    <div className="message-actions">
                        <ul className='menu'>
                            {/* <li> icono delete</li>  */}
                        </ul>
                    </div>
                    <div className="message-spacer"></div>
                </div>
                <div className="message-status">
                    <span className="avatar"></span>
                </div>
            </div>
        </motion.div>
    )
}

export default Message