import React, {Component} from 'react';

export default class OfferForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      description: '',
      price: '',
      'target-count': '',
      duration: ''
    }
  }

  componentWillMount(){
    this.props.fetchSelectedProduct(this.props.match.params.id)
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name] : event.target.value})
  }

  render(){
    const { singleProduct } = this.props;
    return (
      <div>
        <h3> OFFER FOR ITEM: {singleProduct.product_name} </h3>
        {this.props.match.params.id}
        <div>
        <form onSubmit={(event) => {event.preventDefault(); console.log(this.state)}}>

            <div>
             <label>
               <p> Name: </p>
               <input type="text"  name='name' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
            </div>
             <div>
             <label>
               <p> Description: </p>
               <textarea type="text"  name='description' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
           </div>
             <div>
             <label>
               <p> price </p>
               <input type="number"  name='price' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
           </div>
             <div>
             <label>
               <p> Target-Consumers: </p>
               <input type="number"  name='target-count' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
           </div>
             <div>
             <label>
               <p> Valid until </p>
               <input type="date" name='duration' onChange={this.handleChange.bind(this)}/>
             </label>
           </div>
           <input type="submit" value="Register"  />
          </form>
        </div>
      </div>
    )
  }
}
