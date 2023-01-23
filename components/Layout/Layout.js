import BottomNav from "../Navigation/BottomNav";
import Navigation from "../Navigation/Navigation";
import TopNav from "../Navigation/TopNav";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Navigation>
        <main className="font-SansPro">{children}</main>
      </Navigation>
      <BottomNav />
    </>
  );
};

export default Layout;
