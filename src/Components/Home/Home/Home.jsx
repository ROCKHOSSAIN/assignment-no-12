import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Featured from '../Featured/Featured';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;