import Image from "next/image";

const TopNav = () => {
  return (
    <section className="w-screen  h-8 flex items-center justify-center  bg-topnav  2xl:visible xl:visible lg:visible md:invisible sm:invisible xsm:invisible">
      <span className="flex mr-3 ml-1">
        <Image
          src="/images/vscode_logo.png"
          alt="vs code logo"
          height={15}
          width={15}
        />
      </span>
      <div className="flex flex-1 mr-auto gap-3">
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
