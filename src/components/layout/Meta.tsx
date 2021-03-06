import Head from "next/head";

type MetaProps = { title?: string };

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title && `${title} | `}COVID-19 Data</title>
      <link rel="icon" href="/covid-19-data.svg" />
    </Head>
  );
};

export default Meta;
