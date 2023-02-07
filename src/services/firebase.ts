import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from '@config/firebase.config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
