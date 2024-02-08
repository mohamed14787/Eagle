function Panel1() {
  return (
    <div style={{ backgroundColor: "maroon", display: "flex" }}>
      <div style={{ marginTop: "0", marginBottom: "0", flex: "1" }}>
        <p
          style={{
            fontSize: "120px",
            color: "white",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          OH,<br></br> YES <br /> SALE
        </p>
      </div>
      <div style={{ marginTop: "0", marginBottom: "0", flex: "1" }}>
        <p
          style={{
            fontSize: "70px",
            color: "white",
            marginTop: "20%",
            marginBottom: "0",
          }}
        >
          Up to 75% Off
        </p>
      </div>
      <div
        style={{
          marginTop: "0",
          marginBottom: "0",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "5%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="navButton3">sign in </button>
        <button className="navButton3">find store </button>
        <button className="navButton3">العربيه</button>
      </div>
    </div>
  );
}

export default Panel1;
