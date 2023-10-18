import "./index.css";

const Loader = () => {
  return (
    <div style={{ background: "black", width: "100%", height: "100vh" }}>
      <div>
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="progress"></div>
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
