import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Sakneen: Buy, Sell or Rent Houses in Egypt",
  keywords:
    "real estate, realtor, homes for sale, commercial real estate, real estate listings, real estate agent, mls listings, realty, new homes, rent, houses, buy, sell",
  description: "Get the latest news in real estate",
};

export default Meta;
