import ThemeToggle from "@/components/theme-toggle";
import { PiArrowLeftLight } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

function Blog() {

    return (
        <div className="flex flex-col flex-grow w-full h-full">
            <div className='sticky top-0 z-50 flex items-center justify-between w-full px-6 py-2 bg-white border-b dark:bg-c-dark2 border-c-gray-0 dark:border-c-dark0'>

                {/* Logo */}
                <div className='px-2 py-1 text-base font-extrabold rounded-sm lg:text-2xl text-c-light'>
                    <img src='/tiny-favicon.png' className='w-7 md:w-8 lg:w-10' />
                </div>

                <div className="flex items-stretch justify-end w-full gap-6 max-md:text-sm">
                    <Link to="/blog" className="p-1 cursor-pointer text-c-dark0 dark:text-c-gray hover:text-yellow-500 dark:hover:text-yellow-500">
                        <PiArrowLeftLight size={24} className="inline mr-2" />
                        Liste de Blogs
                    </Link>
                    <Link to="/" className="p-1 cursor-pointer text-c-dark0 dark:text-c-gray hover:text-yellow-500 dark:hover:text-yellow-500">
                        Portfolio
                    </Link>
                    <ThemeToggle className="px-2 text-c-dark0 dark:text-c-gray hover:text-yellow-500" iconSize={18} />
                </div>
            </div>

            <Outlet />

        </div>
    )
}

export default Blog;