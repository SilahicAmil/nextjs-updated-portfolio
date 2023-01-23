import { FaFile } from "react-icons/fa";

const ActionsNav = ({}) => {
  return (
    <div className="flex flex-col w-32 border-2 justify-between">
      <div className="py-4 gap-6 flex flex-col">
        <div className="flex items-center justify-center text-xl">
          <FaFile />
        </div>
        <div className="flex items-center justify-center text-xl">
          <FaFile />
        </div>
        <div className="flex items-center justify-center text-xl">
          <FaFile />
        </div>
        <div className="flex items-center justify-center text-xl">
          <FaFile />
        </div>
      </div>
      <div className="py-4">
        <div className="flex items-center justify-center text-xl">
          <FaFile />
        </div>
      </div>
    </div>
  );
};

export default ActionsNav;
