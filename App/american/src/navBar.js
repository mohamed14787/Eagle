function Bar() {
  return (
    <div>
      <nav>
        <div style={{ display: "flex" }}>
          <div className="leftNav">
            <div className="logo">
              <h3>American Eagle</h3>
            </div>
          </div>
          <div className="rightNav">
            <button className="navButton">Create account</button>
            <button className="navButton">sign in </button>
            <button className="navButton">find store </button>
            <button className="navButton">العربيه</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Bar;
