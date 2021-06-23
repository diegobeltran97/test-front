import React, { Component } from 'react'
import Card from './Card';


const boxHeight = {
    height: '200px',
    backgroundColor: "#f1edc0",
    width: '100%'
}
const boxGray = {
    height: boxHeight.height,
    width: '100%',
    backgroundColor: "#9ea3a7",
    margin: '1px 1px'
}

const styleCard = {
    border: 'none',
    backgroundColor: "#f1edc0",
    height: '100%'
}


export default class Discover extends Component {
    render() {
        return (
            <div className="mt-5">
                <div class="row">
                    <div className="col"  style={boxHeight}>
                      <Card  styleCard={styleCard} titleCard={"Discover your Style"}  subTitle={"explore the world"} cardTitleStyle={"h4"}  />
                    </div>
                    <div className="col" style={boxGray}>
                    
                    </div>
                    <div className="col" style={boxGray}>
                   
                    </div>
                    <div className="col" style={boxGray}>
                    
                    </div>
                </div>

                <div class="row">
                    <div className="col" style={boxGray} >
                      
                    </div>
                    <div className="col" style={boxGray}>
                   
                    </div>
                    <div className="col" style={boxGray}>
                   
                    </div>
                    <div className="col" style={boxGray}>
                   
                    </div>
                </div>
            </div>
        )
    }
}
