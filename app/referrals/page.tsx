import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'
import { getReferrals } from 'lib/firebase/firestore'
import _ from 'lodash'

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
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            Referrals
          </h1>
          <p className="text-lg leading-7 text-gray-500 italic dark:text-gray-400">
            Use my link or code and we each get a little sumthin&apos; sumthin&apos;...
          </p>
        </div>
        <div className="container py-12">
          <div className="relative overflow-x-auto">
            {referrals.map((d) => (
              <table
                className="mb-12 w-full text-left text-gray-500 rtl:text-right dark:text-gray-400"
                key={d.category}
              >
                <caption className="bg-gray-300 p-5 text-left text-2xl font-bold text-gray-900 rtl:text-right dark:bg-gray-800 dark:text-white">
                  {d.category}
                  {d.category === 'Credit Cards' ? (
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Sign up for a credit card and get a bonus with some extra points or cashback!
                    </p>
                  ) : (
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Organize your personal finances with these tools!
                    </p>
                  )}
                </caption>
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                  {d &&
                    d.items.map((i) => (
                      <tr
                        key={i.name}
                        className="odd:bg-gray-100 even:bg-gray-200 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                      >
                        <td className="max-w-20 columns-auto px-6 py-4">
                          {i.image && <Image src={i.image} alt="avatar" width={150} height={25} />}
                        </td>
                        <td className="font-large text-l columns-3xs px-6 py-4 text-left whitespace-nowrap text-gray-900 dark:text-white">
                          <a
                            href={i.link}
                            target="_blank"
                            className="font-large text-l hover:text-primary-500 dark:hover:text-primary-400 hidden text-left text-gray-900 sm:block dark:text-gray-100"
                          >
                            {i.name}
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
