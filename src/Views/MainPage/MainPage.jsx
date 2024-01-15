import React from 'react'
import "./MainPage.css"
import msgDemo from "./../../Img/messages.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function MainPage() {
    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%"}}
            transition={{ duration: 0.1 }} 
            className='MainPage'>
            <div className='MainPage-left'>
                <div className='MainPage-title'>
                    <p>Conoce gente de todo</p>
                    <p>el <span className='green'>mundo</span> con</p>
                    <p className='globalMsg'>GlobalMSG</p>
                </div>
                <p className='MainPage-description'>¡Conéctate con el mundo! Nuestra aplicación de mensajería instantánea te permite chatear con personas de todo el planeta. Disfruta de stickers, emotes y reacciones animadas en tiempo real mientras conoces gente increíble de lugares asombrosos. ¡La diversión está a solo un clic de distancia! Únete ahora y vive una experiencia única de socialización global.</p>
                <div className='MainPage-join-section'>
                    <button className='join-button'>Join now</button>
                    <div className='open-div'>
                        <p className='existing-account'>You already have an account?</p>
                        <Link to={"/Global"}><button className='open-button'>Open GlobalMsg</button></Link>
                    </div>
                </div>
            </div>
            <div className='MainPage-right'>
                <img src={msgDemo} alt="Messages image demo" />
            </div>
        </motion.div>
    )
}

export default MainPage