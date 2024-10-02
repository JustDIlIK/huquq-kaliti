import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Intro from "../components/main/Intro.jsx";
import About from "../components/main/About.jsx";
import Features from "../components/main/Features.jsx";
import Constructor from "../components/main/Constructor.jsx";
import Questions from "../components/main/Questions.jsx";
import UsuallyQuestions from "../components/main/UsuallyQuestions.jsx";
import Services from "../components/main/Services.jsx";
import News from "../components/main/News.jsx";
import Specialists from "../components/main/Specialists.jsx";
import {motion} from "framer-motion";

const Main = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
        >
            <Header/>
            <Intro/>
            <About/>
            <Constructor/>
            <Specialists/>
            <Features/>
            <Questions/>
            <UsuallyQuestions/>
            <Services/>
            <News/>
            <Footer/>
        </motion.div>
    );
};

export default Main;