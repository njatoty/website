import { useEffect, useRef, useState } from 'react';
import './App.css'
import HeroSection from './components/sections/hero-section';
import SocialMedia from './components/social-media';
import MaxWidthWrapper from './components/ui/max-width-wrapper';
import Navbar from './components/ui/nav-bar';
import AboutSection from './components/sections/about-section';
import ServiceSection from './components/sections/service-section';

function App() {


  const divRef = useRef<HTMLDivElement>(null);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {

    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      console.log("Top position relative to viewport:", rect.top);
      setTopPosition(rect.top)
    }
  }, [divRef]);

  return (
    <div className='flex flex-col w-full min-h-screen bg-c-dark3 text-c-light'>

      <MaxWidthWrapper className='sticky top-0 z-50 pt-2 pb-0 mx-auto backdrop-blur '>
        <Navbar className='bg-c-dark3 border-c-dark1' />
      </MaxWidthWrapper>

      <div className='flex flex-col flex-grow px-6 py-3 mx-auto shadow-md md:p-2'>

        <div ref={divRef} className="flex items-start flex-grow w-full h-full px-2">

          {/* Social media links */}
          <div className='w-16 lg:w-32' />

          {/* Section pages */}
          <div className="flex-grow w-full">
            {/* Heros section */}
            <HeroSection className='min-h-[calc(100vh-80px)]' />
            {/* About section */}
            <AboutSection className='min-h-screen py-5 md:py-10 lg:py-20' />
            {/* Services section */}
            <ServiceSection className='min-h-screen py-5 md:py-10 lg:py-20' />

          </div>

          {/* Social media links */}
          <div className='sticky flex flex-col min-h-[85vh] top-24 right-2 z-40 w-16 lg:w-32' style={{ top: `${topPosition}px` }}>
            <div className="relative flex items-center flex-grow ml-auto">
              <div className='absolute w-[1px] bg-c-dark2 h-full top-0 right-1/2 translate-x-1/2 -z-10' />
              <SocialMedia />
            </div>
          </div>

        </div>

        {/* shadow */}
        <div aria-hidden="true" className='absolute right-0 inset-y-0 h-[500px] w-[200px] bg-gradient-to-b from-pink-500 to-purple-600 blur-3xl opacity-35 -rotate-45 scale-150' />
        <div aria-hidden="true" className='absolute left-20  inset-y-0 h-[150px] w-[150px] bg-gradient-to-b from-purple-500 to-purple-600 blur-3xl opacity-35 -rotate-40 scale-150' />

      </div>
    </div>
  )
}

export default App;
