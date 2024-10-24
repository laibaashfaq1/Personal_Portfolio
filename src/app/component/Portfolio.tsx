import React from 'react';
import Image from 'next/image';

// Array of portfolio images with titles and sources
const portfolioItems = [
  { 
    id: 1, 
    title: 'UX/UI Design', 
    src: '/picture0.png' 
  },
  { 
    id: 2, 
    title: 'Website Design', 
    src: '/picture1.png' 
  },
  { 
    id: 3, 
    title: 'Poster Design', 
    src: '/picture2.png' 
  },
  { 
    id: 4, 
    title: 'Logo Design', 
    src: '/picture3.png' 
  },
  { 
    id: 5, 
    title: 'Social Media Post', 
    src: '/picture4.png' 
  },
  { 
    id: 6, 
    title: 'Youtube Thumbnail', 
    src: '/picture5.png' 
  },
];

const Portfolio = () => {
  return (
    <div
      id='portfolio'
      className='container mx-auto pt-32 px-8 md:px-16 lg:px-24'
    >
      {/* Header Section */}
      <div className='lg:w-1/2 mb-8'>
        <h3 className='text-xl mb-4 font-medium'>Portfolio</h3>
        <h1 className='text-4xl font-bold mb-2'>
          I help you craft impactful brands for your business
        </h1>
      </div>

      {/* Portfolio Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {portfolioItems.map((item) => (
          <div key={item.id} className='border border-accent rounded-lg p-4'>
            <Image
              className='w-full h-auto rounded-lg'
              src={item.src}
              width={350}
              height={250}
              alt={item.title}
            />
            <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
