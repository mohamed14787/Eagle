import React, { useRef, useEffect, useState } from "react";

function Second({ items }) {
  const [numColumns, setNumColumns] = useState(1);
  const more = () => {
    setNumColumns(numColumns + 2);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "stretch",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        {items.slice(0, numColumns).map((item) => (
          <div key={item.id} style={{ flex: "1 1 0", minWidth: "200px" }}>
            <img
              src={item.url}
              alt={item.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button onClick={more}>More</button>
    </div>
  );
}

export default Second;
