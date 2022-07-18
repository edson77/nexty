import React from "react";
import { Routes,Route } from 'react-router-dom';
import Register from "./views/auth/register";
import Login from "./views/auth/login";

const App = () => {
    var pathname = window.location.pathname
    return (
        <>
            {
                pathname === '/login' || pathname === '/register' ?
                    <Routes>
                        <Route exact path='/login' element={<Login />}></Route>
                        <Route exact path='/register' element={<Register />}></Route>
                    </Routes>
                    : 'bonjour la main page'
            }
        </>
    )
}

export default App