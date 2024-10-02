import React from 'react';
import Breadcrumbs from "../ui/Breadcrumbs.jsx";
import {MAIN_ROUTE} from "../../assets/utils.js";

const Dashboard = () => {
    const links = [
        { label: 'Main', path: MAIN_ROUTE },
        { label: 'Dashboard '}
    ]
    return (
        <section>
            <div className="container !ml-0">
                <Breadcrumbs
                    links={links}
                />
            </div>
        </section>
    );
};

export default Dashboard;