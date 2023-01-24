import ContactForm from "../../components/ContactPage/ContactForm";
import ContactSocials from "../../components/ContactPage/ContactSocials";

const ContactPage = ({}) => {
  return (
    <>
      <div className="flex flex-1 justify-center w-full h-[90vh] font-bold">
        <ContactSocials />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
