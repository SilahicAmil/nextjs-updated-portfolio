const ContactSocials = ({}) => {
  return (
    <div className="border-r-2 w-1/2">
      <h2 className="text-2xl m-8">Check out my Socials!</h2>
      <div className="m-8 text-lg">
        <p className="text-2xl ">
          <span className="text-orange-200">.socials </span>&#123;
        </p>

        <p className="px-4 flex gap-2">
          email:
          <a href="mailto:amil@amil.dev" target="_blank" rel="noreferrer">
            amil@amil.dev
          </a>
        </p>
        <p className="px-4 flex gap-2">
          github:
          <a
            href="https://github.com/silahicamil"
            target="_blank"
            rel="noreferrer"
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
