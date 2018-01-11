import React, {Component} from 'react';
import './style.css'
import {ProgressBar} from 'react-bootstrap'


export default class VendorOffers extends Component {
  componentWillMount(){
    this.props.fetchVendorCurrentOffers()
  }
  render(){
    const {offers} = this.props;
    return (
      <div >

        {
          offers.map((offer) =>
            <div className='clearfix offer_card'>
              <h1> {offer.name}  </h1>
              <h2>{offer.status} </h2>
              <div className="progress"><ProgressBar active now={offer.progress} /></div>
              <p> {offer.description} </p>
              <img src={offer.thumbnail} />
            </div>
        )
        }

      </div>
    )
  }
}
