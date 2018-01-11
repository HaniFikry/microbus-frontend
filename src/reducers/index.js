import {combineReducers} from 'redux';
import microbus from './microbus';
import vendor from './vendor';
import offer from './offer'

const rootReducer = combineReducers({
    microbus, vendor, offer
})


export default rootReducer;
