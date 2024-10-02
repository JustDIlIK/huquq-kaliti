import React from 'react';
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import Intro from "../../components/services/Intro.jsx";
import {motion} from "framer-motion";

const ServicesPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
        >
            <Header/>
            <Intro/>
            <Footer/>
        </motion.div>
    );
};

export default ServicesPage;