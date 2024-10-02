import React from 'react';
import {Outlet} from "react-router-dom";
import AdminHeader from "../../components/admin/ui/AdminHeader.jsx";
import Navbar from "../../components/admin/ui/Navbar.jsx";
import {motion} from "framer-motion";

const Admin = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
            className={'flex min-h-[100vh] h-full'}
        >
            <Navbar/>
            <div className={'relative w-full h-full min-h-[100vh] pt-[100px] pl-[40px] bg-romance'}>
                <AdminHeader/>
                <Outlet/>
            </div>
        </motion.div>
    );
};

export default Admin;