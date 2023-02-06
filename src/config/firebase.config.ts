import { firebaseVars } from './firebase.vars';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseVars);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
