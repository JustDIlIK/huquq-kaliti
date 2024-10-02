import React, {useEffect} from 'react';
import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import Intro from "../../../components/services/service-page/Intro.jsx";
import ServiceSpecialists from "../../../components/services/service-page/ServiceSpecialists.jsx";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {loadServiceInfo, loadServices} from "../../../store/services/servicesActions.js";
import {useParams} from "react-router-dom";

const ServicePage = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const serviceInfo = useSelector((state) => state.services.serviceInfo);
    useEffect(() => {
        dispatch(loadServiceInfo({service_id: id}))
    }, []);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
        >
            <Header/>
            {
                serviceInfo && serviceInfo.id &&
                <>
                    <Intro
                        service={serviceInfo}
                    />
                    <ServiceSpecialists
                        service={serviceInfo}
                    />
                </>
            }
            <Footer/>
        </motion.div>
    );
};

export default ServicePage;