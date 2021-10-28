import React, { useContext, useState } from 'react'
import classes from './style.module.css'
import Alert from '../../components/Alert'
import TextBox from '../../components/TextBox'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import { AuthContext } from '../../utils/auth'
import { baseUrl, postApi } from '../../utils/api'
import { useHistory } from 'react-router'



function Login() {
    const context = useContext(AuthContext)
    const [user,setUser] = useState({
        userId:"123456789",password:"123456789"
    })
    const [error,setError] = useState("")
    const history = useHistory()

    const submitData = () =>{
        if(user.userId.length < 8 ){
            setError("Enter valid User Id")
            
            return
        }
        if(user.password.length < 8){
setError("Enter valid Password")
return
        }
        setError("")
        // console.log("data",user)
        const dataToSubmit = {
            user:{
                id:user.userId,
                password:user.password
            }
        }
       postApi({url:baseUrl +"login", dataToSubmit:dataToSubmit}).then(res =>{
           console.log(res)
           if(res.data.success && res.data.isUserAuthenticated){
     context.login(res.data.user, res.data.token)
       history.push("/")
           }
       }).catch(err => setError(err))
  
    }

    console.log("user",user)
    return (
        <div className={classes.container}>
            <div className={classes.section1}>
              <Heading />
            </div>
            <div className={classes.secondSection}>
            <div className={classes.section2}>
                {error && <Alert value={error} />}
            </div>
            <div className={classes.section3}>
                <TextBox type="text" label="User Id" value={user.userId} placeholder="Enter User Id" onChange={(e) => setUser({...user, userId:e.target.value})} minLength={8} maxLength={20} name="userid" />
            </div>

             <div className={classes.section3}>
                <TextBox type="password" label="Password" value={user.password} placeholder="Enter Password" onChange={(e) => setUser({...user, password:e.target.value})}  minLength={8} maxLength={20} name="password"  />
            </div>
            <div className={classes.section4}>
                <Button onClick={submitData}>Login</Button>
            </div>
            </div>
           
        </div>
    )
}

export default Login
