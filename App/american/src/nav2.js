import { CiHeart } from "react-icons/ci";

function Bar2() {
  return (
    <div
      style={{
        display: "flex",
        borderBlockColor: "black",
        border: "0.3px solid #e6e9ef",
      }}
    >
      <div
        className="leftNav"
        style={{
          backgroundColor: "white",
          height: "11vh",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
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
          Search
        </button>
      </div>

      <div className="centerNav" style={{ backgroundColor: "white" }}>
        <h1>American Eagle</h1>
      </div>

      <div className="rightNav" style={{ backgroundColor: "white" }}>
        <CiHeart />
      </div>
    </div>
  );
}

export default Bar2;
