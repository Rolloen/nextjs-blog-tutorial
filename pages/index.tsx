import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';

export const getStaticProps: GetStaticProps = async() =>  {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <span>Hello there! </span>
        <span>
          I&apos;m a 27-year-old web developer with a passion for creating dynamic and user-friendly websites. Currently,
          I&apos;m diving deep into Next.js, exploring its capabilities to build seamless web applications.
          Excited to see where this journey takes me!
          Cheers
        </span>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className='mt-6'>
        <h2 className='text-xl font-medium text-black'>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} >{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
