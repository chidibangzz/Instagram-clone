import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// call seed file only once
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyALEqmfj9GkkwCDMxAR2o902mGy0p1fOBg',
  authDomain: 'instagram-ty.firebaseapp.com',
  projectId: 'instagram-ty',
  storageBucket: 'instagram-ty.appspot.com',
  messagingSenderId: '515653884854',
  appId: '1:515653884854:web:91551660c59d1a3e453f17'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I call the seed file only once, once imported in firebase then comment out below line
// seedDatabase(firebase);

export { firebase, FieldValue };
