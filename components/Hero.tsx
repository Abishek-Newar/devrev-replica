"use client"
import { Typewriter } from "react-simple-typewriter"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { TypewriterEffect } from "./ui/typewriter-effect"
import Image from "next/image"

const Hero = () => {
    const words = ["Support Agents to auto respond and route","Developers to update progress and status report","Support enginners to auto triage and repo","Customer Sucess to predict customer health"]
    return (
        <>
        <div className="flex flex-col items-center justify-center bg-custom">
            <div className="font-roboto text-xs bg-[#D8D8D8] text-[#242424] rounded-sm py-1 px-2 ">AGENT OS</div>
            <div className="text-6xl font-roboto ">Apps Designed for AI, no add-ons required</div>
            <div className="text-textclr text-3xl">AI agents for 
                <Typewriter
                delaySpeed={1000}
                deleteSpeed={25}
                typeSpeed={75}
                words={[" Support Agents to auto respond and route"," Developers to update progress and status report"," Support enginners to auto triage and repo"," Customer Sucess to predict customer health"]}
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
            style={{width:"70vw",height:"auto"}}
            />
        </div>
        </>
    )
}

export default Hero