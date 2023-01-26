
const Helmet = ({ title, children }) => {
  document.title = "雞皮購物 - " + title;
  return (
    <>
      <div className="w-100">{children}</div>
    </>
  );
};

export default Helmet;
