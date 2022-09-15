import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import ContentfulContext from "../contexts/ContentfulContext";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const portfolio = await client.getEntries({
    content_type: "portfolio",
    select: "fields"
  });

  return {
    props: {
      portfolio: portfolio.items[0].fields
    }
  };
}

export default function Home({ portfolio }) {
  return (
    <ContentfulContext.Provider value={portfolio}>
      <Head>
        <title>{portfolio.name}</title>
        <meta name="description" content={portfolio.bio} />
        <meta
          name="keywords"
          content="Software Engineer, Frontend Engineer, Backend Engineer, Fullstack Developer, Frontend Developer, Backend Developer, Software Developer, MERN Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Hero />
        <div className={styles.projectsContainer}>
          {portfolio.projects.map(({ fields: project, sys }) => (
            <Project
              key={sys.id}
              title={project.title}
              shortDescription={project.shortDescription}
              techStack={project.techStack.join(", ")}
              slug={project.slug}
              image={`https://${project.images[0].fields.file.url}`}
              role={project.role}
              date={project.date}
            />
          ))}
        </div>
      </main>
      <Footer />
    </ContentfulContext.Provider>
  );
}
