import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap'
import './style.css'



export default class OrderSuccess extends Component {
  componentWillMount(){
    this.props.fetchSingleOffer(this.props.match.params.id)
  }
  render(){
    const {offerDetails} = this.props;
    return (
    <div>
      <img src="https://www.shareicon.net/data/2016/08/20/817720_check_395x512.png" alt="succes" width='200px' height= '250px' />
      <h1> Offer Purchased Successfully </h1>
      <p> Congratulations! you have Successfully Purchased {offerDetails.product_name} </p>
      <div className="progress-details"><ProgressBar active now={offerDetails.progress} label={`${offerDetails.buying_consumers} of ${offerDetails.target_count} users bought this offer`}/></div>
    </div>
  )
  }
}
