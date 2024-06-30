import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick , otherClasses
} : {title: string ; icon: React.ReactNode , position:string , handleClick?: () => void; otherClasses?: string}) => {
  return (
        <button className=" md:w-60 md:mt-10 gap-2 inline-flex w-full h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-white transition-colors focus:outline-none">
          {position === 'left' && icon}
          {title}
          {position === 'rigth' && icon}
        </button>
  )
}

export default MagicButton