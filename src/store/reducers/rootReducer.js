import authReducer from './authReducer';
import blogReducer from './blogReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  firestore: firestoreReducer
});

export default rootReducer