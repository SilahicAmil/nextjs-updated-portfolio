import ContactForm from "../../components/ContactPage/ContactForm";
import ContactSocials from "../../components/ContactPage/ContactSocials";

const ContactPage = ({}) => {
  return (
    <>
      <div className="justify-center w-full  h-[90vh] font-bold lg:flex flex-1 md:flex  sm:flex xsm:inline-block">
        <ContactSocials />

        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
