import React from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import SectionIntro from "../../components/SectionIntro.jsx";
import {motion} from "framer-motion";
import UsuallyQuestions from "../../components/main/UsuallyQuestions.jsx";

const UsuallyQuestionsPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
        >
            <Header/>
            <SectionIntro
                content={'Answers to your questions'}
                src={'/img/usually-questions.png'}
            />
            <UsuallyQuestions/>
            <Footer/>
        </motion.div>
    );
};

export default UsuallyQuestionsPage;