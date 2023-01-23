import {
  VscCheckAll,
  VscError,
  VscSourceControl,
  VscWarning,
} from "react-icons/vsc";

import { TbBrandNextjs } from "react-icons/tb";

const BottomNav = ({}) => {
  return (
    <div className="w-screen h-full  bg-bottom">
      <ul className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <VscSourceControl className="text-md ml-2" />
          <p>main</p>
          <div className="flex items-center gap-1 text-sm">
            <VscError />
            <span>0</span>
            <VscWarning />
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-5">
          <TbBrandNextjs />
          <span className="text-sm ">Powered by Next.Js</span>
          <VscCheckAll />
          <span className="text-sm">Prettier</span>
        </div>
      </ul>
    </div>
  );
};

export default BottomNav;
