import Head from 'next/head';
import { useRouter } from 'next/router';
import Dashboard from '../../components/Dashboard';
import {
  getRunningOperationPromises,
  getUnitsList,
  useGetUnitsListQuery,
} from '../../lib/services/unitsApi';
import { wrapper } from '../../lib/store';

const DashboardPage = () => {
  const router = useRouter();
  const queryParams = router.query;
  console.log({ queryParams });

  const {
    data: units,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUnitsListQuery(queryParams, { skip: router.isFallback });
  console.log({ units });
  return (
    <>
      <Head>
        <title>Sakneen | Dashboard</title>
      </Head>
      <Dashboard units={units} />
    </>
  );
};

export default DashboardPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      console.log({ servQuery: query });
      store.dispatch(getUnitsList.initiate(query));
      await Promise.all(getRunningOperationPromises());
      return {
        props: {},
      };
    }
);
