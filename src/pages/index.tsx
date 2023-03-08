import { DataTable, Header } from "@/components";
import { fetchData } from "@/hooks";
import { Container } from "@mui/system";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";

export default function Home() {
  return (
    <>
      <Head>
        <title>Front end task</title>
        <meta name="description" content="Sakneen Front End Task" />
      </Head>
      <Container>
        <Header />
        <DataTable />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getData", "", "unit_id", 1, 5, "asc"],
    queryFn: () =>
      fetchData({
        id: "",
        limit: 5,
        page: 1,
        order: "asc",
        sort: "unit_id",
      }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
