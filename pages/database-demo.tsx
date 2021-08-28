// Useful documentation for APIs
// https://nextjs.org/docs/basic-features/pages

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useQuery } from 'urql';

const NamesQuery = `
query NamesQuery {
    Users(where: {Name: {_eq: "Gavin"}}) {
      Name
      ID
    }
  }
`;

type DatabaseDemoProps = {
}

function DatabaseDemo(props : DatabaseDemoProps) {
    const [{data, fetching, error}, executeQuery] = useQuery({query: NamesQuery}); 
    return (
        <div className={styles.container}>
        <Head>
            <title>Names in the names database</title>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Here are the names in our database:
            </h1>
            <p className={styles.description}>
                {fetching ? "Getting your data" : error ? "There was an error" + error.message : data ? data.Users.map((a : any) => a.Name + " ") : "Something went wrong"}
            </p>
        </main>
        </div>
    )
}

export default DatabaseDemo;
