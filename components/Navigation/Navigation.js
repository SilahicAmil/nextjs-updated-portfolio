const Navigation = ({ children }) => {
  return (
    <div className="flex flex-col bg-red-50 text-black w-64">
      <div>
        <p>Portfolio</p>

        <div>
          <aside>
            <nav>
              <ul>
                <li>Side</li>
              </ul>
            </nav>
          </aside>
        </div>

        <div>
          <aside>
            <nav>
              <ul>
                <li>About.html</li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
