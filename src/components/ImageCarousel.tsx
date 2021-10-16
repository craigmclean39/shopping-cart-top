import { useState } from 'react';
import { ImageCarouselProps } from '../types';

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  directory,
  displayDetails,
}) => {
  const [index, setIndex] = useState(0);

  const carouselImages = images.map((imageString, mapIndex) => {
    const reqImg =
      require(`../images/${directory}/details/${imageString}`).default;

    return (
      <img
        key={imageString}
        className={
          mapIndex === index
            ? 'image-carousel--selected-image'
            : 'image-carousel--image'
        }
        src={reqImg}
        alt=''
        onClick={() => {
          setIndex(mapIndex);
          displayDetails(mapIndex, false);
        }}></img>
    );
  });

  const myStyle = {
    transform: `translateX(${index * -10}rem)`,
  };

  const carouselLeft = () => {
    if (index > 0) {
      displayDetails(index - 1, true);
      setIndex(index - 1);
    }
  };

  const carouselRight = () => {
    if (index < images.length - 1) {
      displayDetails(index + 1, true);
      setIndex(index + 1);
    }
  };

  return (
    <div className='image-carousel--container'>
      <div>
        <button
          className='image-carousel--button'
          onClick={carouselLeft}>{`<`}</button>
      </div>
      <div className='image-carousel--image-wrapper'>
        <div className='image-carousel--image-container' style={myStyle}>
          {carouselImages}
        </div>
      </div>
      <div>
        <button
          className='image-carousel--button'
          onClick={carouselRight}>{`>`}</button>
      </div>
    </div>
  );
};
