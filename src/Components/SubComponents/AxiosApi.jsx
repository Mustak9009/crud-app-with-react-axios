import Axios from 'axios';
let userApi = Axios.create({
    baseURL: "http://localhost:3005"
});
export {userApi};