import React from "react";

const SideNav = () => {
    return (
        <>
            <div className="col-lg-3">

                {/* Advanced filter responsive toggler START */}
                <div className="d-flex align-items-center d-lg-none">
                    <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                        <i className="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
                        <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                    </button>
                </div>
                {/* Advanced filter responsive toggler END */}

                {/* Navbar START*/}
                <nav className="navbar navbar-expand-lg mx-0">
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
                        {/* Offcanvas header */}
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        {/* Offcanvas body */}
                        <div className="offcanvas-body d-block px-2 px-lg-0">
                            {/* Card START */}
                            <div className="card overflow-hidden">
                                {/* Cover image */}
                                <div className="h-50px" style={{backgroundImage: "url(assets/images/bg/01.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
                                {/* Card body START */}
                                <div className="card-body pt-0">
                                    <div className="text-center">
                                        {/* Avatar */}
                                        <div className="avatar avatar-lg mt-n5 mb-3">
                                            <a href="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/avatar/07.jpg" alt="" /></a>
                                        </div>
                                        {/* Info */}
                                        <h5 className="mb-0"> <a href="#!">Sam Lanson </a> </h5>
                                        <small>Web Developer at Webestica</small>
                                        <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

                                        {/* User stat START */}
                                        <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                            {/* User stat item */}
                                            <div>
                                                <h6 className="mb-0">256</h6>
                                                <small>Post</small>
                                            </div>
                                            {/* Divider */}
                                            <div className="vr"></div>
                                            {/* User stat item */}
                                            <div>
                                                <h6 className="mb-0">2.5K</h6>
                                                <small>Followers</small>
                                            </div>
                                            {/* Divider */}
                                            <div className="vr"></div>
                                            {/* User stat item */}
                                            <div>
                                                <h6 className="mb-0">365</h6>
                                                <small>Following</small>
                                            </div>
                                        </div>
                                        {/* User stat END */}
                                    </div>

                                    {/* Divider */}
                                    <hr />

                                    {/* Side Nav START */}
                                    <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                        <li className="nav-item">
                                            <a className="nav-link" href="my-profile.html"> <i class="bi bi-house" style={{fontSize: 1 + "rem", color: ""}}></i>&nbsp;<span>Feed </span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="my-profile-connections.html"> <i class="bi bi-people" style={{fontSize: 1 + "rem", color: ""}}></i>&nbsp;<span>Friends </span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="blog.html"> <i class="bi bi-newspaper" style={{fontSize: 1 + "rem", color: ""}}></i>&nbsp;<span>Latest News </span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="events.html"> <i class="bi bi-calendar-event" style={{fontSize: 1 + "rem", color: ""}}></i>&nbsp;<span>Events </span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="groups.html"> <i class="bi bi-chat-right-text" style={{fontSize: 1 + "rem", color: ""}}></i>&nbsp;<span>Messages </span></a>
                                        </li>
                                    </ul>
                                    {/* Side Nav END */}
                                </div>
                                {/* Card body END */}
                                {/* Card footer */}
                                <div className="card-footer text-center py-2">
                                    <a className="btn btn-link btn-sm" href="my-profile.html">View Profile </a>
                                </div>
                            </div>
                            {/* Card END */}

                            {/* Helper link START */}
                            <ul className="nav small mt-4 justify-content-center lh-1">
                                <li className="nav-item">
                                    <a className="nav-link" href="my-profile-about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="settings.html">Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://support.webestica.com/login">Support </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="docs/index.html">Docs </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="help.html">Help</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="privacy-and-terms.html">Privacy &amp; terms</a>
                                </li>
                            </ul>
                            {/* Helper link END */}
                            {/* Copyright */}
                            <p className="small text-center mt-1">©2022 <a className="text-body" target="_blank" href="https://www.webestica.com/"> Webestica </a></p>
                        </div>
                    </div>
                </nav>
                {/* Navbar END*/}
            </div>
        </>
    )
}

export default SideNav