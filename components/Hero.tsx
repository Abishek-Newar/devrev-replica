"use client"
import { Typewriter } from "react-simple-typewriter"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { TypewriterEffect } from "./ui/typewriter-effect"
import Image from "next/image"
import Infinitescroller from "./ui/infinitescroller"

const Hero = () => {
    const words = ["Support Agents to auto respond and route","Developers to update progress and status report","Support enginners to auto triage and repo","Customer Sucess to predict customer health"]
    return (
        <div className="bg-custom py-16">
        <div className="flex h-[55vh] flex-col items-center justify-center gap-10">
            <TitleText >AGENT OS</TitleText>
            <div className="text-7xl font-roboto w-[45%] text-center ">Apps Designed for AI, no add-ons required</div>
            <div className="text-textclr text-xl text-center h-[40px] w-[20%]">AI agents for 
                <Typewriter
                delaySpeed={1000}
                deleteSpeed={25}
                typeSpeed={75}
                loop={true}
                words={[
                    " Support Agents to auto respond and route",
                    " Developers to update progress and status report",
                    " Support enginners to auto triage and repo",
                    " Customer Sucess to predict customer health"
                ]}
                 />
            </div>
            <Button variant="custom">
                <p>Start free trial</p>
                <Icons.arrowright />
            </Button>
        </div>
        <div className="flex justify-center bg-custom">
            <Image
            src="/hero.webp"
            alt="hero image"
            width={0}
            height={0}
            sizes="100vw"
            style={{width:"75vw",height:"auto"}}
            />
        </div>
        <h1 className="text-center py-10  text-[21px] font-roboto font-medium">
            Join the 1000+ companies benefiting from an AI-first experience
        </h1>
        <Infinitescroller />
        </div>
    )
}

export const TitleText = ({children}: {children: string}) =>{
    return <div className="font-roboto inline text-[9px] bg-[#D8D8D8] text-[#242424] rounded-sm py-1 px-2 ">{children}</div>
}

export default Hero