import Image from "next/image";

const TopNav = () => {
  return (
    <section className="flex w-screen items-center justify-center bg-topnav font-SansPro  xsm:invisible  xsm:h-0 sm:invisible sm:h-0 md:invisible md:h-0 lg:visible lg:h-8 xl:visible 2xl:visible">
      <span className="mr-3 ml-1 flex">
        <Image
          src="/images/vscode_logo.png"
          alt="vs code logo"
          height={15}
          width={15}
        />
      </span>
      <div className="mr-auto flex flex-1 gap-3">
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className="flex flex-auto">Amil Silahic - Portfolio</p>
    </section>
  );
};

export default TopNav;
