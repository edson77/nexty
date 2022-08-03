import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./style.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <header className="navbar-light bg-mode fixed-top">

                {/* Logo Nav START */}
                <nav className="navbar navbar-icon navbar-expand-lg">
                    <div className="container container-fluid">
                        {/* Logo START */}
                        <Link className="navbar-brand" to="/">
                            <img className="light-mode-item navbar-brand-item" src={process.env.PUBLIC_URL + "logo192.png"} alt="logo" />
                        </Link>
                        {/* Logo END */}

                        {/* Nav Search */}
                        <div class="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                            <div class="nav-item w-100">
                                <form class="rounded position-relative">
                                    <input class="form-control  ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search" />
                                    <button class="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i class="bi bi-search fs-5"> </i></button>
                                </form>
                            </div>
                        </div>
                        {/* end Nav Search */}

                        

                        {/* Responsive navbar toggler */}
                        <button className="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        {/* Main navbar START */}
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll mx-auto">
                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"> <i className="bi bi-house"></i> <span className="nav-text"> Home </span> </a>
                                </li>

                                {/* Nav item */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#"> <i className="bi bi-folder"></i> <span className="nav-text"> Albums </span> </a>
                                </li>

                                {/* Nav item */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#"> <i className="bi bi-people"></i> <span className="nav-text"> Groups </span> </a>
                                </li>

                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="badge-notif badge-notif-bottom"></div>
                                        <i className="bi bi-chat-left"></i> <span className="nav-text"> messaging </span>
                                    </a>
                                </li>

                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="badge-notif badge-notif-bottom"></div>
                                        <i className="bi bi-bell"></i> <span className="nav-text"> Notifications </span>
                                    </a>
                                </li>

                                {/* Nav item */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <i className="avatar bi bi-ui-radios-grid"></i> </a>
                                </li>
                                

                            </ul>
                        </div>
                        {/* Main navbar END */}

                        {/* Nav right START */}
                        <ul className="nav flex-nowrap align-items-center ms-auto list-unstyled">
                            <li class="nav-item ms-2 dropdown nav-search">
                                <Link class="nav-link btn icon-md p-0" to="/profile" id="searchDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="avatar-img mon-cercle-image-1" src={process.env.PUBLIC_URL + "assets/images/07.jpg"} alt="" />
                                </Link>
                            </li>
                        </ul>
                        {/* Nav right END */}
                    </div>
                </nav>
                {/* Logo Nav END */}
            </header>
        </>
    )
}

export default NavBar