
import React from 'react';

// Data array for services
const data = [
  {
    id: 0,
    title: 'Book Cover Design',
    desc: 'Capture hearts and spark curiosity at first sight with book covers that do not just introduce your story—they immerse readers in it.',
  },
  {
    id: 1,
    title: 'Flyer & Poster',
    desc: 'Make your events or promotions unforgettable with impactful flyer and poster designs, capturing attention and conveying key information.',
  },
  {
    id: 2,
    title: 'Banner',
    desc: 'Elevate your brand with striking banners that reinforce your identity, ensuring a cohesive visual presence across platforms.',
  },
  {
    id: 3,
    title: 'Social Media Post',
    desc: 'Boost your online presence with visually stunning, shareable social media posts that engage your audience across digital platforms.',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    desc: 'Enhance user experiences with intuitive and pleasing UI/UX designs for seamless interactions with digital products or platforms.',
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="container mx-auto pt-32 px-8 md:px-16 lg:px-24" // Ensure same padding
    >
      {/* Header Section */}
      <div className="lg:w-1/2 mb-8">
        <h3 className="text-xl mb-4 font-medium">Services</h3>
        <h1 className="text-4xl font-bold mb-2">
          I offer these <span className="text-yellow-400">services</span> for
          your Graphic Design project
        </h1>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service) => (
          <div key={service.id} className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
