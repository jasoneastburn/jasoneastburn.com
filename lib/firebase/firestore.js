import { collection, query, getDocs, where } from 'firebase/firestore'
import { db } from './firebase'

export async function getProjects() {
  let q = query(collection(db, 'projects'))
  q = query(q, where('active', '==', true))
  const results = await getDocs(q)
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      description: doc.description,
      active: doc.active,
      link: doc.link,
      image: doc.image,
      title: doc.title,
      ...doc.data(),
    }
  })
}

export async function getQuotes() {
  let q = query(collection(db, 'quotes'))
  const results = await getDocs(q)
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      author: doc.author,
      quote: doc.quote,
      ...doc.data(),
    }
  })
}

export async function getReferrals() {
  let q = query(collection(db, 'referrals'))
  q = query(q, where('active', '==', true))
  const results = await getDocs(q)
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      category: doc.category,
      image: doc.image,
      link: doc.link,
      name: doc.name,
      ...doc.data(),
    }
  })
}
