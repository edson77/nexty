import React from "react";
import SideNav from "../../components/home/sideNav";
import MainContent from "../../components/home/main-content";
import RightSideBar from "../../components/home/right-sidebar";
const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="row g-4">

                    {/* Sidenav START */}
                    <div className="col-md-3">
                        <SideNav/>
                    </div>
                    {/* Sidenav END */}

                    {/* Main content START */}
                    <div className="col-md-6">
                        <MainContent/>
                    </div>
                    {/* Main content END */}

                    {/* Right sidebar START */}
                    <div className="col-md-3">
                        <RightSideBar/>
                    </div>
                    {/* Right sidebar END */}

                </div> {/* Row END */}
            </div>
        </>
    )

}

export default HomePage