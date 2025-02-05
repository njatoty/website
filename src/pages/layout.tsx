import { Outlet } from "react-router-dom";
import FooterSection from "@/components/sections/footer-section";
import SocialMedia from "@/components/social-media";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import NavigationBar from "@/components/ui/nav-bar";

function Layout() {


    return (
        <div className='relative flex flex-col w-full min-h-screen bg-white dark:bg-c-dark3 text-c-light'>

            <header className='sticky top-0 z-50'>
                <MaxWidthWrapper className='px-1 pt-2 pb-0 mx-auto rounded-b-full max-md:px-2 backdrop-blur'>
                    <NavigationBar className='bg-white border-c-gray dark:bg-c-dark3 dark:border-c-dark1' />
                </MaxWidthWrapper>
            </header>


            {/* Section pages */}
            <main className="flex-1 w-full lg:px-32">
                <Outlet />
            </main>

            {/* Footer section */}
            <FooterSection className='' />

            {/* Social media links */}
            <div className='fixed top-0 z-40 flex flex-col items-center w-16 h-full -right-4 lg:w-32 max-xl:hidden'>
                <div className="relative flex items-center flex-grow h-full mx-auto">
                    <div className='absolute w-[1px] opacity-0 bg-c-light dark:bg-c-dark2 h-full top-0 right-1/2 translate-x-1/2 -z-10' />
                    <SocialMedia />
                </div>
            </div>

            {/* shadow */}
            <div aria-hidden="true" className='fixed right-0 inset-y-0 h-[300px] w-[200px] bg-gradient-to-b from-pink-500 to-indigo-600 blur-3xl opacity-25 -rotate-45 scale-150' />
            <div aria-hidden="true" className='absolute left-20  inset-y-0 h-[150px] w-[150px] bg-gradient-to-b from-purple-500 to-purple-600 blur-3xl opacity-35 -rotate-40 scale-150' />

        </div >
    )
}

export default Layout;