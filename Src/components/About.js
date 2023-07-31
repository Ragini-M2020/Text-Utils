              import React, { useState } from 'react';

              export default function About() {


                 const [mystyle, setmystyle] = useState(
                {
                  color:'white',
                  backgroundColor: 'black'                      //camelcase is used

                })

                const [btntext,setbtntext]= useState("Enable dark mode")

                const togglestyle=()=>{

                 if( mystyle.color==='black'){
                  setmystyle(
                    {
                      color:'white',
                      backgroundColor:'black',
                      border:'2px soild white'

                    })
                  
                    setbtntext("Enable light mode")
                  }
                  
                    else {

                    setmystyle(
                      {
                        color:'black',
                        backgroundColor:'white'
  
                      })
                     setbtntext("Enable dark mode")
                    }
                  
                

                }
                return (

                  <div className='container mx-2' style={mystyle}> {/* my style is a object  */}
                    <h2 className='my-3'> About </h2>
                    <div className="row">
                <div className="col-sm-4 mb-3 mb-sm-0">
                  <div className="card"style={mystyle}>
                    <div className="card-body" style={mystyle}>
                      
                      <h5 className="card-title">About Us</h5>
                      <p className="card-text">Welcome to our web tool! This tool is designed to provide a simple
                          and efficient solution to help users . We understand the challenges
                          faced by users in their daily tasks, and we are committed to making
                          their lives easier.</p>
                      <a href="/" className="btn btn-success">Go</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body"style={mystyle}>
                      <h5 className="card-title">Our Vision</h5>
                      <p className="card-text">Our vision is to provide a user-friendly and efficient web tool that
                          empowers individuals and businesses to provide ease in manipulating
                          the texts. We strive to deliver high-quality services and cater to
                          our users' needs with continuous improvements and innovations.</p>
                      <a href="/" className="btn btn-success">Go somewhere</a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body"style={mystyle}>
                      <h5 className="card-title">Our Team</h5>
                      <p className="card-text"> We are a dedicated team of developers and designers with a passion
                              for creating valuable tools for our users. Our diverse backgrounds
              and expertise allow us to collaborate and deliver exceptional
              products. Together, we work tirelessly to ensure that our web tool
              remains cutting-edge and user-friendly.</p>
                      <a href="/" className="btn btn-success">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container ">
              <button onClick={ togglestyle} type="button" className="btn btn-primary" >{btntext}</button>
              </div>
                </div>
                )
              }
