import { genPageMetadata } from 'app/seo'
import { getReferrals } from 'lib/firebase/firestore'
import _ from 'lodash'
import { PageHeader } from '../components/ui/PageHeader'
import { ReferralCard } from '../components/cards/ReferralCard'

export const metadata = genPageMetadata({
  title: 'Referrals',
})
export const dynamic = 'force-dynamic'

async function loadReferrals() {
  return await getReferrals()
}

export default async function Page() {
  const results = await loadReferrals()
  const referrals = _(results)
    .groupBy('category')
    .map(function (items, category) {
      return {
        category: category,
        items: _.map(items, function (item) {
          return item
        }),
      }
    })
    .value()

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <PageHeader
          title="Referrals"
          description="Use my link or code and we each get a little sumthin' sumthin'..."
          className="border-b border-gray-200 dark:border-gray-700"
        />
        <div className="mt-5">
          {referrals.map((categoryGroup) => (
            <div key={categoryGroup.category} className="mb-8">
              <h2 className="mb-16 text-2xl font-semibold">{categoryGroup.category}</h2>
              <div className="grid-cols-2 space-y-10 gap-x-6 gap-y-15 md:grid md:space-y-0">
                {categoryGroup.items.map((referral) => (
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
          ))}
        </div>
      </div>
    </>
  )
}
