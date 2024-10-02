import React, {useEffect} from 'react';
import {DOMAIN} from "../../../assets/utils.js";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {loadComplaints} from "../../../store/complaints/complaintsActions.js";
import MainButton from "../../ui/MainButton.jsx";
import {Link} from "react-router-dom";
import ComplaintItem from "../ui/compaints/ComplaintItem.jsx";

const Complaints = () => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const complaintsList = useSelector(state => state.complaints.complaints);

    useEffect(() => {
        dispatch(loadComplaints({page: 1, limit: 1000}))
    }, []);

    return (
        <section className={'pt-[50px]'}>
            <div className="container !ml-0">
                <div className={'bg-white rounded-lg p-6 grid grid-cols-4 gap-6'}>
                    {
                        complaintsList && complaintsList.data && complaintsList.data.map((complaint, index) => (
                            <ComplaintItem
                                key={index}
                                complaint={complaint}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Complaints;