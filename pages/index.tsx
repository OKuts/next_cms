import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import client from '../contentful';
import {IHome, IHomeFields} from '../@types/generated/contentful';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

type ComponentProps = {
    home: IHome;
}

const Home: NextPage<ComponentProps> = ({ home }) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>{home.fields.title}</title>
            </Head>
            <main className={styles.main}>
                <h1>{home.fields.title}</h1>
                <div>{documentToReactComponents(home.fields.description!)}</div>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const home = await client.getEntries<IHomeFields>({
        content_type: 'home',
        limit: 1,
    });

    const [homePage] = home.items;

    return {
        props: {
            title: 'Blog with CMS',
            home: homePage,
        },
        revalidate: 3600,
    }
}
export default Home;
