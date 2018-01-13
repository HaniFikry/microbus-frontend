import React, {Component} from 'react'
import {ProgressBar} from 'react-bootstrap'
import './style.css'



export default class ConsumerOffers extends Component {
  componentWillMount(){
    this.props.fetchConsumerBoughtOffers();
  }

  render(){
    const {boughtOffers} = this.props;
    return (
      <div>
        {
          boughtOffers.map((offer) =>
            <div className='clearfix offer_card'>
              <img src={offer.thumbnail} />
              <h1> {offer.name}  </h1>
              <h2>{offer.status} </h2>
              <div className="progress"><ProgressBar active now={offer.progress} /></div>
              <p> {offer.description} </p>
            </div>
        )
        }
      </div>
    )
  }
}
