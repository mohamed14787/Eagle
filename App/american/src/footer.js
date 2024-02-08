function Footer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          borderBlockColor: "black",
          border: "0.3px solid #e6e9ef",
          marginTop: "7%",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            gap: "5%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="navButton2">Create account</button>
          <button className="navButton2">sign in </button>
          <button className="navButton2">find store </button>
          <button className="navButton2">العربيه</button>
        </div>
        <div
          style={{
            display: "flex",
            flex: "1.5",
            flexDirection: "column",
            gap: "5%",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <button className="navButton2">Create account</button>
          <button className="navButton2">sign in </button>
          <button className="navButton2">find store </button>
          <button className="navButton2">العربيه</button>
        </div>
        <div
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            gap: "5%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div>
            <h4>
              Get an exclusive offer when you sign up, plus insider access to
              even more offers, new arrivals, style tips and more
            </h4>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              style={{
                height: "40%",
                marginTop: "3%",
                width: "50%",
                border: "0.3px solid #e6e9ef",
              }}
            />
            <button
              style={{
                height: "40%",
                marginTop: "3%",
                backgroundColor: "white",
                border: "0.3px solid #e6e9ef",
                fontSize: "17px",
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          borderBlockColor: "black",
          border: "0.3px solid #e6e9ef",
          padding: "2%",
        }}
      >
        <h2>© AEO Management Co. All Rights Reserved 2024</h2>
      </div>
    </div>
  );
}
export default Footer;
