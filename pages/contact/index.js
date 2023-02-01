import ContactForm from "../../components/ContactPage/ContactForm";
import ContactSocials from "../../components/ContactPage/ContactSocials";
import Head from "next/head";

const ContactPage = ({}) => {
  return (
    <>
      <Head>
        <title>Amil Silahic - Contact</title>
        <meta
          property="og:title"
          content="Portfolio website for Amil Silahic. Front End Developer/Engineer. Salt Lake City, Utah. Contact Me Page"
          key="title"
        />
      </Head>
      <div className="w-full flex-1 justify-center font-bold xsm:inline-block sm:flex  md:flex lg:flex">
        <ContactSocials />

        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
