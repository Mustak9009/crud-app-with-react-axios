import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//Import .css for style page
import "../../Style/AddContactStyle.css";
//Import axios -> for add data in (Api)
import { userApi } from './AxiosApi';

function AddContact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    let [filterData, setFilterData] = useState();
    React.useEffect(() => {
        async function getUserData() {
            await userApi.get("/contact").then((resPonse) => {
                let ResData = resPonse.data;
                let Data = ResData.filter((data) => {
                    return (data.userEmail === email)
                })
                setFilterData(Data.length);
            })
        }
        getUserData();
    }, [email]);

    let navigate = useNavigate();
    function onHandelSubmit(e) {
        e.preventDefault();
        //If data is already store in => Api
        if (filterData === 1) {
            alert("user email already exist");
        } else {
            if (name && email) {
                userApi.post("/contact", {
                    userName: name,
                    userEmail: email
                }).then(() => {
                    //useNavigate -> "react-router-dom" for -> navigation "url"
                    navigate('/');
                }).catch(() => {
                    alert("something went wrong");
                })
            } else {
                alert("Please fill input field")
            }
        }
    }

    return (
        <>
            <div className="AddContact_style_main_div">
                <div className="AddContact_heading_text">
                    <h2>Add contact</h2>
                    <NavLink to="/">Cancel</NavLink>
                </div>

                <div className="AddContact_user_data_field">
                    <form onSubmit={onHandelSubmit} >
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="name" id="name" name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="xyz@gmail.com" id="email" name="email"
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddContact;