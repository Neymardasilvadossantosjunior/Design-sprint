import React from 'react';
import { ImageSectionContainer, Image } from './StyledComponents'; 
import image0 from '../assets/image0.jpeg'; 
const ImageSection = () => {
  return (
    <ImageSectionContainer>
      <Image src={image0} alt="Image description" />
    </ImageSectionContainer>
  );
};

export default ImageSection;
