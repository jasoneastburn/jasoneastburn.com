import { ReferralCard } from '@/app/components/cards/ReferralCard'
import { PageHeader } from '@/app/components/ui/PageHeader'
import type { Referrals } from '@/app/models/referrals'
import { genPageMetadata } from '@/app/seo'
import { getReferrals } from '@/lib/firebase/firestore'
import { Suspense } from 'react'

export const metadata = genPageMetadata({
  title: 'Referrals',
})

async function loadReferrals() {
  try {
    const response = await getReferrals()
    return response
  } catch (error) {
    console.error('Error loading referrals:', error)
    return []
  }
}

async function ReferralCategory({ category, items }: { category: string; items: Referrals[] }) {
  return (
    <div key={category} className="mb-12 md:mb-16">
      <h2 className="mb-8 text-2xl font-semibold">{category}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-y-16">
        {items.map((referral) => (
          <ReferralCard
            key={referral.id}
            description={referral.description}
            image={referral.image}
            link={referral.link}
            name={referral.name}
          />
        ))}
      </div>
    </div>
  )
}

export default async function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <PageHeader
          title="Referrals"
          description="Use my link or code and we each get a little sumthin' sumthin'..."
          className="border-b border-gray-200 dark:border-gray-700"
        />
        <div className="mt-6 md:mt-8">
          <Suspense>
            <ReferralContent />
          </Suspense>
        </div>
      </div>
    </>
  )
}

async function ReferralContent() {
  const results = await loadReferrals()

  if (results.length === 0) {
    return <p>No referrals available.</p>
  }

  const referrals = results.reduce((acc, item) => {
    const category = item.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {})

  const referralArray = Object.entries(referrals).map(([category, items]) => ({
    category,
    items,
  }))

  return (
    <>
      {referralArray.map(({ category, items }) => (
        <ReferralCategory key={category} category={category} items={items as Referrals[]} />
      ))}
    </>
  )
}
