import React, { useEffect, useState } from 'react';
import '../Style/ContactManagerCss.css';
//Import ->component's
import Users from './SubComponents/Users';
import { NavLink } from "react-router-dom";
//Axios -> for get Data from -> Rest api
import { userApi } from './SubComponents/AxiosApi';
export default function Contact() {
    let [userData, setUserData] = useState();
    let [showUserData, setShowData] = useState();
    useEffect(() => {
        async function getUserData() {
            await userApi.get("/contact").then((resPonse) => {
                setUserData(resPonse.data)
                setShowData(true);
            })
        }
        getUserData();
    }, []);
    return (
        <>
            <div className="ContactManagerManiDiv">
                <h2>Contact Manager</h2>
                <div>
                    <h3>Contact List</h3>
                    <NavLink to="/addContact" className="heading_text_navigation_link">Add Contact</NavLink>
                </div>
                {showUserData ? userData.map((data, index) => {
                    return <Users data={data} key={data.id} id={data.id}/>
                }):<div>loading..</div>}
            </div>
        </>
    )
}