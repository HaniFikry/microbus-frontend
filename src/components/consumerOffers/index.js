import React, {Component} from 'react'
import {ProgressBar} from 'react-bootstrap'


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
            <div className='offer_card'>
              <h1> {offer.name}  </h1>
              <h2>{offer.status} </h2>
              <div className="progress"><ProgressBar active now={offer.progress} /></div>
              <p> {offer.description} </p>
              <img src={offer.thumbnail} alt="product" />
            </div>
        )
        }
      </div>
    )
  }
}
