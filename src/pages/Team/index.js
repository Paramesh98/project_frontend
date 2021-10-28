import React, { useEffect, useState } from 'react'
import classes from './style.module.css'
import Heading from '../../components/Heading'
import Menu from '../../components/Menu'
import MainContainer from '../../components/Background'
import Button from '../../components/Button'
import { baseUrl, getApi } from '../../utils/api'
import axios from 'axios'

const ListView = ({image,name}) =>{
    //   const image = require("../../assert/images/dummy.jpg")
    return    <div className={classes.listItem}>
                             <div> <img src={image} alt={name} /></div>
                              <p>{name}</p>
                        </div>
}

function Team() {
    const [team,setTeam] = useState([])

        const getTeam = () =>{
        axios.get("https://api.github.com/users").then((res) => {
            let data = res.data.splice(0,10)
            setTeam(data)
        }).catch(err => console.log("err",err))
    }

    useEffect(() =>{
        getTeam()
    },[])

    // console.log("team",team)
    const image = require("../../assert/images/dummy.jpg")
    return (
        // <MainContainer>
        //     <div style={{display:'flex',flexDirection:'row'}}>
        //         <div style={{marginRight:"3%", width:"27%"}}>
        //              <Heading style={{width:"100%"}} />
        //   <Menu />
        //         </div>
          <div className={classes.container}>
              <div className={classes.heading}>
                    <h3>Meet The Team </h3>
                    <div className={classes.hr}></div>  
                </div>
                <div className={classes.content}>
                    <div className={classes.lists}>
                        {team?.length > 0 && team.map((item,i) =>{
                            return <ListView key={i} image={item.avatar_url} name={item.login} />
                        })}
                        
                       
                    </div>
                    <div className={classes.imageContainer}>
                        <img src={image.default} className={classes.image} />
                    </div>
                </div>
               
              </div>
        // </div>
        // </MainContainer>
    )
}

export default Team
