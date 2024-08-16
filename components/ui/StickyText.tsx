import React from 'react'
import { TitleText } from '../Hero'
import { Button } from './button'

const StickyText = ({title,header,text,buttontext,url}:StickyTextProps) => {
  return (
    <div className=' h-[90vh] flex flex-col items-start p-10' style={{background: `url(${url})`,backgroundSize: "cover"}}>
        <div className='sticky top-10 '>
        <TitleText>{title}</TitleText>
        <h1>{header}</h1>
        <h1>{text}</h1>
        <Button variant="customOutline">{buttontext}</Button>
        </div>
    </div>
  )
}

export default StickyText