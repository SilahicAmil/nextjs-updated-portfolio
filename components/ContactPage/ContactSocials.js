import ContactSocialsInfo from "./ContactSocialsInfo";

const ContactSocials = ({}) => {
  return (
    <div className="lg:border-r-2 border-orange-200 w-1/2 flex flex-col ">
      <h2 className="lg:text-2xl m-8 md:text-xl sm:text-lg xsm:text-md">
        Check out my Socials!
      </h2>
      <div className="mt-4 ml-8 lg:text-2xl md:text-xl sm:text-lg xsm:text-md">
        <ContactSocialsInfo />
      </div>
    </div>
  );
};

export default ContactSocials;
