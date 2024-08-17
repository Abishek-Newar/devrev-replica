"use client";

// import { TitleText } from "./Hero";
// import { Icons } from "./icons";
// import { Button } from "./ui/button";
// import ScrollCard from "./ui/ScrollCard";


// const content: ScrollCardProps[] = [
//   {
//     topic: "Empoer support and product teams",
//     title: "Align technical support with product and engineering",
//     description: "Prioritize smarter to solve customer problems faster",
//     arr: ["Automate tier 2 support processes","Reduce debugging and root cause analysis time","Cluster customer feedback to uncover insights"],
//     img: "https://cdn.sanity.io/images/umrbtih2/production/dd60f0a4b9ffdb0e655a4d098cff039b6bde5b9d-420x359.svg"
//   },{
//     topic: "Deliver exceptional customer experience",
//     title: "Don’t tradeoff self service and CX",
//     description: "Gen-AI powered in-app search, live chat, and nudges with just a few lines of code",
//     arr: ["Gen AI powered search and nudges (free)","AI agent live chat (answer and assist)","Fine tuning for continuous learning"],
//     img: "https://cdn.sanity.io/images/umrbtih2/production/4f0d6cc9bb427def93e554ec99f119a7e56d2832-420x266.svg"
//   },{
//     topic: "Optimize ops with advanced analytics",
//     title: "Improve decision making with fast analytics and personalized workflows",
//     description: "Build a culture of excellence in support and product management",
//     arr: ["Track team performance with robust people analytics","Standardize business process with best in class automations","Unlock comprehensive insights with 360° customer and product analytics"],
//     img: "https://cdn.sanity.io/images/umrbtih2/production/d6892d864a8712b17745e02e92a7af8d81892d04-420x349.svg"
//   }
// ];
// export function StickyScrolls() {
//   return (
//     <div className="min-h-[100vh] bg-[#191919] pl-24 py-10">
//       <div className="font-roboto flex flex-col gap-2 items-start">
//         <TitleText>BENEFITS</TitleText>
//         <h1 className="text-3xl text-white ">Focus on what's essential</h1>
//         <h1 className="text-2xl text-textclr">Less = Better</h1>
//         <Button variant="custom" size="sm"><p>Sign up</p> <Icons.arrowright /></Button>
//       </div>
//       <div className="lg:flex flex-nowrap min-w-[100vw]">
//       {
//         content.map((item,index)=>(
//             <ScrollCard item={item} />
//         ))
//       }
//       </div>
//     </div>
//   );
// }



import React from "react";
import Image from "next/image";
import { StickyScrolling } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrolls() {
  return (
    // <div className="min-h-[100vh]">
    //   <div className="bg-[#191919] h-[100vh] sticky top-0">
      <StickyScrolling content={content} />
    // </div>
    // </div>
  );
}
