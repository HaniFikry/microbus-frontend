import {connect} from 'react-redux'
import {chargeMakmaksLoading, chargeMakmaks, chargeMakmaksSuccess, chargeMakmaksFailure} from '../actions/makmaks'
import Checkout from '../Checkout'



const mapDispatchToProps = function(dispatch){
  return {
    chargeBalance : function(amount){
      dispatch(chargeMakmaksLoading())
      dispatch(chargeMakmaks(amount)).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(chargeMakmaksSuccess(response))
        } else {
          dispatch(chargeMakmaksFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Checkout);
