// Navbar.tsx
'use client'
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";//Export menubar icon



const Navbar = () => {
  const scrollToAbout = () => {
    const contactSection = document.getElementById('about-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToServices = () => {
    const contactSection = document.getElementById('services-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToPortfolio = () => {
    const contactSection = document.getElementById('portfolio-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 border-b-2 border-gray-200 bg-gray-900">
      <div className="text-2xl font-bold text-white">Laiba</div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-8 text-white">
          <li className="menulink cursor-pointer hover:text-yellow-400 transition">
            <button>Home</button>
          </li>
          <li className="menulink cursor-pointer hover:text-yellow-400 transition">
            <button onClick={scrollToAbout}>About Me</button>
          </li>
          <li className="menulink cursor-pointer hover:text-yellow-400 transition">
            <button onClick={scrollToServices}>Services</button>
          </li>
          <li className="menulink cursor-pointer hover:text-yellow-400 transition">
            <button onClick={scrollToPortfolio}>Portfolio</button>
          </li>
        </ul>
         <AiOutlineMenu className='md:hidden' size={30}/> {/*for userfriendly working in mobile */}
        <button
          className="border-2 border-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
          aria-label="Contact"
          onClick={scrollToContact}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


// 'use client';
// import React from 'react';

// const Navbar: React.FC = () => {
//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="w-full flex justify-between items-center px-8 py-4 bg-gray-900 border-b-2 border-gray-200">
//       {/* Brand Logo */}
//       <div className="text-2xl font-bold text-white">Laiba</div>

//       {/* Navigation Links */}
//       <div className="flex items-center space-x-8">
//         <ul className="flex space-x-8 text-white">
//           <li className="menulink cursor-pointer hover:text-yellow-400 transition">
//             <a onClick={() => scrollToSection('home-section')}>Home</a>
//           </li>
//           <li className="menulink cursor-pointer hover:text-yellow-400 transition">
//             <a onClick={() => scrollToSection('about-section')}>About Me</a>
//           </li>
//           <li className="menulink cursor-pointer hover:text-yellow-400 transition">
//             <a onClick={() => scrollToSection('services-section')}>Services</a>
//           </li>
//           <li className="menulink cursor-pointer hover:text-yellow-400 transition">
//             <a onClick={() => scrollToSection('portfolio-section')}>Portfolio</a>
//           </li>
//         </ul>

//         {/* Contact Button */}
//         <button
//           className="border-2 border-yellow-400 text-white px-4 py-2 rounded-lg transition duration-300 
//             hover:bg-yellow-400 hover:text-black"
//           aria-label="Contact"
//           onClick={() => scrollToSection('contact-section')}
//         >
//           Contact
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


