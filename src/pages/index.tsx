import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TableList from '@/components/table';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { getUnits } from '@/utils/getUnits';

// type HomeProps = { units: unit[] };

export default function Home() {
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
