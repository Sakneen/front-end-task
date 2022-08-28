import Head from 'next/head';
import { useRouter } from 'next/router';
import Dashboard from '../../components/Dashboard';
import { useAppSelector } from '../../lib/hooks';
import {
  getRunningOperationPromises,
  getUnitsList,
  useGetUnitsListQuery,
} from '../../lib/services/unitsApi';
import { wrapper } from '../../lib/store';

const DashboardPage = () => {
  const router = useRouter();
  const params = useAppSelector(({ dashboard }) => dashboard);

  const modifiedParams =
    params.unit_id_like.length > 0
      ? params
      : {
          _limit: params._limit,
          _order: params._order,
          _page: params._page,
          _sort: params._sort,
        };

  console.log({ modifiedParams });
  const { data: units } = useGetUnitsListQuery(modifiedParams, {
    skip: router.isFallback,
  });
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
