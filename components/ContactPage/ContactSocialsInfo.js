const ContactSocialsInfo = ({}) => {
  return (
    <>
      <p className="">
        <span className="text-orange-600">socials&nbsp;=&nbsp;</span>
        &#91;&#123;
      </p>

      <p className="flex gap-2 px-4 ">
        email:
        <a
          href="mailto:amil@amil.dev"
          target="_blank"
          rel="noreferrer"
          className="text-orange-300 underline"
        >
          amil@amil.dev
        </a>
      </p>
      <p className="flex gap-2 px-4">
        github:
        <a
          href="https://github.com/silahicamil"
          target="_blank"
          rel="noreferrer"
          className="text-orange-300 underline"
        >
          silahicamil
        </a>
      </p>
      <p className="flex gap-2 px-4">
        linkedin:
        <a
          href="https://www.linkedin.com/in/amil-silahic-4b5a01140/"
          target="_blank"
          rel="noreferrer"
          className="text-orange-300 underline"
        >
          amilsilahic
        </a>
      </p>
      <p className="flex gap-2 px-4">
        blog:
        <a
          href="https://astro-dev-log.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-orange-300 underline"
        >
          amil.dev log
        </a>
      </p>
      <p>
        <span>&#125;&#93;</span>
      </p>
    </>
  );
};

export default ContactSocialsInfo;
