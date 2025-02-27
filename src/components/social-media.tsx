import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
const socialLinks = [
    {
        href: 'https://github.com/njatoty', icon: <BsGithub className='w-6 h-6 md:w-8 md:h-8 aspect-square' />, name: 'GitHub'
    },
    { href: 'https://www.facebook.com/njatotiana.fiononana.a', icon: <BsFacebook className='w-6 h-6 md:w-8 md:h-8 aspect-square' />, name: 'Facebook' },
    { href: 'https://www.linkedin.com/in/njatotiana-fiononana-andriamanirisoa-a81a00265', icon: <BsLinkedin className='w-6 h-6 md:w-8 md:h-8 aspect-square' />, name: 'LinkedIn' },
    { href: 'https://wa.me/+261349190392', icon: <BsWhatsapp className='w-6 h-6 md:w-8 md:h-8 aspect-square' />, name: 'WhatsApp' },
];

const SocialMedia = () => {
    return (
        <div className='flex flex-col gap-4'>
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    className="p-2 transition-all duration-200 ease-in-out border rounded-lg bg-c-light border-c-gray-0 dark:border-c-dark1 text-c-dark0 dark:text-c-light dark:bg-c-dark2 hover:text-violet-600 hover:shadow-sm hover:border-violet-400 hover:shadow-violet-500 hover:scale-125 dark:hover:text-violet-600"
                    aria-label={link.name}
                >
                    <div className="w-6 h-6 md:w-8 md:h-8 aspect-square">
                        {link.icon}
                    </div>
                </a>
            ))}
        </div>
    )
}

export default SocialMedia