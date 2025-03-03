import { collection, query, getDocs, where, orderBy } from 'firebase/firestore'
import { db } from './firebase'

export async function getCareerTimeline() {
  let q = query(collection(db, 'career-timeline'), orderBy('id', 'desc'))
  const results = await getDocs(q)
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      title: doc.title,
      url: doc.url,
      logo: doc.logo,
      start: doc.start,
      end: doc.end,
      org: doc.org,
      icon: doc.icon,
      event: doc.event,
      details: doc.details,
      ...doc.data(),
    }
  })
}

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
      tech: doc.tech,
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
