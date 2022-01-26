import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhZfsYUSFUZagfYHZcpfaY1uO5ONgB7b8',
  authDomain: 'slavkavav-b1d4f.firebaseapp.com',
  projectId: 'slavkavav-b1d4f',
  storageBucket: 'slavkavav-b1d4f.appspot.com',
  messagingSenderId: '471378199669',
  appId: '1:471378199669:web:51076b110548b50e01a43c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
