import {
  collection,
  query,
  doc,
  getDoc,
  getDocs,
  increment,
  where,
  orderBy,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from './firebase'

export async function getBlogStats(slug) {
  const docRef = doc(db, 'blog', slug)

  const defaultStats = {
    views: 0,
    applause: 0,
    bullseyes: 0,
    ideas: 0,
    loves: 0,
    shares: 0,
  }

  try {
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      return {
        views: data.views,
        applause: data.applause,
        bullseyes: data.bullseyes,
        ideas: data.ideas,
        loves: data.loves,
        shares: data.shares,
        ...data,
      }
    } else {
      console.log(`Creating new blog stats document for slug: ${slug}`)
      await setDoc(docRef, defaultStats)

      return defaultStats
    }
  } catch (error) {
    console.error('Error handling blog stats document:', error)
    return null
  }
}

export async function incrementBlogViews(slug) {
  try {
    const docRef = doc(db, 'blog', slug)

    await updateDoc(docRef, {
      views: increment(1),
    })

    return true
  } catch (error) {
    console.error('Error incrementing blog views:', error)
    throw error
  }
}

export async function updateBlogReaction(slug, key, value) {
  try {
    const docRef = doc(db, 'blog', slug)
    await updateDoc(docRef, {
      [key]: increment(value),
    })
    return true
  } catch (error) {
    console.error(`Error updating reaction ${key} for ${slug}:`, error)
    throw error
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
