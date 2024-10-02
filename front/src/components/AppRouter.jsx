import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {protectedRoutes, routes} from "../router/router.js";
import {MAIN_ROUTE} from "../assets/utils.js";
import {useDispatch, useSelector} from "react-redux";
import {loadCurrentUser} from "../store/user/userActions.js";
import Main from "../pages/Main.jsx";

const AppRouter = () => {
    const dispatch = useDispatch();
    const { currentUser, userLoading } = useSelector((state) => ({
        currentUser: state.user.currentUser,
        userLoading: state.user.userLoading
    }));

    useEffect(() => {
        dispatch(loadCurrentUser());
    }, [dispatch]);

    return (
        <Routes>
            {
                routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component/>}
                    >
                        {
                            route.children &&
                            route.children.map((child, childIndex) => (
                                <Route
                                    key={childIndex+'child'}
                                    path={child.path}
                                    element={<child.component/>}
                                />
                            ))
                        }
                    </Route>
                ))
            }
            {
                currentUser &&
                    protectedRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        >
                            {
                                route.children &&
                                route.children.map((child, childIndex) => (
                                    <Route
                                        key={childIndex + 'child'}
                                        path={child.path}
                                        element={<child.component />}
                                    />
                                ))
                            }
                        </Route>
                    ))
            }
            <Route path={'*'} element={<Main/>}/>
        </Routes>
    );
};

export default AppRouter;