import React from 'react'
import image from '../static/imagecap.svg'
import { ArrowRight } from 'react-bootstrap-icons';
import '../static/styles.css';

const data = [ { id: 1, title: "John Doe", link: 'text' },
{ id: 2, title: "Victor Wayne" , link: 'text' },
{ id: 3, title: "Jane Doe" , link: 'text'},]
const cardBody = {
    backgroundColor: "#cdf1f1"
}



export default function Learn() {
    return (
        <div>
       
            <div className="row mt-5">
                {data.map((card) => (
                    <div className="col-sm-12 col-md-4 marginCard" key={card.id}>
                    <div class="card" >
                    <img  src={image} class="card-img-top"  alt="Card image cap"/>
                        <div class="card-body" style={cardBody}>
                            <h5 class="card-title">{card.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            <div className="row justify-content-end">
                                
                            
                                <span className="mr-3">{card.link}</span>
                                <div className="float-right">
                                    <ArrowRight />
                                </div>    
                                
                             </div>
                             
                           
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="row d-flex align-items-center justify-content-center mt-5">
                <h1 class="display-4 text-center">Found in over xxx <br></br> Stores</h1>
            </div>
            
        </div>
    )
}
