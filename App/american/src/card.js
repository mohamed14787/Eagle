import React, { useRef, useEffect, useState } from "react";

function Card({ items, num }) {
  return (
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
      {items.map((item) => (
        <div style={{ flex: "1 1 " }}>
          <img
            src={item.url}
            alt={item.name}
            style={{ maxWidth: "100%", height: "auto", minWidth: "200px" }}
          />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
