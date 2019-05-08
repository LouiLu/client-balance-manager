import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// local Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBMQAqJ8Ej-2Ror22bWySvwe2KsUycv3Ds',
  authDomain: 'react-cms-panel.firebaseapp.com',
  databaseURL: 'https://react-cms-panel.firebaseio.com',
  projectId: 'react-cms-panel',
  storageBucket: 'react-cms-panel.appspot.com',
  messagingSenderId: '517801015851',
  appId: '1:517801015851:web:1e6bd28a19c8078c'
};

// react redux firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// init firebase instance
firebase.initializeApp(firebaseConfig);
// init firestore
// const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// add firebase to reducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

// create init state
const initialState = {};

// create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
