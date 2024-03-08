const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000; // You can choose any port that's available
const cors = require("cors");
app.use(cors());

app.use(express.static("."));

// Replace this with your actual API key from OpenAI
const API_KEY = app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Endpoint to handle the image generation requests
app.post("/generate-image", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body), // Forward the body received from the frontend
  };

  try {
    // Making the request to OpenAI's API
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json(); // Parsing the response as JSON
    res.json(data); // Sending the data back to the frontend
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
