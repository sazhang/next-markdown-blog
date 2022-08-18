import Layout from "../components/layout";
import Head from "next/head";
// import { getAllPosts } from "../lib/api";
import WorkSection from "../components/work-section";
import HeroSection from "../components/hero-section";
import WorkPreview from "../components/work-preview";

const previews = [
  {
    name: "Racket Media",
    description:
      "A new-age podcast network that partners with podcasters to scale their shows into media businesses. Designed and developed with React, Framer Motion, and Tailwind CSS.",
    image: "/images/Racket Media.png",
    year: "2022",
    link: "https://racket.com",
    linkCopy: "racket.com",
  },
  {
    name: "30 Days of Web3",
    description:
      "A free, open-source curriculum that teaches full-stack web3 development. Designed and co-built using Next.js and Tailwind CSS.",
    image: "/images/30 Days of Web3.png",
    year: "2022",
    link: "https://www.30daysofweb3.xyz",
    linkCopy: "30daysofweb3.xyz",
  },
  {
    name: "web3rsvp",
    description:
      "A ticketing web dApp used for 30 Days of Web3 curriculum. Designed and co-implemented using Next.js, Tailwind CSS, and web3 tooling like subgraphs, web3.storage, and RainbowKit.",
    image: "/images/web3rsvp.png",
    year: "2022",
    link: "https://web3-rsvp-frontend-mu.vercel.app",
    linkCopy: "Preview",
  },
  {
    name: "Odyssey DAO",
    description:
      "A free, high-quality education platform that aims to onboard 1 million people to web3. Collaboratively designed and made in Webflow.",
    image: "/images/Odyssey.png",
    year: "2022",
    link: "https://www.odysseydao.com",
    linkCopy: "odysseydao.com",
  },
  {
    name: "Racket iOS",
    description:
      "A social micro-podcasting mobile app for creating, consuming, and engaging with 99-second audio bites. Led user experience and mobile interface design.",
    image: "/images/Racket iOS.png",
    year: "2022",
    link: "https://techcrunch.com/2021/11/16/racket-social-audio-app/",
    linkCopy: "Featured in TechCrunch",
  },
  {
    name: "Podca$h",
    description:
      "A contest website for new and aspiring podcasters to apply for sponsorships. Designed and developed using Ruby on Rails and JavaScript.",
    image: "/images/Podcash.png",
    year: "2022",
    link: "https://www.podcash.com",
    linkCopy: "podcash.com",
  },
  {
    name: "Racket Web",
    description:
      "A social audio web app for recording and publishing up to 9 minutes of content with friends. Designed and built core features using Ruby on Rails, JavaScript, and Bootstrap.",
    image: "/images/Racket Web.png",
    year: "2021",
    link: "https://www.theverge.com/2021/7/16/22570683/audio-short-form-podcast-app-racket-beams",
    linkCopy: "Featured in The Verge",
  },
  {
    name: "Capiche.fm",
    description:
      "An audio-only, live streaming platform with real-time chat and audience participation. Designed and shipped core features utilizing Ruby on Rails, JavaScript, and Bootstrap.",
    image: "/images/CapicheFM.png",
    year: "2021",
    link: "https://medium.com/swlh/capiche-fm-is-the-game-changing-audio-platform-you-havent-heard-of-a0b85cf676e1",
    linkCopy: "Medium article",
  },
  {
    name: "Capiche",
    description:
      "A community for people to share pricing stories, honest opinions, and expert tips on software tools. Designed and implemented core features leveraging Ruby on Rails, jQuery, and Bootstrap.",
    image: "/images/Capiche.png",
    year: "2020",
    link: "https://capiche.com",
    linkCopy: "capiche.com",
  },
  {
    name: "Miscellaneous",
    description: "Here and there, for work or for fun.",
    image: "/images/Misc.png",
    year: "2020",
  },
];

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Sarah Zhang</title>
        </Head>
        <div className="container mx-auto px-4 lg:px-8 pb-20">
          <HeroSection></HeroSection>
          <div
            id="work"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 pt-8"
          >
            {previews.map((preview) => (
              <WorkPreview key={preview.name} preview={preview} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     "name",
//     "description",
//     "date",
//     "status",
//     "link",
//     "roles",
//   ]);

//   return {
//     props: { allPosts },
//   };
// }
