import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServiceSection from '@/components/sections/service-section';
import SkillSection from '@/components/sections/skill-section';
import ProjectSection from '@/components/sections/project-section';
import ExperimentSection from '@/components/sections/experiment-section';
import ContactSection from '@/components/sections/contact-section';
import SocialMedia from '@/components/social-media';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import NavigationBar from '@/components/ui/nav-bar';

function Portfolio() {


    return (
        <>
            <header className='sticky top-0 z-50 w-full backdrop-blur-sm'>
                <MaxWidthWrapper className='pt-2 pb-0 mx-auto rounded-b-full max-md:px-2'>
                    <NavigationBar className='bg-white border-c-gray dark:bg-c-dark3 dark:border-c-dark1' />
                </MaxWidthWrapper>
            </header>

            {/* Heros section */}
            <HeroSection className='p-5' />
            {/* About section */}
            <AboutSection className='p-5 md:py-10' />
            {/* Services section */}
            <ServiceSection className='p-5 md:py-10 lg:py-20' />
            {/* Skill section */}
            <SkillSection className='p-5' />
            {/* Project section */}
            <ProjectSection className='p-5' />
            {/* Experiment section */}
            <ExperimentSection className='p-5' />
            {/* Contact section */}
            <ContactSection className='p-5' />


            {/* Social media links */}
            <div className='fixed top-0 z-40 flex flex-col items-center w-16 h-full -right-4 lg:w-32 max-xl:hidden'>
                <div className="relative flex items-center flex-grow h-full mx-auto">
                    <div className='absolute w-[1px] opacity-0 bg-c-light dark:bg-c-dark2 h-full top-0 right-1/2 translate-x-1/2 -z-10' />
                    <SocialMedia />
                </div>
            </div>

            {/* shadow */}
            <div aria-hidden="true" className='fixed right-0 inset-y-0 h-[300px] w-[200px] bg-gradient-to-b from-pink-500 to-indigo-600 blur-3xl opacity-25 -rotate-45 scale-150' />
            <div aria-hidden="true" className='absolute left-20  inset-y-0 h-[150px] w-[150px] bg-gradient-to-b from-violet-500 to-violet-600 blur-3xl opacity-35 -rotate-40 scale-150' />
        </>
    )
}

export default Portfolio;
