import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const NEXT_PUBLIC_FIREBASE_PROJECT_ID = "bottega-final-projec";
const NEXT_PUBLIC_FIREBASE_API_KEY = "AIzaSyDknSPFxHCV44fK1EyHT5PLzc_8vMDwoH4";







const config = {
    apikey: NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${NEXT_PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
}

initFirebase();
export { firebase };