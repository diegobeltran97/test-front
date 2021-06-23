import React, { Component } from 'react';
import furniture from '../static/furniture.jpg'
import Card from './Card';

const mainNav = {
  padding: "0"
}
const headerRight = {
    backgroundColor: "#f3d6d8",
}   

const image = {
    backgroundImage: `url(${furniture})`,
    width: "100%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: "550px"
}

const notice = {
    width: "100%",
    top: "15rem"
}

const noticeStyle = {
    backgroundColor: "#f1edc0",
    height: "300"
}


export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar  navbar-expand-lg navbar-light" style={mainNav}>
                    <div className="container-fluid p-0">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row" id="navbarText">
                        <div className="col-md-7 ">
                      
                            <ul className="navbar-nav me-auto mt-2 mb-3 justify-content-center">
                                <li class="nav-item">
                                    <span class="navbar-brand mb-0 h1">Navbar</span>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5" style={headerRight}>
                            <ul className="navbar-nav me-auto mt-2  mb-3">
                                <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    </nav>
                   <div className="row">
                       <div className="col-md-7 col-sm-12" style={image}>
                          
                       </div>
                       <div className="col-md-5  d-md-block" style={headerRight}>
                         
                       </div>

                       <div className="row position-absolute d-flex align-items-center justify-content-center " style={notice}>

                             <Card titleCard={"Retro old is new"} 
                                   subTitle={"Lorem impusdnsdflk"} 
                                   styleColumn={"col-md-5"} 
                                   styleCard={noticeStyle}
                                   cardTitleStyle={"display-4"}
                                   linkText={"Discover the trend"}
                                   />
                             
                            

                         </div>
                   </div>
                </header>
            </div>
        )
    }
}
