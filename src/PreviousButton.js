import React, { Component } from 'react';



const Prev =(props)=> {
    
const stylebutton ={
    border:1,
    width:"300px",
    height:"30px",
    backgroundColor:"rgb(0,35,102)",
    font: 'arial',
    padding: '10px',
    fontColor:"rgb(255,255,255)",
    textalign:"center"
    }
    if(props.active==true)
    stylebutton.backgroundColor="rgb(200,200,200)";
    return (
      <button style={stylebutton} onClick={props.toggle} disabled={props.active}><b><font color="white">Previous</font></b></button>
    );
  }
  
 export default Prev;