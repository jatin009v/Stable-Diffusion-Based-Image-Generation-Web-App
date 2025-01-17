import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    const response = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setImage(`data:image/png;base64,${btoa(data.image_data)}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Image Generation with Stable Diffusion</h1>
      <input
        type="text"
        placeholder="Enter a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ padding: "0.5rem", width: "60%" }}
      />
      <button onClick={generateImage} style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
        Generate
      </button>
      {image && <img src={image} alt="Generated" style={{ marginTop: "2rem", maxWidth: "100%" }} />}
    </div>
  );
}

export default App;
