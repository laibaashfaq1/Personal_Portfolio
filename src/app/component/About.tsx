
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto pt-32 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Side: Text Content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl mb-4 font-medium">About Me</h3>
        <h1 className="text-4xl font-medium mb-2">Hello! I am</h1>
        <h1 className="text-7xl font-medium text-yellow-400 mb-4">Laiba Ashfaq</h1>
        <p className="pt-8">
          As a Graphic Designer and a student at GIAIC, pursuing Artificial Intelligence, Web 3.0, and the Metaverse, 
          I bring a unique blend of creativity and technology to my work. With a keen eye for detail and a passion for visual storytelling, 
          I specialize in crafting engaging designs for apps, websites, and brands that captivate and connect with audiences. 
          My dedication to delivering high-quality, innovative solutions has enabled me to build strong relationships with clients 
          across diverse industries. I stay updated with the latest design trends and technologies to consistently exceed expectations 
          and transform ideas into impactful visuals that resonate with target audiences. Let&apos;s collaborate to bring your ideas to life 
          through designs that inspire and leave a lasting impression.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 flex justify-center">
      <Image
              src="/image.png"
              alt="Laiba Ashfaq"
              width={350}
              height={300}
              priority
              className="object-contain"
              style={{ marginRight: '-100px' }}
             />

      </div>
    </div>
  );
};

export default About;
