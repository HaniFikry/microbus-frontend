import React, {Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import {  Image, Grid, Col, Row, Thumbnail, Carousel, Button, Jumbotron } from 'react-bootstrap';
import LatestOffers from '../../containers/latestOffersContainer'


// import TopProducts from '../../containers/TopProductsContainer'


export default class Main extends Component {

	componentWillMount(){
	  this.props.fetchTopCurrentOffers();
	}
	render(){

	  const {topOffers} = this.props;

	  return(
	  	<div className="main">
			<Jumbotron>
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for calling
					extra attention to featured content or information.
				</p>
				<p>
					<Button bsStyle="primary">Learn more</Button>
				</p>
			</Jumbotron>		  	
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
		    <LatestOffers />
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
