import React from 'react';
import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import SpecialistProfile from "../../../components/specialists/profile/SpecialistProfile.jsx";
import Achievements from "../../../components/specialists/profile/Achievements.jsx";
import AboutSpecialist from "../../../components/specialists/profile/AboutSpecialist.jsx";
import Sertificates from "../../../components/specialists/profile/Sertificates.jsx";
import Cases from "../../../components/specialists/profile/Cases.jsx";
import Customers from "../../../components/specialists/profile/Customers.jsx";
import Consultation from "../../../components/specialists/profile/Consultation.jsx";
import Prices from "../../../components/specialists/profile/Prices.jsx";
import UsuallyQuestions from "../../../components/main/UsuallyQuestions.jsx";
import Recommendations from "../../../components/specialists/profile/Recommendations.jsx";
import Publications from "../../../components/specialists/profile/Publications.jsx";
import Contacts from "../../../components/specialists/profile/Contacts.jsx";
import SpecialistLocation from "../../../components/specialists/profile/SpecialistLocation.jsx";
import {motion} from "framer-motion";

const Specialist = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
        >
            <Header/>
            <SpecialistProfile/>
            <Achievements/>
            <AboutSpecialist/>
            <Sertificates/>
            <Cases/>
            <Customers/>
            <Consultation/>
            <Prices/>
            <UsuallyQuestions specialist={true}/>
            <Recommendations/>
            <Publications/>
            <Contacts/>
            <SpecialistLocation/>
            <Footer/>
        </motion.div>
    );
};

export default Specialist;