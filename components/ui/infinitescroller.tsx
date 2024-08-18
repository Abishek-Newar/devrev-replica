import { animate, motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import useMeasure from 'react-use-measure'

const Infinitescroller = () => {
    const images = [
        "/assets/yellow.webp",
        "https://cdn.sanity.io/images/umrbtih2/production/afd36c92731a8e12db737c332e4199b925ea4640-152x40.svg",
        "https://cdn.sanity.io/images/umrbtih2/production/7045eb596c1d1374b7bba94afd59db9c2081bc25-152x40.svg",
        "https://cdn.sanity.io/images/umrbtih2/production/0c19846112c5a79661f2383d0ec7f33732fa571f-121x24.svg",
        "/assets/bigbasket.webp",
        "/assets/yellow.webp",
        "https://cdn.sanity.io/images/umrbtih2/production/afd36c92731a8e12db737c332e4199b925ea4640-152x40.svg",
        "https://cdn.sanity.io/images/umrbtih2/production/7045eb596c1d1374b7bba94afd59db9c2081bc25-152x40.svg",
        "https://cdn.sanity.io/images/umrbtih2/production/0c19846112c5a79661f2383d0ec7f33732fa571f-121x24.svg",
        "/assets/bigbasket.webp"
    ]

    let [ref, {width}] = useMeasure();
    const xTransition = useMotionValue(0);

    useEffect(()=>{
        let controls
        let finalPosition = -width / 2 - 8;
        
        controls = animate(xTransition, [0,finalPosition],{
            ease: 'linear',
            duration: 16,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        })

        return controls.stop;

    },[xTransition,width])

  return (
    <div className='w-[70%] overflow-clip mx-auto'>
        <motion.div className='flex gap-10  mx-auto' ref={ref} style={{x: xTransition}}>
        {
            [...images,...images].map((item,index)=>(
                <Image
                src={item}
                alt="brand image"
                width={130}
                height={0}
                className=' grayscale'
                 />

            ))
        }
    </motion.div>
    </div>
  )
}

export default Infinitescroller


