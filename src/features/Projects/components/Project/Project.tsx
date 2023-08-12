import { FC, useState } from 'react';
import { StyledProjectContainer } from './Project.styled';
import Image from 'next/image';
import { LinkStyle, Title, TitleMd } from '@/app/theme';
import { Tilt } from 'react-tilt';

interface ProjectProps {
  title: string;
  link: string;
  image: string[];
}

const Project: FC<ProjectProps> = ({ title, link, image }) => {
  const [img, setImg] = useState(image[0]);
  const handleMouseEnter = () => {
    setImg(image[1]);
  };

  const handleMouseLeave = () => {
    setImg(image[0]);
  };

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  };

  return (
    <StyledProjectContainer
      className={`card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <Image src={img} alt={title} fill />
        <div className="more-info">
          <TitleMd>{title}</TitleMd>
          <LinkStyle>
            <a href={link} target="_blank">
              See on Github
            </a>
          </LinkStyle>
        </div>
      </Tilt>
    </StyledProjectContainer>
  );
};

export default Project;
