import Image from 'next/image';
import React from 'react';
import { StyledCubeContainer } from './Cube.Styled';

export const Cube = () => {
  return (
    <StyledCubeContainer>
      <div className="cube">
        <div className="face front">
          <Image src={'https://placehold.co/600x400'} alt="node" width={70} height={70} />
        </div>
        <div className="face back">
          <Image src={'https://placehold.co/600x400'} alt="tools" width={70} height={70} />
        </div>
        <div className="face right">
          <Image src={'https://placehold.co/600x400'} alt="js" width={70} height={70} />
        </div>
        <div className="face left">
          <Image src={'https://placehold.co/600x400'} alt="bootstrap" width={70} height={70} />
        </div>
        <div className="face top">
          <Image src={'https://placehold.co/600x400'} alt="css" width={70} height={70} />
        </div>
        <div className="face bottom">
          <Image src={'https://placehold.co/600x400'} alt="reacts" width={70} height={70} />
        </div>
      </div>
    </StyledCubeContainer>
  );
};
