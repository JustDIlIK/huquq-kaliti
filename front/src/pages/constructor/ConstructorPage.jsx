import React from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Preview from "../../components/constructor/Preview.jsx";
import {motion} from "framer-motion";

const ConstructorPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
        >
            <Header/>
            <Preview/>
            <Footer/>
        </motion.div>
    );
};

export default ConstructorPage;