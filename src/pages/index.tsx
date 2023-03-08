import { DataTable, Header } from "@/components";
import { Container } from "@mui/system";
import Head from "next/head";

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
