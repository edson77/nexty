import React from "react";

const Story = () => {
    return (
        <>
            <div class="tiny-slider arrow-hover overflow-hidden">
                <div class="tns-outer" id="tns1-ow"><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">2 to 6</span>  of 6</div><div id="tns1-mw" class="tns-ovh"><div class="tns-inner" id="tns1-iw"><div class="tiny-slider-inner ms-n4  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" data-arrow="true" data-dots="true" data-loop="false" data-autoplay="false" data-items-xl="4" data-items-lg="3" data-items-md="3" data-items-sm="3" data-items-xs="2" data-gutter="12" data-edge="30" id="tns1" style={{ transform: "translate3d(-33.3333%, 0px, 0px)" }}>

                    {/* Slider items */}
                    <div class="tns-item" id="tns1-item0" aria-hidden="true" tabindex="-1">
                        {/* Card add story START */}
                        <div class="card border border-2 border-dashed h-150px shadow-none d-flex align-items-center justify-content-center text-center">
                            <div>
                                <a class="stretched-link btn btn-light rounded-circle icon-md" href="#!"><i class="fa-solid fa-plus"></i></a>
                                <h6 class="mt-2 mb-0 small">Post a Story</h6>
                            </div>
                        </div>
                        {/* Card add story END */}
                    </div>

                    {/* Slider items */}
                    <div class="tns-item tns-slide-active" id="tns1-item1">
                        {/* Card START */}
                        <div class="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/01.jpg)", backgroundPosition: "center left", backgroundSize: "cover" }}>
                            <div class="card-img-overlay d-flex align-items-center p-2">
                                <div class="w-100 mt-auto">
                                    {/* Name */}
                                    <a href="#!" class="stretched-link text-white small">Judy Nguyen</a>
                                </div>
                            </div>
                        </div>
                        {/* Card END */}
                    </div>

                    {/* Slider items */}
                    <div class="tns-item tns-slide-active" id="tns1-item2">
                        {/* Card START */}
                        <div class="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/01.jpg)", backgroundPosition: "center left", backgroundSize: "cover" }}>
                            <div class="card-img-overlay d-flex align-items-center p-2">
                                <div class="w-100 mt-auto">
                                    {/* Name */}
                                    <a href="#!" class="stretched-link text-white small">Samuel Bishop</a>
                                </div>
                            </div>
                        </div>
                        {/* Card END */}
                    </div>

                    {/* Slider items */}
                    <div class="tns-item tns-slide-active" id="tns1-item3">
                        {/* Card START */}
                        <div class="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/01.jpg)", backgroundPosition: "center left", backgroundSize: "cover" }}>
                            <div class="card-img-overlay d-flex align-items-center p-2">
                                <div class="w-100 mt-auto">
                                    {/* Name */}
                                    <a href="#!" class="stretched-link text-white small">Carolyn Ortiz</a>
                                </div>
                            </div>
                        </div>
                        {/* Card END */}
                    </div>

                    {/* Slider items */}
                    <div class="tns-item tns-slide-active" id="tns1-item4">
                        {/* Card START */}
                        <div class="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/01.jpg)", backgroundPosition: "center left", backgroundSize: "cover" }}>
                            <div class="card-img-overlay d-flex align-items-center p-2">
                                <div class="w-100 mt-auto">
                                    {/* Name */}
                                    <a href="#!" class="stretched-link text-white small">Amanda Reed</a>
                                </div>
                            </div>
                        </div>
                        {/* Card END */}
                    </div>

                    {/* Slider items */}
                    <div class="tns-item tns-slide-active" id="tns1-item5">
                        {/* Card START */}
                        <div class="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/01.jpg)", backgroundPosition: "center left", backgroundSize: "cover" }}>
                            <div class="card-img-overlay d-flex align-items-center p-2">
                                <div class="w-100 mt-auto">
                                    {/* Name */}
                                    <a href="#!" class="stretched-link text-white small">Lori Stevens</a>
                                </div>
                            </div>
                        </div>
                        {/* Card END */}
                    </div>
                </div></div></div><div class="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav="0" aria-controls="tns1" style={{}} aria-label="Carousel Page 1" class="" tabindex="-1"></button><button type="button" data-nav="1" aria-controls="tns1" style={{}} aria-label="Carousel Page 2 (Current Slide)" class="tns-nav-active"></button><button type="button" data-nav="2" tabindex="-1" aria-controls="tns1" style={{ display: "none" }} aria-label="Carousel Page 3"></button><button type="button" data-nav="3" tabindex="-1" aria-controls="tns1" style={{ display: "none" }} aria-label="Carousel Page 4"></button><button type="button" data-nav="4" tabindex="-1" aria-controls="tns1" style={{ display: "none" }} aria-label="Carousel Page 5"></button><button type="button" data-nav="5" tabindex="-1" aria-controls="tns1" style={{ display: "none" }} aria-label="Carousel Page 6"></button></div><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns1"><i class="fa-solid fa-chevron-left"></i></button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns1" disabled=""><i class="fa-solid fa-chevron-right"></i></button></div></div>
            </div>
        </>
    )
}

export default Story