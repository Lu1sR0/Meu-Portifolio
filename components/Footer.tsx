import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { profile } from 'console'


const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contato">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw] ">
                Pronto para levar a <span className="text-cyan-500">sua</span> presença digital para um novo nível ?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a atingir seus objetivos</p>
            <a href="mailto:luisrobertodeveloper@gmail.com">
                <MagicButton
                title="Entrar em contato"
                icon= {<FaLocationArrow/>}
                position="rigth"
                />
            </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 - Luis Roberto
        </p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile)=>(
               
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrod-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300">
                    <a href={profile.caminho}>
                    <img src={profile.img} alt={profile.id} width={20} height={20}/>
                    </a>
                </div>
            ))}
        </div>
        </div>
       
    </footer>
  )
}

export default Footer