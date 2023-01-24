import Head from "next/head";
import SplashContent from "../components/HomePage/SplashContent";

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
        <SplashContent />
      </div>
    </>
  );
};

export default HomePage;
