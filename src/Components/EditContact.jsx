import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
//Import Axios for -> update data
import { userApi } from './SubComponents/AxiosApi';
function EditContact() {
    //Get url query you can also use -> useParams hook for this situation
    let { search } = useLocation();
    let queryData = new URLSearchParams(search);
    let id = queryData.get("id");
    let email = queryData.get("email");
    let name = queryData.get("name");


    //Set input -> value
    let [userName, setName] = React.useState(name);
    let [userEmail, setEmail] = React.useState(email);


    //UpdateUserData -> using Axios
    let navigate = useNavigate();
    function upDateUserData() {
        userApi.put(`/contact/${id}`, {
            userName: userName,
            userEmail: userEmail
        }).then(() => {
            navigate("/")
        }).catch(()=>{
            alert("something went wrong meaning ")
        })

    }

    return (
        <>
            <div className="AddContact_style_main_div">
                <div className="AddContact_heading_text">
                    <h2>Edit contact</h2>
                    <NavLink to="/">Cancel</NavLink>
                </div>

                <div className="AddContact_user_data_field">
                    <form onSubmit={((e) => e.preventDefault())}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="name" id="name" name="name"
                            value={userName} onChange={(e) => { setName(e.target.value) }} />
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="xyz@gmail.com" id="email" name="email"
                            value={userEmail} onChange={(e) => setEmail(e.target.value)} />
                        <input type="submit" value="update" onClick={() => upDateUserData()} />
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditContact;