import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  addDoc,
} from "firebase/firestore";
import firebaseApp from "./firebase";

import { db } from "./firebase";


export async function getProjects() {
  let q = query(collection(db, "projects"));
  q = query(q, where("active", "==", true));
  const results = await getDocs(q);
  return results.docs.map(doc => {
    return {
      id: doc.id,
      description: doc.description,
      active: doc.active,
      link: doc.link,
      image: doc.image,
      title: doc.title,
      ...doc.data()
    };
  });
}

export async function getQuotes() {
  let q = query(collection(db, "quotes"));
  const results = await getDocs(q);
  return results.docs.map(doc => {
    return {
      id: doc.id,
      author: doc.author,
      quote: doc.quote,
      ...doc.data()
    };
  });
}