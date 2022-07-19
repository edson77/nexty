import React from "react";
import { Routes,Route } from 'react-router-dom';
import NavBar from "./components/header/navBar";
import HomePage from "./views/home/homePage";

const Routeur = () => {
    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route exact path='/' element={<HomePage />}></Route>
                </Routes>
            </main>
        </>
    )
}
export default Routeur