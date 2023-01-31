import ContactForm from "../../components/ContactPage/ContactForm";
import ContactSocials from "../../components/ContactPage/ContactSocials";

const ContactPage = ({}) => {
  return (
    <>
      <div className="w-full flex-1 justify-center font-bold xsm:inline-block sm:flex  md:flex lg:flex">
        <ContactSocials />

        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
