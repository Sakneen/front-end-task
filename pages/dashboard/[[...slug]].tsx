import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Dashboard from '../../components/Dashboard';
import { useAppSelector } from '../../lib/hooks';
import {
  getRunningOperationPromises,
  getUnitsList,
  IParams,
  useGetUnitsListQuery,
} from '../../lib/services/unitsApi';
import { wrapper } from '../../lib/store';

const DashboardPage = () => {
  const router = useRouter();
  const params = useAppSelector(({ dashboard }) => dashboard);

  const {
    data: units,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUnitsListQuery(params, { skip: router.isFallback });
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
