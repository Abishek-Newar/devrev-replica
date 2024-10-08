"use client"
import React, { useEffect, useRef, useState } from "react";
export const CarouselItem = ({ children}: {children:React.ReactNode}) => {
  return (
    <div className="inline-flex items-center justify-center h-[200px]" style={{ width: "100%" }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: {children:React.ReactNode}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef({});

  const updateIndex = (newIndex:any) => {
    if (newIndex >= React.Children.count(children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const onTouchStart = (e:any) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
    console.log("TOUCH >>>> START");
  };

  const onTouchMove = (e:any) => {
    if (e.changedTouches && e.changedTouches.length) {
      //@ts-ignore
      swipe.current.swiping = true;
    }
    console.log("TOUCH >>>> MOVE");
  };

  const onTouchEnd = (e:any) => {
    const touch = e.changedTouches[0];
    //@ts-ignore
    const swipedLeft = touch.clientX - swipe.current?.x > 0 ? true : false;
    //@ts-ignore
    const swipedRight = touch.clientX - swipe.current?.x > 0 ? false : true;
    //@ts-ignore
    const absX = Math.abs(touch.clientX - swipe.current?.x);
    //@ts-ignore
    if (swipe.current.swiping && absX > 50) {
      if (swipedLeft) {
        updateIndex(activeIndex - 1);
      } else if (swipedRight) {
        updateIndex(activeIndex + 1);
      }
    }
    swipe.current = {};
    console.log("TOUCH >>>> END");
  };

  return (
    <div
      className="overflow-hidden  "
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className=" whitespace-nowrap transition-transform 0.3s "
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          //@ts-ignore
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
