import Navigation from "../Navigation/Navigation";
import TopNav from "../Navigation/TopNav";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />

      <Navigation>
        <main className="flex flex-1 font-mono">{children}</main>
      </Navigation>
    </>
  );
};

export default Layout;
