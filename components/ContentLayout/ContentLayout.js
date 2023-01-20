const ContentLayout = ({ children }) => {
  return (
    <div className="w-full h-full p-4 m-8 overflow-y-auto">
      <div>{children}</div>
    </div>
  );
};

export default ContentLayout;
