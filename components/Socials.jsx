'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/ziyadissa/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/issaziyad',
    name: <RiFacebookFill/>,
  },
  {
    path: 'https://www.instagram.com/issaziyad',
    name: <RiInstagramFill />,
  },
];


const Socials = ({containerStyles, iconStyles}) => {
  return (
  <div className={`${containerStyles}`}>
    {icons.map((icon, index) => {
      return (
        <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      );
    })}
  </div>
  );
};

export default Socials