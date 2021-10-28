import React ,{useContext, useEffect, useState} from 'react'
import classes from './style.module.css'
import Heading from '../../components/Heading'
import Menu from '../../components/Menu'
import MainContainer from '../../components/Background'
import Button from '../../components/Button'
import { baseUrl, getApi, postApi } from '../../utils/api'
import { AuthContext } from '../../utils/auth'

function Dashboard() {
    const [user,setUser] = useState(null)
    const [bindign,setBinding] = useState("")
    const context = useContext(AuthContext)

    const image = require("../../assert/images/dummy.jpg")

    const getUser = () =>{
        getApi({url:baseUrl+"user"}).then(res =>{
            if(res.data.success){
                setUser(res.data.user)
            }
        }).catch(err => console.log("Err",err))
    }

    useEffect(() =>{
        // console.log("user",context.user)
       setUser(context.user)
    getUser()
    },[context])

    if(!user){
        return <h4>Loading ...</h4>
    }
    return (
        // <MainContainer>
        //     <div style={{display:'flex',flexDirection:'row'}}>
        //         <div style={{marginRight:"3%", width:"27%"}}>
        //              <Heading style={{width:"100%"}} />
        //   <Menu />
        //         </div>
            <div className={classes.container}>
            
         
          <div className={classes.content}>
            <div className={classes.imageContainer}>
                <img src={image.default} className={classes.image} />
                <div className={classes.name}>
                        <h5>Welcome {user.name}</h5>
                        <p>Last login : {user.last_login}</p>
                </div>
            </div>
            <div className={classes.hr}></div>
            <div className={classes.mainContent}>
                <h3>Account Balance : ${user.balance}</h3>
                <table>
                  <thead>
                        <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                      {user.transaction.length > 0  && user.transaction.map((item, i) =>{
                          return   <tr key={item._id}>
                        <td>
                       {item.date}
                    </td>
                    <td>
                        {item.desc}
                    </td>
                    <td>{item.amount}</td>
                   </tr>
                      })}


                  </tbody>
                 
                  
                </table>
                <div className={classes.hr2}></div>
                <div className={classes.subscribeSection}>
                    <div className={classes.subscribe}>
                        <h4>Subscribe to alerts</h4>
                        <div className={classes.checkbox}>
                             <input type="checkbox" name="sms"/>
                            <label htmlFor="sms">SMS Alerts</label>
                           
                        </div>
                         <div  className={classes.checkbox}>
                             <input type="checkbox" name="marketing"/>
                            <label htmlFor="marketing">Marketing Newsletter</label>
                           
                        </div>
                         <div className={classes.checkbox}>
                             <input type="checkbox" name="flyers"/>
                            <label htmlFor="flyers">Flyers</label>
                           
                        </div>
                       
                            <Button color="blue" style={{marginTop:"20px"}}>Submit</Button>
                       
                        </div>
                        <div className={classes.binding}>
                            <label htmlFor="data">Two way data binding</label>
                            <input type="text" value={bindign} onChange={(e) => setBinding(e.target.value)} name="data" placeholder="value for two way data binding"></input>
                        </div>
                </div>
                </div>
        </div>
        </div>
        // </div>
        // </MainContainer>
    )
}

export default Dashboard
