const ContactSocialsInfo = ({}) => {
  return (
    <>
      <p className="">
        <span className="text-orange-600">.socials </span>&#123;
      </p>

      <p className="px-4 flex gap-2 ">
        email:
        <a
          href="mailto:amil@amil.dev"
          target="_blank"
          rel="noreferrer"
          className="underline text-orange-300"
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
          className="underline text-orange-300"
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
          className="underline text-orange-300"
        >
          amilsilahic
        </a>
      </p>
      <p>
        <span>&#125;</span>
      </p>
    </>
  );
};

export default ContactSocialsInfo;
