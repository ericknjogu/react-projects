import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function createRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);

    console.log(hexColor);
  }

  function createRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r},${g},${b})`;

    setColor(rgbColor);

    console.log(rgbColor);
  }

  useEffect(() => {
    if (typeOfColor === "hex") createRandomHexColor();
    else createRandomRgbColor();
  }, [typeOfColor]);

  return (
    <div style={{ height: "100vh", width: "100vw", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color </button>
      <button onClick={() => setTypeOfColor("rgb")}>create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex" ? createRandomHexColor : createRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "30px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "hex color : " : "RGB color: "}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
