import React, { Component } from 'react'
import map from '../static/maps2.jpg'

const image = {

    width: "100%",
    height: "300px"
 
}


export default class maps extends Component {
    render() {
        return (
            <div>
                <img src={map} alt="mapa" style={image}/>
            </div>
        )
    }
}
