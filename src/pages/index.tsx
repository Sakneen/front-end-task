import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TableList from '@/components/table';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { getUnits } from '@/utils/getUnits';

// type HomeProps = { units: unit[] };

export default function Home() {
  // console.log(units);

  return (
    <>
      <Head>
        <title>Sakneen</title>
        <meta name="description" content="Frontend-Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <TableList />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  // const res = await fetch(`http://localhost:3005/listings?_page=1`);
  // const data = await res.json();

  // console.log(data);
  // // Pass data to the page via props
  // return { props: { units: data } };

  const queryClient = new QueryClient();

  const page = 1;
  const sort = 'Unit ID';
  const filter = '';

  await queryClient.prefetchQuery(['units', page, sort, filter], () =>
    getUnits()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
