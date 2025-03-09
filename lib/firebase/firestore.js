import { collection, query, doc, getDoc, getDocs, where, orderBy } from 'firebase/firestore'
import { db } from './firebase'

export async function getBlogStats(slug) {
  try {
    const docRef = doc(db, 'blog', slug)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {
        views: docSnap.data().views,
        applause: docSnap.data().applause,
        bullseyes: docSnap.data().bullseyes,
        ideas: docSnap.data().ideas,
        loves: docSnap.data().loves,
        shares: docSnap.data().shares,
        ...docSnap.data(),
      }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching blog by document ID:', error)
    return null
  }
}

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
      type: doc.type,
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
      description: doc.description,
      ...doc.data(),
    }
  })
}
