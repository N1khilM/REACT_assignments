/*
🟢 Color Picker

Concept: Events + State

Requirements
Buttons for Red, Green, Blue, Yellow
Change page background
Custom color input
Reset color
Show current HEX code
*/
import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <h1>Color Picker</h1>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("white")}>reset</button>

      <p>Selected Color: {color}</p>

    </div>
  );
};
