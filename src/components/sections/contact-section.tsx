import React from 'react'
import MaxWidthWrapper from '../ui/max-width-wrapper'
import { cn } from '../../utils'
import { MutedTitle, Paragraph, StrongTitle } from '../ui/typography'
import ContactItem from '../ui/contact-item'
import { MdEmail, MdLocationPin, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const ContactSection = ({ className, }: { className?: string }) => {
    return (
        <section id='contact' className={cn('w-full flex-grow', className)}>
            <MaxWidthWrapper className='mx-auto'>
                <div className="w-full">
                    <MutedTitle>Contact</MutedTitle>
                    <StrongTitle>Me contacter</StrongTitle>
                    <Paragraph>
                        N'hésitez pas à me contacter pour toute collaboration ou opportunité. Voici mes coordonnées.
                    </Paragraph>
                </div>
                <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="w-full">
                        <MutedTitle className='mb-4 text-sm font-bold'>Contacts:</MutedTitle>
                        <ContactItem href='tel:0389190392'>
                            <MdPhone size={25} />
                            <span>+261 38 91 903 92</span>
                        </ContactItem>

                        <ContactItem href='https://wa.me/+261389190392'>
                            <MdWhatsapp size={25} />
                            <span>+261 38 91 903 92</span>
                        </ContactItem>

                        <ContactItem href='mailto:njatotianafiononana@gmail.com'>
                            <MdEmail size={25} />
                            <span>njatotianafiononana@gmail.com</span>
                        </ContactItem>
                    </div>
                    <div className="w-full">
                        <MutedTitle className='mb-4 text-sm font-bold'>Réseaux sociaux:</MutedTitle>
                        <ContactItem href='https://www.linkedin.com/in/njatotiana-fiononana-andriamanirisoa-a81a00265'>
                            <FaLinkedin size={25} />
                            <span>Linkedin</span>
                        </ContactItem>

                        <ContactItem href='https://www.facebook.com/njatotiana.fiononana.a'>
                            <FaFacebook size={25} />
                            <span>Facebook</span>
                        </ContactItem>

                        <ContactItem href='https://github.com/njatoty'>
                            <FaGithub size={25} />
                            <span>GitHub</span>
                        </ContactItem>
                    </div>

                    <div className="w-full">
                        <MutedTitle className='mb-4 text-sm font-bold'>Localisation:</MutedTitle>
                        <ContactItem>
                            <MdLocationPin size={25} />
                            <span>Antananarivo, Madagascar</span>
                        </ContactItem>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default ContactSection