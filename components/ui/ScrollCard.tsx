import Image from 'next/image'
import React from 'react'

const ScrollCard = ({item}: {item:ScrollCardProps}) => {
    const logos = ["https://cdn.sanity.io/images/umrbtih2/production/b3a83485ae692677c7627d0b18261447d8aa5e5c-20x24.svg", "/assets/icon2.webp", "https://cdn.sanity.io/images/umrbtih2/production/bc22a2309b05f345dd708d293cd46235e167e278-20x24.svg"]
    return (
        <div className='grid grid-cols-2 h-[60vh] w-[100%]'>
            <div className='flex flex-col justify-center w-[100%]  gap-10'>
                <div>
                    <h1 className='text-white text-2xl'>{item.topic}</h1>
                    <h1 className='text-textclr text-xl'>{item.title}</h1>
                </div>
                <div>
                    <h1>{item.description}</h1>
                    <div>
                        {
                            item.arr.map((element, index) => (
                                <div key={index} className='flex gap-2 text-lg '>
                                    <Image
                                        src={`${logos[index]}`}
                                        alt="first point"
                                        width={20}
                                        height={20}
                                    />
                                    <p className='text-white'>{element}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-black w-[450px] h-[450px]'>
                    <Image
                    src={`${item.img}`}
                    alt="image"
                    width={100}
                    height={100} 
                    style={{width: "100%",height:"100%"}}
                    className='p-2'
                    />
                </div>
            </div>
        </div>
    )
}

export default ScrollCard