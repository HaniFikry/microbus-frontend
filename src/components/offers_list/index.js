import React, {Component} from 'react';
import { Grid , Col , Thumbnail , Button , Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './style.css'


export default class OffersList extends Component {

  componentWillMount(){
    this.props.fetchAllCurrentOffers();
  }
  render(){
    const {offers} = this.props;
    return (
      <div className='offerList'>
        <h2> All Offers </h2>
          <Grid>
          <Row>
        {
          offers.map((offer) =>
          {
            if (offer.status === 'progress') {
              return (
                <Col xs={12} md={4}>
                  <Thumbnail src={offer.thumbnail} alt="242x200">
                    <h3>{offer.name}</h3>
                    <Link to={`/offers/${offer.id}`} ><Button bsStyle="primary">Buy now</Button></Link>
                      <p> {offer.price} </p>
                  </Thumbnail>
                </Col>
              )
            }
          }

        )
        }
        </Row>
      </Grid>
      </div>
    )
  }
}
