import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Bannar from './Bannar';

const Roots = () => {

    const [timeline, setTimeline] = useState([]);

    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>

            <Outlet context={{ timeline, setTimeline }} />

            <Footer></Footer>
        </div>
    );
};

export default Roots;