import React, { useState } from 'react'
import "./Message.css"
import usersJson from "../../Data/users.json"
import { motion } from "framer-motion"

function Message({ msg, i }) {

    let currentUser = {
        username: "Bubbl3Waffl3",
        email: ""
    }

    const getUserColor = (username) => {
        const user = usersJson.find((user) => user.user === username);
        return user.color;
    };

    let changeXdependingOnside = () => {
        if (msg.user == currentUser.username) {
            return { scale: 0, x: "50%" }
        }
        return { scale: 0, x: "-50%" }
    }

    return (
        <motion.div
            className="message">
            <div className={`message-username-${msg.user !== currentUser.username ? "recieve" : "send"}`}>
                <p style={{ color: getUserColor(msg.user) }}>{msg.user}</p>
            </div>
            <div className="message-outer">
                <div className="message-avatar">
                    {msg.user !== currentUser.username && <img className="avatar" src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="Photo" />}
                </div>

                <div className={`message-inner-${msg.user !== currentUser.username ? "recieve" : "send"}`}>
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