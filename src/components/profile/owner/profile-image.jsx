import React,{useEffet} from "react";
import { Link } from "react-router-dom";
import './image-style.css'

const ProfileImage = () => {
    var pathname = window.location.pathname
    return (
        <>
            <div class="card">
                {/* Cover image */}
                <div class="h-200px rounded-top" style={{backgroundImage: "url("+ process.env.PUBLIC_URL + "assets/images/01.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
                {/* Card body START */}
                <div class="card-body py-0">
                    <div class="d-sm-flex align-items-start text-center text-sm-start">
                        <div>
                            {/* Avatar */}
                            <div class="avatar avatar-xxl mt-n5 mb-3">
                                <img class="avatar-img rounded-circle border border-white border-3 profil-image-cov" src={process.env.PUBLIC_URL + "assets/images/07.jpg"} alt="" />
                            </div>
                        </div>
                        <div class="ms-sm-4 mt-sm-3">
                            {/* Info */}
                            <h1 class="mb-0 h5">Sam Lanson <i class="bi bi-patch-check-fill text-success small"></i></h1>
                            <p>250 connections</p>
                        </div>
                        {/* Button */}
                        <div class="d-flex mt-3 justify-content-center ms-sm-auto">
                            <button class="btn btn-danger-soft me-2" type="button"> <i class="bi bi-pencil-fill pe-1"></i> Edit profile </button>
                            <div class="dropdown">
                                {/* Card share action menu */}
                                <button class="icon-md btn btn-light" type="button" id="profileAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-three-dots"></i>
                                </button>
                                {/* Card share action dropdown menu */}
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Share profile in a message</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile to PDF</a></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-lock fa-fw pe-2"></i>Lock profile</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-gear fa-fw pe-2"></i>Profile settings</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* List profile */}
                    <ul class="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                        <li class="list-inline-item"><i class="bi bi-briefcase me-1"></i> Lead Developer</li>
                        <li class="list-inline-item"><i class="bi bi-geo-alt me-1"></i> New Hampshire</li>
                        <li class="list-inline-item"><i class="bi bi-calendar2-plus me-1"></i> Joined on Nov 26, 2019</li>
                    </ul>
                </div>
                {/* Card body END */}
                <div class="card-footer mt-3 pt-2 pb-0">
                    {/* Nav profile pages */}
                    <ul class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                        <li class="nav-item"> <Link class={ pathname =='/profile' ? 'nav-link active':'nav-link' } to="/profile"> Posts </Link> </li>
                        <li class="nav-item"> <Link class={ pathname =='/profile/about' ? 'nav-link active':'nav-link' } to="/profile/about"> About </Link> </li>
                       {/*
                        <li class="nav-item"> <a class="nav-link" href="my-profile-connections.html"> Connections <span class="badge bg-success bg-opacity-10 text-success small"> 230</span> </a> </li>
                        <li class="nav-item"> <a class="nav-link" href="my-profile-media.html"> Media</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="my-profile-videos.html"> Videos</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="my-profile-events.html"> Events</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="my-profile-activity.html"> Activity</a> </li>
                        */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfileImage