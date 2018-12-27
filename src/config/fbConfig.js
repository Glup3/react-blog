import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAiOo0CqIWSAqDQ89ec9wVC6SghC7dhTYM",
  authDomain: "react-blog-5862a.firebaseapp.com",
  databaseURL: "https://react-blog-5862a.firebaseio.com",
  projectId: "react-blog-5862a",
  storageBucket: "react-blog-5862a.appspot.com",
  messagingSenderId: "820739435472"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 