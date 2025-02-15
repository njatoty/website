import { Outlet } from "react-router-dom";
import FooterSection from "@/components/sections/footer-section";

function Layout() {


    return (
        <div className='relative flex flex-col w-full min-h-screen bg-white dark:bg-c-dark3 text-c-light'>

            {/* Section pages */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer section */}
            <FooterSection className='' />

        </div >
    )
}

export default Layout;