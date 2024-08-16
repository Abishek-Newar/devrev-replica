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
    <div>
        <video src=""></video>
    </div>
    </div>
  )
}

export default Features