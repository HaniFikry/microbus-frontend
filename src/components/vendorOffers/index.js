import React, {Component} from 'react';
import './style.css'
import {ProgressBar, Grid, Row, Col} from 'react-bootstrap'
import {Alert} from 'antd'



export default class VendorOffers extends Component {
  componentWillMount(){
    this.props.fetchVendorCurrentOffers()
  }
  onClose(){
    this.props.clearMessage()
  }
  render(){
    const {offers, message} = this.props;
    return (
      <div className="vendor_offer">
        <Grid>
          <Row>


            <div >
              {
              message ?
                <Alert message={message} type="success" showIcon   closable onClose={this.onClose.bind(this)}/>
              : ''
              }
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
            </div>

          </Row>
        </Grid>
    </div>
    )
  }
}
