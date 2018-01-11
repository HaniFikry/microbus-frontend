import React, {Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import {  Image, Grid, Col, Row, Thumbnail, Carousel, Button } from 'react-bootstrap';

// import TopProducts from '../../containers/TopProductsContainer'


export default class Main extends Component {

	componentWillMount(){
	  this.props.fetchTopCurrentOffers();
	}
	render(){

	  const {topOffers} = this.props;

	  return(
	  	<div className="main">
		  		<h1>Microbus.. The Power of US!</h1>
		  	<div className="topOffers">
			  	<h2>Most Purchased Offers</h2>
		  					<Carousel>

		  					    	{
				    		topOffers.map((offer) =>
				    		{
				    			if (offer.status === 'progress'){
					    			return(
												<Carousel.Item>
							    						<Thumbnail  src={offer.thumbnail} height={500}>

								    						<h3>{offer.name}</h3>
								    						<Button bsStyle="primary"><Link to={`/offers/${offer.id}`}>Buy now</Link></Button>
								    						<p>Price: {offer.price}</p>
							    						</Thumbnail>
												</Carousel.Item>
					    			)
				    			}
				    		})
				  	  }
							</Carousel>
				  <Grid>
				  	<Row>{}</Row>
				  </Grid>
		    </div>
		</div>
	  )
	}

}

        //  {
        //   topOffers.map((offer) =>
        //   	{
	       //      if (offer.status === 'completed') {
	       //        return (
		      //         <div>
		      //         	<h1> hamadaa </h1>
		      //           <h3>{offer.name} </h3>
		      //           <Link to={`/offers/${offer.id}`} >Buy now</Link>
		      //           <p> {offer.price} </p>h
		      //         </div>
	       //        )
	       //      }
	       //    }

        // 	)
        // }
