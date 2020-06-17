import React from 'react';
import './style.scss';
import Slider from './slider';

const slideData = [
    {
      index: 0,
      headline: 'Gile Mountain',
      button: 'Get Focused',
      src: 'https://adisriv-website.s3.us-east-2.amazonaws.com/IMG_7312.jpeg',
    },
    {
      index: 1,
      headline: 'Bara Imambara',
      button: 'Book travel',
      src: 'https://adisriv-website.s3.us-east-2.amazonaws.com/CECC752A-D929-4D0A-8143-ECACFD40343F.JPG'
    },
    {
      index: 2,
      headline: 'Dartmouth Homecoming Bonfire',
      button: 'Listen',
      src: 'https://adisriv-website.s3.us-east-2.amazonaws.com/IMG_7083.jpeg',
    },
    {
      index: 3,
      headline: 'Abandoned House',
      button: 'Shop now',
      src: 'https://adisriv-website.s3.us-east-2.amazonaws.com/IMG_7322.jpeg',
    },
    {
      index: 4,
      headline: 'New York City',
      button: 'Get Focused',
      src: 'https://adisriv-website.s3.us-east-2.amazonaws.com/IMG_5513.JPG',
    },
  ]


const Photography = (props) => {
  return (
    <Slider heading="Example Slider" slides={slideData} />
  );
};

export default Photography;