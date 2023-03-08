import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "legensiablog.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL:
    "https://legensiablog-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "legensiablog.appspot.com",
  messagingSenderId: "705335726915",
  appId: "1:705335726915:web:8d747b2157fde2f1fd15f6",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function handleGoogleLogin() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function checkUserIsLoggedIn(callBack) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      getAdminUids().then((adminUid) => {
        if (adminUid === user.uid) callBack({ ...user, isAdmin: true });
        else callBack({ ...user, isAdmin: false });
      });
    } else {
      callBack();
    }
  });
}

export function logout() {
  auth.signOut(auth).catch(console.error);
}

async function getAdminUids() {
  return get(ref(getDatabase(), "admin")).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("데이터 없음");
    }
  });
}

export async function setBackgroundImg(url) {
  let array;
  return get(ref(getDatabase(), "backgroundImages"))
    .then((snapshot) => {
      if (snapshot.exists()) array = snapshot.val();
      else {
        array = [];
      }
    })
    .then(() => {
      array.push(url);
    })
    .then(() => {
      set(ref(getDatabase(), "backgroundImages"), array);
    });
}

export async function getBackgroundImageUrls() {
  return get(ref(getDatabase(), "backgroundImages/")).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return [];
    }
  });
}

export async function deleteImageUrl(urlToDelete) {
  let array;
  get(ref(getDatabase(), "backgroundImages"))
    .then((snapshot) => {
      if (snapshot.exists()) array = snapshot.val();
      else {
        array = [];
      }
    })
    .then(() => {
      array = array.filter((url) => url !== urlToDelete);
    })
    .then(() => {
      set(ref(getDatabase(), "backgroundImages"), array);
    });
}
