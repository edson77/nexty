import React from "react";

const SideBarProfile = () => {
    return (
        <>
            <div class="col-lg-4">

                <div class="row g-4">

                    {/* Card START */}
                    <div class="col-md-6 col-lg-12">
                        <div class="card">
                            <div class="card-header border-0 pb-0">
                                <h5 class="card-title">About</h5>
                                {/* Button modal */}
                            </div>
                            {/* Card body START */}
                            <div class="card-body position-relative pt-0">
                                <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
                                {/* Date time */}
                                <ul class="list-unstyled mt-3 mb-0">
                                    <li class="mb-2"> <i class="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October 20, 1990 </strong> </li>
                                    <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
                                    <li> <i class="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong> </li>
                                </ul>
                            </div>
                            {/* Card body END */}
                        </div>
                    </div>
                    {/* Card END */}

                    {/* Card START */}
                    <div class="col-md-6 col-lg-12">
                        <div class="card">
                            {/* Card header START */}
                            <div class="card-header d-flex justify-content-between border-0">
                                <h5 class="card-title">Experience</h5>
                                <a class="btn btn-primary-soft btn-sm" href="#!"> <i class="fa-solid fa-plus"></i> </a>
                            </div>
                            {/* Card header END */}
                            {/* Card body START */}
                            <div class="card-body position-relative pt-0">
                                {/* Experience item START */}
                                <div class="d-flex">
                                    {/* Avatar */}
                                    <div class="avatar me-3">
                                        <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt="" /> </a>
                                    </div>
                                    {/* Info */}
                                    <div>
                                        <h6 class="card-title mb-0"><a href="#!"> Apple Computer, Inc. </a></h6>
                                        <p class="small">May 2015 – Present Employment Duration 8 mos <a class="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                                    </div>
                                </div>
                                {/* Experience item END */}

                                {/* Experience item START */}
                                <div class="d-flex">
                                    {/* Avatar */}
                                    <div class="avatar me-3">
                                        <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/logo/09.svg" alt="" /> </a>
                                    </div>
                                    {/* Info */}
                                    <div>
                                        <h6 class="card-title mb-0"><a href="#!"> Microsoft Corporation </a></h6>
                                        <p class="small">May 2017 – Present Employment Duration 1 yrs 5 mos <a class="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                                    </div>
                                </div>
                                {/* Experience item END */}

                                {/* Experience item START */}
                                <div class="d-flex">
                                    {/* Avatar */}
                                    <div class="avatar me-3">
                                        <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/logo/10.svg" alt="" /> </a>
                                    </div>
                                    {/* Info */}
                                    <div>
                                        <h6 class="card-title mb-0"><a href="#!"> Tata Consultancy Services. </a></h6>
                                        <p class="small mb-0">May 2022 – Present Employment Duration 6 yrs 10 mos <a class="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                                    </div>
                                </div>
                                {/* Experience item END */}

                            </div>
                            {/* Card body END */}
                        </div>
                    </div>
                    {/* Card END */}

                </div>
                {/* Card END */}
            </div>


        </>
    )
}

export default SideBarProfile