import React from 'react';
import SectionIntro from "../../components/SectionIntro.jsx";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import OurMission from "../../components/about/OurMission.jsx";
import Offers from "../../components/about/Offers.jsx";
import Features from "../../components/main/Features.jsx";
import Industries from "../../components/about/Industries.jsx";
import {motion} from "framer-motion";

const AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
        >
            <Header/>
            <SectionIntro
                content={'About us'}
                src={'/img/about.png'}
            />
            <OurMission/>
            <Offers/>
            <Features/>
            <Industries/>
            <Footer/>
        </motion.div>
    );
};

export default AboutUs;