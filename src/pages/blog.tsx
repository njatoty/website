import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { Outlet } from "react-router-dom";

function Blog() {

    return (
        <MaxWidthWrapper className="flex flex-col flex-grow w-full h-full p-10 mx-auto">

            <Outlet />

        </MaxWidthWrapper>
    )
}

export default Blog;