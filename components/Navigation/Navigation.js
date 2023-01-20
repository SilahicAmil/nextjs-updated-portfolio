import { FaChevronRight, FaReact } from "react-icons/fa";

import Layout from "../Layout/Layout";

const Navigation = ({ children }) => {
  return (
    <div>
      <p>Explorer</p>
      <div>
        <input type="checkbox" id="portfolio-checkbox" />
        <label htmlFor="portfolio-checkbox" className="flex">
          <FaChevronRight />
          PORTFOLIO
        </label>
        <div>
          <div className="flex">
            <FaReact />
            <p>Home.jsx</p>
          </div>
          <div className="flex">
            <FaReact />
            <p>Projects.js</p>
          </div>
          <div className="flex">
            <FaReact />
            <p>About.json</p>
          </div>
          <div className="flex">
            <FaReact />
            <p>Github.md</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
