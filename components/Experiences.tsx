import React from 'react'
import { Button } from './ui/button'
import { Icons } from './icons'
import { TitleText } from './Hero'

const Experiences = () => {

    const experienceBox = [{
        topic: "Global customers" ,
        percentage: ""
    },{
        topic: "Reduced cost to serve" ,
        percentage: "40%"
    },{
        topic: "Improved net retention" ,
        percentage: "130%"
    },{
        topic: "Faster troubleshooting" ,
        percentage: "4x"
    }]

    const experiencetext1 = {
        text1: "Exceptional customer experiences",
        text2: "Elevate engagement with seamless in-app and portal interactions"
    }
    const experiencetext2 = [{
        text1: "Beautifully designed apps",
        text2: "Collaborative, user-friendly apps for teams and AI agents",
        image: "https://devrev.ai/_next/image?url=%2Fimages%2Fv3%2Fhome%2Fbg-2.webp&w=750&q=75"
    },{
        text1: "Lightweight mobile workflows",
        text2: "Efforless and efficient mobile solutions for your team",
        image: "https://devrev.ai/_next/image?url=%2Fimages%2Fv3%2Fhome%2Fgrid-consumer.webp&w=750&q=75"
    }]
  return (
    <div className='flex justify-center items-center flex-col bg-custom gap-10 text-white '>
        <TitleText>Experiences</TitleText>
        <div className='text-3xl font-roboto font-medium'>
        <h1 className='font-roboto'>Love the tool you use</h1>
        <h1 className='text-textclr font-roboto'>Fast, intuitive, social</h1>
        </div>
        <Button variant="custom">Sign up <Icons.arrowright></Icons.arrowright></Button>
        <div className='flex flex-col gap-1 w-[76%]'>
        <div className=' h-[80vh] p-10' style={{background: "url(https://devrev.ai/_next/image?url=%2Fimages%2Fv3%2Fhome%2Fbg-1.webp&w=750&q=75)",backgroundSize:"cover"}}>
        <ExperienceContainer text1={experiencetext1.text1} text2={experiencetext1.text2}  />
        </div >
        <div className='flex gap-1  h-[80vh] '>
            {
                experiencetext2.map((item,index)=>(
                    <div key={index} className='w-[50%] h-[80%] p-10' style={{background: `url(${item.image})`,backgroundSize:"cover"}}>
                        <ExperienceContainer text1={item.text1} text2={item.text2} />
                    </div>
                ))
            }
        </div>
        <div className='flex flex-wrap'>
            {
                experienceBox.map((item,index) =>(
                    <div className={`w-[300px] gap-4 mt-3  h-[22vh] ${index !== 0 ? " border-l-2": null}`}>
                        <ExperienceBox topic={item.topic} percentage={item.percentage} />
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}


const ExperienceContainer = ({text1,text2}:{text1: string, text2: string}) =>{
    return <div className='flex flex-col items-center'>
        <h1>{text1}</h1>
        <h1>{text2}</h1>
        <Button variant="customOutline">Book a demo</Button>
    </div>
}

const ExperienceBox = ({topic,percentage} :{topic: string,percentage: string}) =>{
    return <div className='text-black font-roboto flex flex-col  justify-between h-full' >
        <h1 className='text-2xl'>{topic}</h1>
        <h1 className='text-6xl font-medium'>{percentage}</h1>
    </div>
}
export default Experiences