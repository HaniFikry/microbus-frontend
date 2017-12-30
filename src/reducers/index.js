import {combineReducers} from 'redux';
import microbus from './microbus';
import vendor from './vendor';

const rootReducer = combineReducers({
    microbus, vendor
})


export default rootReducer;
