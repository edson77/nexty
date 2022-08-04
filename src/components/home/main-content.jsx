import React from "react";

import CreatePost from "../profile/owner/create-post";
import Publications from "./publications";

const MainContent = () => {
    return (
        <>
        
        {/* Story START */}
        
        {/* Story END */}

        {/* Share feed START */}
        <CreatePost/>
        {/* Share feed END */}

        {/* Card feed item START */}
        <Publications/>
        {/* Card feed item END */}
        </>
    )
}

export default MainContent