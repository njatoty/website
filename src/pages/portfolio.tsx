import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServiceSection from '@/components/sections/service-section';
import SkillSection from '@/components/sections/skill-section';
import ProjectSection from '@/components/sections/project-section';
import ExperimentSection from '@/components/sections/experiment-section';
import ContactSection from '@/components/sections/contact-section';

function Portfolio() {


    return (
        <>
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
        </>
    )
}

export default Portfolio;
