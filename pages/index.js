import Layout from "../components/layout";
import Head from "next/head";
import { getAllPosts } from "../lib/api";
import WorkSection from "../components/work-section";
import HeroSection from "../components/hero-section";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Sarah Zhang</title>
        </Head>
        <div className="container mx-auto px-4 lg:px-8">
          <HeroSection></HeroSection>
          {allPosts && <WorkSection posts={allPosts}></WorkSection>}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "name",
    "description",
    "date",
    "status",
    "link",
    "roles",
  ]);

  return {
    props: { allPosts },
  };
}
