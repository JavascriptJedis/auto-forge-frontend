import React, { useState } from "react";
import "./Carouselstyles.css";
import { Carousel, CarouselItem, CarouselCaption } from "reactstrap";

const items = [
  {
    src: "https://i.postimg.cc/MH11Bn5p/homepageimageupdated.png",
    altText: "Slide 1",
    key: 1,
  },
  {
    src: "https://r4.wallpaperflare.com/wallpaper/233/811/707/mazda-mx-5-miata-stance-wallpaper-89d0b89d210a4d6bb667b8df300196cd.jpg",
    altText: "Slide 2",
    key: 2,
  },
  {
    src: "https://i.redd.it/j95yhp56byyb1.jpg",
    altText: "Slide 3",
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <div className="slide-img-cont">
            <img
              style={{ width: "100%", height: "auto" }}
              src={item.src}
              alt={item.altText}
            />
          </div>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
    );
  });

  return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        {slides}
      </Carousel>
  );
}

export default Example;
