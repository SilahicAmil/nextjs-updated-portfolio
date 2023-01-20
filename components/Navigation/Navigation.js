import Layout from "../Layout/Layout";

const Navigation = ({ children }) => {
  return (
    <Layout>
      <div>
        <p>Explorer</p>
        <div>
          <input type="checkbox" id="portfolio-checkbox" />
        </div>
      </div>
    </Layout>
  );
};

export default Navigation;
