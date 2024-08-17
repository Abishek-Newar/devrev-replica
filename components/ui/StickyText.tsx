import React from 'react'
import { TitleText } from '../Hero'
import { Button } from './button'

const StickyText = ({title,header,text,buttontext,url}:StickyTextProps) => {
  return (
    <div className=' font-roboto h-[100vh] flex flex-col items-start py-14 px-32 aspect-auto bg-center' style={{backgroundImage: `url(${url})`,backgroundSize:"cover"}}>
        <div className='sticky flex flex-col gap-2 items-start top-10 '>
        <TitleText>{title}</TitleText>
        <h1 className='text-3xl text-white'>{header}</h1>
        <h1 className='text-xl text-[#CECDC9]'>{text}</h1>
        <Button className='text-white' variant="customOutline">{buttontext}</Button>
        </div>
    </div>
  )
}

export default StickyText