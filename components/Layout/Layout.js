import Navigation from "../Navigation/Navigation";
import TopNav from "../Navigation/TopNav";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Navigation>
        <main className="font-mono">{children}</main>
      </Navigation>
    </>
  );
};

export default Layout;
