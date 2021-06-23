import React, { Component } from 'react';
import { Facebook , Instagram , Linkedin, linkedin} from 'react-bootstrap-icons';


const footer = {
    height: "200px",
    width: "100%",
    margin: 0,
   
}

const container1 = {
    backgroundColor: "#4e5253",
    padding: "2rem 6rem"
}

const container2 = {
    backgroundColor: "#434748",
    padding: "2rem 6rem"
}

export default class Footer extends Component {
    render() {
        return (
            <div >
                <div className="row" style={footer}>
                   
                    <div className="col-sm-12 col-md-7" style={container1}>
                        <div className="row">
                        
                        <nav class="navbar navbar-expand-md navbar-light ">
                               
                                <div >
                                    <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active ">
                                        <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-light" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-light" href="#">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-light" href="#">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-light" href="#">Pricing</a>
                                    </li>
                                    </ul>
                                   
                                </div>
                                </nav>
                        </div>
                        <div className="row">
                        <span class="navbar-text col-6 text-light">
                                    tel (645) 532534
                                    </span>
                                    <span class="navbar-text col-6 text-light">
                                    Av republica Brasil
                                    </span>
                        </div>
                       
                    </div>
                    <div className="col-sm-12 col-md-5" style={container2}>
                      <div className="row" >
                          <div className="col-4" ><Facebook/></div>
                          <div className="col-4" > <Instagram/></div>
                          <div className="col-4" > <Linkedin/> </div>
                          
                         
                      </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
