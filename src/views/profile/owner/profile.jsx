import React from "react";
import ProfileImage from './../../../components/profile/owner/profile-image'
import SideBarProfile from "../../../components/profile/owner/side-bar";
const OwnerProfile = () => {
    return (
        <>
            <div class="container">
                <div class="row g-4">

                    {/* Main content START */}
                    <div class="col-lg-8 vstack gap-4">
                        {/* My profile START */}
                        <ProfileImage />
                        
                        {/* My profile END */}

                        {/* Debut de la section ou je vais faire le routage du profile */}

                        {/* Share feed START */}
                        {/* Share feed END */}

                        {/* Card feed item START */}
                        {/* Card feed item END */}

                        {/* Card feed item START */}
                        {/* Card feed item END */}
                        {/* Debut de la section ou je vais faire le routage du profile */}
                    </div>
                    {/* Main content END */}

                    {/* Right sidebar START */}
                    <SideBarProfile/>
                    {/* Right sidebar END */}

                </div> {/* Row END */}
            </div>
        </>
    )

}

export default OwnerProfile