import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Amil Silahic - amil.dev</title>
        <meta
          property="og:title"
          content="Portfolio website for Amil Silahic. Front End Developer/Engineer. Salt Lake City, Utah"
          key="title"
        />
      </Head>
      <div>
        <main className="py-2">
          <h1>Hello Everyone</h1>
        </main>
      </div>
    </>
  );
};

export default HomePage;
