import React, { Component } from 'react'
import { ArrowRight } from 'react-bootstrap-icons';

export default class Card extends Component {
    render() {
        const  { withCard, color, titleCard, subTitle,  cardTitleStyle, imageUrl, styleColumn, styleCard, styleCustomColumn, linkText } = this.props;
   
        return (
            <div  className={styleColumn} style={styleCustomColumn}>
                <div className="card" style={styleCard}>
                    <div class="card-body">
                        <h5  className={cardTitleStyle}>{titleCard}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">test</h6>
                        <p class="card-text">{ subTitle}</p>
                    
                        <span href="#" class="card-link float-right">{linkText}<ArrowRight /></span>
                    </div>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    styleCard: {
        backgroundColor: "#f1edc0"
    }
  }
