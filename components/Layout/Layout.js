import ActionsNav from "../Navigation/ActionsNav";
import TopNav from "../Navigation/TopNav";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <ActionsNav />
      <main className="flex flex-1 font-mono">{children}</main>
    </>
  );
};

export default Layout;
