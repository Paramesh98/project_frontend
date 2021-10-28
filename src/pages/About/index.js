import React, { useState } from 'react'
import classes from './style.module.css'
import Heading from '../../components/Heading'
import Menu from '../../components/Menu'
import MainContainer from '../../components/Background'
import Button from '../../components/Button'
import { getApi } from '../../utils/api'

function About() {
    const image = require("../../assert/images/dummy.jpg")
    const [about,setAbout] = useState({
        image:image,
        about:[
            "Eu eiusmod enim consectetur consequat incididunt ullamco eiusmod. Est deserunt laborum laboris ad cillum nulla veniam laborum reprehenderit incididunt quis fugiat eu. Excepteur",
            " ex commodo dolor tempor exercitation. Fugiat proident duis in est laboris nisi exercitation."
        ]
    })

    const getAbout = () =>{
        getApi("/about").then((res) => console.log("res", res)).catch(err => console.log("err", err))
    }
    return (
        // <MainContainer>
        //     <div style={{display:'flex',flexDirection:'row'}}>
        //         <div style={{marginRight:"3%", width:"27%"}}>
        //              <Heading style={{width:"100%"}} />
        //   <Menu />
        //         </div>
          <div className={classes.container}>
              <div className={classes.heading}>
                    <h3>About iJavaScript </h3>
                    <div className={classes.hr}></div>  
                </div>
                <div className={classes.content}>
                    <img src={about.image.default} className={classes.image} />
                    <div>
                        {about.about.length > 0 && about.about.map((item,i) =>{
                            return <p key={i}>{item}</p>
                        })}
                       <p></p>
                    </div>
                </div>
                <div className={classes.reusable}>
                    <h4>Reusable component</h4>

                   <div className={classes.reusableContainer}>
                       <div></div>
                       <div></div>
                   </div>
                </div>
              </div>
        // </div>
        // </MainContainer>
    )
}

export default About
