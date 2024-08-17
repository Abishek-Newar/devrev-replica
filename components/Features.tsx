import { TitleText } from "./Hero"
import { Button } from "./ui/button"
import StickyText from "./ui/StickyText"


const Features = () => {
    const featuresDetails = [{
        title:"DEVREV SUPPORT",
        header: "Support app",
        text: "Modern customer support. Powerful, flexible, and data-driven",
        buttontext: "Discover Support",
        url: "https://devrev.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fumrbtih2%2Fproduction%2F5533b456b65e2a5c1a7fb125f452e3252925d4b4-2160x1440.webp&w=1920&q=75"
    },{
        title:"DEVREV BUILD",
        header: "Build app",
        text: "Intelligent software development. Stramline issues, sprints, and product roadmaps.",
        buttontext: "Discover Build",
        url: "https://devrev.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fumrbtih2%2Fproduction%2F893caefd643580df3c1cd3214c5c3da1525701d2-2160x1440.webp&w=1920&q=75"
    },{
        title:"DEVREV GROW",
        header: "Grow app",
        text: "AI-powered sales CRM to tranform leads into customer champions",
        buttontext: "Coming soon",
        url: "https://devrev.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fumrbtih2%2Fproduction%2F4faff058400322c5e6a77c2929b0085f4944cc6f-2160x1440.webp&w=1920&q=75"
    }]
  return (
    <div>
        <div>
        {
            featuresDetails.map((item,index)=>(
                <StickyText
                title={item.title}
                header={item.header}
                text={item.text}
                buttontext={item.buttontext}
                url={item.url}
                />
            ))
        }
    </div>
    <div className="h-[45vh] bg-black flex justify-center">
            <div className="flex flex-col items-center gap-1 pt-10">
            <h1 className="text-white">Get started for free</h1>
            <h1 className="text-textclr">No credit card required</h1>
            <Button variant="custom" size="sm"><p>Sign up</p></Button>
            </div>
    </div>
    <div className="h-[45vh] lg:px-[15%] border-t flex border-b bg-black">
        <div className="bg-black w-full h-full border lg:border-0 p-24" >
            <div>
                <div>
                    <TitleText>LIMITED OFFER</TitleText>
                    <div >
                        <h1 className="text-white">Start-ups go free</h1>
                        <h1 className="text-textclr">Powering the next generation of digital products</h1>
                    </div>
                    <Button className="text-white decoration-textclr hover:decoration-white" variant="link" size="sm">Apply now</Button>
                </div>
                <div></div>
            </div>
        </div>
        <div className="bg-black w-full h-full border lg:border-0 p-24">
        <div>
                    <TitleText>CAREERS</TitleText>
                    <div >
                        <h1 className="text-white">Join the mission</h1>
                        <h1 className="text-textclr">Create he future of software development together</h1>
                    </div>
                    <Button className="text-white decoration-textclr hover:decoration-white" variant="link" size="sm">Apply now</Button>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Features