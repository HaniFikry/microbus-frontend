import React, {Component} from 'react';
import { Grid , Col , Thumbnail , Button } from 'react-bootstrap';


export default class OffersList extends Component {

  componentWillMount(){
    this.props.fetchAllCurrentOffers();
  }
  render(){
    const {offers} = this.props;
    return (
      <div>
          <Grid>
        {
          offers.map((offer) =>
              <Col xs={6} md={4}>

              <Thumbnail src={offer.thumbnail} alt="242x200">
                <h3>{offer.name}</h3>
                <p>{offer.description}</p>
                <p>
                  <Button bsStyle="primary">Buy now</Button>&nbsp;
                  <p> {offer.price} </p>
                </p>
              </Thumbnail>
            </Col>

        )
        }
      </Grid>
      </div>
    )
  }
}
