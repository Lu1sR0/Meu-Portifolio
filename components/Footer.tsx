import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import { RetroGridDemo } from './RetroGrid';

const Footer = () => {
  return (
    <footer className="w-screen pb-10 relative overflow-hidden pt-10 px-5" id="contato">
        <RetroGridDemo /> {/* RetroGridDemo fica como background */}
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Pronto para levar a <span className="text-cyan-500">sua</span> presença digital para um novo nível?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
                Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a atingir seus objetivos.
            </p>
            <a href="https://wa.me/5511989918871?text=Oi%20Luis%2Ctenho%20um%20projeto%20pra%20voc%C3%AA" target='_blank'>
                <MagicButton
                  title="Entrar em contato"
                  icon={<FaLocationArrow />}
                  position="right"
                />
            </a>
        </div>
        <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center w-full px-5">
            <p className="md:text-base text-sm md:font-normal font-light mb-5">
                Copyright © 2024 - Luis Roberto
            </p>
            <div className="flex items-center md:gap-3 gap-6 mb-5 cursor-pointer">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300">
                        <a  className="cursor-pointer" href={profile.caminho} target='_blank'>
                          <img className= "cursor-pointer" src={profile.img} alt={profile.id} width={20} height={20} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
