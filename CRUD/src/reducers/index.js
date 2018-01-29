import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {Employee_Reducer} from './Employee_Reducer'

const reducers = {
  // ... your other reducers here ...
  employee: Employee_Reducer,
  form: formReducer // <---- Mounted at 'form'
}
const rootReducer = combineReducers(reducers);

export default rootReducer;
