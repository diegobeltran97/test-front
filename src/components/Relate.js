import React from 'react'
import furniture from '../static/furniture.jpg'
import Card from './Card'

const image = {
    width: "100%",
    backgroundRepeat: 'no-repeat',
    height: "300px"
}
const styleCard = {
    backgroundColor: "#d3f1cd",
    padding: "0",
    margin: "0",
    height: "100%",
    overflow: 'hidden'
    
}
const styleCustomColumn = {
    marginLeft: "-1.8rem",
    maxHeight: "300px"
}

export default function Relate() {
    return (
        <div className="row mt-5">
            <div className="col-sm-12 col-md-9" >
                <img src={furniture} style={image} alt="Logo" />
            </div>
         
            <Card  titleCard={"Shopping anything and everything"} 
                   subTitle={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} 
                    styleColumn={"col-sm-12 col-md-3"} 
                    styleCard={styleCard} 
                    styleCustomColumn={styleCustomColumn}/>
        
            
        </div>
    )
}
