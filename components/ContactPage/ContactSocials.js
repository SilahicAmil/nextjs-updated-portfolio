import ContactSocialsInfo from "./ContactSocialsInfo";

const ContactSocials = ({}) => {
  return (
    <div className="flex w-1/2 flex-col border-orange-500 lg:border-r-2 ">
      <h2 className="xsm:text-md m-8 sm:text-lg md:text-xl lg:text-2xl">
        Check out my Socials!
      </h2>
      <div className="xsm:text-md mt-4 ml-8 sm:text-lg md:text-xl lg:text-2xl">
        <ContactSocialsInfo />
      </div>
    </div>
  );
};

export default ContactSocials;
