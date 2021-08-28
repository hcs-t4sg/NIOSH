// Useful documentation for APIs
// https://nextjs.org/docs/basic-features/pages

import Head from 'next/head'
import styles from '../styles/Home.module.css'

type CatFactData = {
  fact: string;
  length: number;
};

type APIDemoProps = {
  catFactMessage: string;
}

function ApiDemo({ catFactMessage }: APIDemoProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Cat Facts</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Random 🐱 fact
        </h1>
        <p className={styles.description}>{catFactMessage}</p>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Generate a random cat fact
  const res = await fetch(`https://catfact.ninja/fact`)
  let data: CatFactData = await res.json();
  // Some error checking
  let catFactMessage = "There was an error getting cat facts 😭";
  if (data) {
    catFactMessage = data.fact;
  }
  return { props: { catFactMessage } }
}

export default ApiDemo;
