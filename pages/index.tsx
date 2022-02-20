import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

type ComponentProps = {
    title: string;
}

const Home: NextPage<ComponentProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
          <h1>{title}</h1>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: 'Blog with CMS'
        },
        revalidate : 3600,
    }
}
export default Home
