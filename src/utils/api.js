import axios from "axios"
import Cookies from 'universal-cookie';

// export const baseUrl = "http://localhost:8080/"
export const baseUrl = "https://newapp12121.herokuapp.com/"

export const postApi = ({url,dataToSubmit}) => new Promise((resolve,reject) =>{
      const cookies = new Cookies()
    const user = cookies.get("user")
    const token = !!user ? user.token  :null
       const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " +token,
      },
    };
    axios.post(url,dataToSubmit, config).then(res =>resolve(res)).catch(err => reject(err?.response?.data?.message || "Sorry unable to connect to system!"))
})

export const getApi = ({url}) => new Promise((resolve,reject) =>{
      const cookies = new Cookies()
    const user = cookies.get("user")
    const token = !!user ? user.token  :null
    console.log("token", user)
     const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " +token,
      },
    };

    axios.get(url, config).then(res =>resolve(res)).catch(err => reject(err?.response?.data?.message || "Sorry unable to connect to system!"))
})

