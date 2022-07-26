import React from "react";
import { Routes,Route } from 'react-router-dom';
import NavBar from "./components/header/navBar";
import HomePage from "./views/home/homePage";
import OwnerProfile from "./views/profile/owner/profile";

const Routeur = () => {
    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route exact path='/' element={<HomePage />}></Route>
                    <Route exact path='/profile' element={<OwnerProfile />}></Route>
                </Routes>
            </main>
        </>
    )
}
export default Routeur