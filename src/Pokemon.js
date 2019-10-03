import React, { Component } from 'react';


const stylepokemontab ={
    border:0,
    width:"300px",
    height:"300px",
    backgroundColor:"rgb(250, 250, 250)",
    font: 'arial',
    padding: '10px',
    }
const pokeman= (props) => {
    return (
        <div>
      
        <button  style={stylepokemontab}>
           <img src={props.image}/><br/>
          <b> <i> <font color="rgb(0,35,102)">Pokemon Id: {props.id}</font></i></b><br/>
          <b> <i><font color="rgb(0,35,102)"> Name: { props.pokename}</font></i></b><br/>
          </button>
        </div>
    )

}

export default pokeman;