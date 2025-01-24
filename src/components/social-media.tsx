import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className='flex flex-col gap-4'>
            <a href='#' className="p-2 border rounded-lg border-c-dark1 text-c-light bg-c-dark2 hover:text-purple-600 hover:shadow-sm hover:border-purple-400 hover:shadow-purple-500">
                <BsGithub className='w-6 h-6 md:w-8 md:h-8 aspect-square' />
            </a>
            <a href='#' className="p-2 border rounded-lg border-c-dark1 text-c-light bg-c-dark2 hover:text-purple-600 hover:shadow-sm hover:border-purple-400 hover:shadow-purple-500">
                <BsFacebook className='w-6 h-6 md:w-8 md:h-8 aspect-square' />
            </a>
            <a href='#' className="p-2 border rounded-lg border-c-dark1 text-c-light bg-c-dark2 hover:text-purple-600 hover:shadow-sm hover:border-purple-400 hover:shadow-purple-500">
                <BsLinkedin className='w-6 h-6 md:w-8 md:h-8 aspect-square' />
            </a>
            <a href='#' className="p-2 border rounded-lg border-c-dark1 text-c-light bg-c-dark2 hover:text-purple-600 hover:shadow-sm hover:border-purple-400 hover:shadow-purple-500">
                <BsWhatsapp className='w-6 h-6 md:w-8 md:h-8 aspect-square' />
            </a>
        </div>
    )
}

export default SocialMedia