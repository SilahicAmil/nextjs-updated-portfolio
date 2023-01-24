const ContactSocials = ({}) => {
  return (
    <div className="lg:border-r-2 border-orange-200 w-1/2 flex flex-col ">
      <h2 className="lg:text-2xl m-8 md:text-xl sm:text-lg xsm:text-md">
        Check out my Socials!
      </h2>
      <div className="mt-4 ml-8 lg:text-2xl md:text-xl sm:text-lg xsm:text-md">
        <p className="">
          <span className="text-orange-200">.socials </span>&#123;
        </p>

        <p className="px-4 flex gap-2 ">
          email:
          <a
            href="mailto:amil@amil.dev"
            target="_blank"
            rel="noreferrer"
            className="underline "
          >
            amil@amil.dev
          </a>
        </p>
        <p className="px-4 flex gap-2">
          github:
          <a
            href="https://github.com/silahicamil"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            silahicamil
          </a>
        </p>
        <p className="px-4 flex gap-2">
          linkedin:
          <a
            href="https://www.linkedin.com/in/amil-silahic-4b5a01140/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            amilsilahic
          </a>
        </p>
        <p>
          <span>&#125;</span>
        </p>
      </div>
    </div>
  );
};

export default ContactSocials;
