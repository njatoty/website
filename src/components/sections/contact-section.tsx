import React from 'react'
import MaxWidthWrapper from '../ui/max-width-wrapper'
import { cn } from '../../utils'
import { MutedTitle, Paragraph, StrongTitle } from '../ui/typography'
import ContactItem from '../ui/contact-item'
import { MdEmail, MdLocationPin, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const ContactSection = ({ className, }: { className?: string }) => {
    return (
        <div className={cn('w-full flex-grow', className)}>
            <MaxWidthWrapper className='mx-auto'>
                <div className="w-full">
                    <MutedTitle>Contact</MutedTitle>
                    <StrongTitle>Me contacter</StrongTitle>
                    <Paragraph>
                        N'hésitez pas à me contacter pour toute collaboration ou opportunité. Voici mes coordonnées.
                    </Paragraph>
                </div>
                <div className="grid grid-cols-1 gap-4 my-6 lg:grid-cols-2">
                    <div className="w-full">
                        <MutedTitle className='mb-4 text-sm font-bold'>Contacts:</MutedTitle>
                        <ContactItem href='tel:0349190392'>
                            <MdPhone size={20} />
                            <span className='opacity-60'>:</span>
                            <span>034 51 742 41</span>
                        </ContactItem>

                        <ContactItem href='https://wa.me/+261349190392'>
                            <MdWhatsapp size={20} />
                            <span className='opacity-60'>:</span>
                            <span>+261 34 51 742 41</span>
                        </ContactItem>

                        <ContactItem href='mailto:njatotianafiononana@gmail.com'>
                            <MdEmail size={20} />
                            <span className='opacity-60'>:</span>
                            <span>njatotianafiononana@gmail.com</span>
                        </ContactItem>

                        <ContactItem>
                            <MdLocationPin size={20} />
                            <span className='opacity-60'>:</span>
                            <span>Antananarivo, Madagascar</span>
                        </ContactItem>
                    </div>
                    <div className="w-full">
                        <MutedTitle className='mb-4 text-sm font-bold'>Réseaux sociaux:</MutedTitle>
                        <ContactItem href='https://www.linkedin.com/in/njatotiana-fiononana-andriamanirisoa-a81a00265'>
                            <FaLinkedin size={20} />
                            <span>Linkedin</span>
                        </ContactItem>

                        <ContactItem href='https://www.facebook.com/njatotiana.fiononana.a'>
                            <FaFacebook size={20} />
                            <span>Facebook</span>
                        </ContactItem>

                        <ContactItem href='https://github.com/njatoty'>
                            <FaGithub size={20} />
                            <span>GitHub</span>
                        </ContactItem>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default ContactSection