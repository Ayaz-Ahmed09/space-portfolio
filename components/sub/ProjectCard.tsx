
import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  path: string;
}

const ProjectCard = ({ src, title, description, path }: Props) => {
  // const handleClick = (event: React.MouseEvent) => {
  //   event.preventDefault(); 

  //   // For debugging purposes, log path and other details
  //   console.log("Path clicked:", path);

  //   if (path.startsWith('http')) {
  //     // Open external links
  //     window.open(path, '_blank', 'noopener,noreferrer');
  //   } else {
  //     console.error("Invalid path, expected an external URL:", path);
  //   }
  // };

  return (
    <>
    <div
    // onClick={() => console.log("Div clicked")}
      className='relative overflow-hidden  rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer '
      
    >
      <Image src={src} alt={title} width={1000} height={1000} className='w-full object-contain' />
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center'>
          {title}
        </h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
   
    </>
  );
};

export default ProjectCard;
