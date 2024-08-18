import React from 'react'
import Carousel, { CarouselItem } from './ui/Carousel'
import { Button } from './ui/button'

const slides = [{
  quote: "“With DevRev, we are able to continue to make support as our differentiator even as we scale.”",
  author: "Kshitij Gupta",
  position:  "Co-founder & CEO, 100ms",

},{
  quote: "“DevRev allows our team to know that they’re solving what’s most important to our customers.”",
  author: "Surag Patel",
  position: "Co-founder & CEO,Pixee"
},{
  quote: "“DevRev makes the whole organization feel much more in sync because the digital divide has disappeared.”",
  author: "Alok Mishra",
  position: "Co-founder & CTO,Goodmeeting"
}]

const Carousels = () => {
  return (
    <Carousel >
          
          {slides.map((item,index)=>(
            <CarouselItem >
            <div className='w-[600px] border flex flex-col justify-between items-center p-2'>
              <h1 className='w-[600px]'>{item.quote}</h1>
              <div>
                <p>{item.author}</p>
                <p>{item.position}</p>
              </div>
              <div className='flex'>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Button variant="outline">REad customer stories</Button>
            </div>
            </CarouselItem>
          ))
        }   
    </Carousel>
  )
}

export default Carousels