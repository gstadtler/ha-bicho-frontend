import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './styles.css';
import pets02 from '../../imagens/pets02.jpg';
import pets01 from '../../imagens/pets01.jpg';
import pets0 from '../../imagens/pets0.jpg';

const SlideShow = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  //console.log('no slide', props.pictures);

  const items = [
    {
      src: pets0,
      altText: 'Ha-bichinhos',
      caption: ''
    },
    {
      src: pets01,
      altText: 'Ha-bichinhos',
      caption: ''
    },
    {
      src: pets02,
      altText: 'Ha-bichinhos',
      caption: ''
    }
  ];


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const setItems = () => {
    const items =
      props.pictures.map(picture => [
        {
          key: picture.id,
          src: picture.url,
          altText: picture.path,
          caption: ''
        }
      ])
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SlideShow;
