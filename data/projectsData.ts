interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GitHub README Profile',
    description: `Embarking on a journey to personalize my GitHub profile, I integrated WakaTime's coding activity metrics seamlessly into my GitHub profile, allowing visitors to gain insights into my coding habits and productivity. Through the automation prowess of GitHub Actions, I ensured that my coding stats are consistently updated, reflecting my latest achievements and endeavors.`,
    imgSrc: '/assets/projects/github-profile.png',
    href: 'https://www.github.com/jasoneastburn',
  },
  {
    title: 'GCX Mobile App',
    description: `GCX is an annual gaming convention and charity event held in Florida. It originated as a small gathering of Destiny gamers and has since evolved into a massive event celebrating various gaming communities. GCX typically features live streams, meet-and-greets with popular content creators, gaming tournaments, panels, and merchandise sales. One of its primary goals is to raise funds for charity, with proceeds going towards organizations such as St. Jude Children's Research Hospital`,
    imgSrc: '/assets/projects/gcx.png',
    href: 'https://www.gcxevent.com',
  },
  {
    title: 'GuardianCon',
    description: `GuardianCon is Florida's premier gaming event that seeks to bring broadcasters, artists, editors, and other industry personnel together for two days per year to celebrate all the good gaming has, can, and will do. It's a chance for folks to create, share memories, and positivity throughout the community.`,
    imgSrc: '/assets/projects/guardiancon.png',
    href: 'https://www.gcxevent.com',
  },
  {
    title: 'Personal Website',
    description: `With React's component-based architecture, Next.js's powerful server-side rendering capabilities, and Tailwind CSS's utility-first approach to styling, I've crafted a sleek and efficient platform to showcase my projects, thoughts, and experiences. My website stands as a testament to my journey of continuous learning and growth in the ever-evolving world of technology.`,
    imgSrc: '/assets/projects/jasoneastburn.jpg',
    href: 'https://www.jasoneastburn.com',
  },
]

export default projectsData
