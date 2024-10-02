import React from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Intro from "../../components/patterns/Intro.jsx";
import {motion} from "framer-motion";

const Patterns = () => {
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

export default Patterns;