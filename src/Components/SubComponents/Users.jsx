import React from 'react';
import { userApi } from './AxiosApi';
import {  Link } from 'react-router-dom';

export default function Users(parseData) {
    let data = parseData.data;
    let id = parseData.id;
    // Delete -> contact Code
    let [hideContact, setHideContact] = React.useState(false);
    function deleteApiData(id) {
        userApi.delete(`/contact/${id}`).then(() => {
            setHideContact(true);
        }).catch(()=>{
            alert("something went wrong meaning ")
        })
    }
    const hideStyle = {
        display: `${hideContact ? "none" : ""}`
    }
    //Edit -> Contact code

    return (
        <div className="ContactManager_users" style={hideStyle}>
            <div className="ContactManger_left_side">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
                <div>
                    <h4>{data.userName}</h4>
                    <h4>{data.userEmail}</h4>
                </div>
            </div>
            <div className="ContactManger_right_side">
                <Link to={`/editContact?name=${data.userName}&email=${data.userEmail}&id=${data.id}`}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true" ></i>
                </Link>
                <i className="fa fa-trash-o" aria-hidden="true"
                    onClick={() => deleteApiData(id)}></i>
            </div>
        </div>
    )
}