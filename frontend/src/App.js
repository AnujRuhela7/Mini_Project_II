import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import Dashboard from "./Pages/Dashboard";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ProfilePage from "./Pages/ProfilePage";
import WishlistPage from "./Pages/WishlistPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import {ToastContainer} from "react-toastify";


const App = () => {
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element= <HomePage />
                    />
                    <Route
                        exact
                        path='/signupu'
                        element=<SignupPage retailer={false}/>
                    />
                    <Route
                        exact
                        path='/signupr'
                        element=<SignupPage retailer={true}/>
                    />
                    <Route
                        exact
                        path='/dashboard'
                        element= <Dashboard />
                    />
                    <Route
                        exact
                        path='/aboutus'
                        element= <AboutUs />
                    />
                    <Route
                        exact
                        path='/contactus'
                        element= <ContactUs />
                    />
                    <Route
                        exact
                        path='/profile/:id'
                        element= <ProfilePage />
                    />
                    <Route
                        exact
                        path='/wishlist/:id'
                        element= <WishlistPage />
                    />
                    <Route
                        exact
                        path='/privacypolicy'
                        element= <PrivacyPolicy/>
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;