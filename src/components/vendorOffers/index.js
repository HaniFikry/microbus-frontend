import React, {Component} from 'react';
import './style.css'
import {ProgressBar, Grid, Row, Col} from 'react-bootstrap'


export default class VendorOffers extends Component {
  componentWillMount(){
    this.props.fetchVendorCurrentOffers()
  }
  render(){
    const {offers} = this.props;
    return (
      <div className="vendor_offer">
        <Grid>
          <Row>

        {
          offers.map((offer) =>
            <div className='clearfix offer_card'>
              <img src={offer.thumbnail} />
              <h1> {offer.name}  </h1>
              <h2>Status: {offer.status} </h2>
              <div className="progress"><ProgressBar active now={offer.progress} /></div>
              <p> {offer.description} </p>
            </div>
        )
        }
          </Row>
        </Grid>
      </div>
    )
  }
}
