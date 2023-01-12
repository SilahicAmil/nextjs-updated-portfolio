import Image from "next/image";

const Navigation = ({}) => {
  return (
    <>
      <div>
        <nav className="w-full h-32 items-center flex justify-between">
          <ul className="">
            <li>
              <div>
                {/* <Logo /> */}
                <Image
                  alt="logo"
                  src="/images/logo-no-background.png"
                  width={120}
                  height={80}
                  className="rounded-lg ml-5"
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
