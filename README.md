# AI Image Generator

## Overview
The AI Image Generator is a web application that allows users to generate images based on text prompts using the OpenAI API. The application includes both a front-end and a back-end component.

## Features
- **Generate AI Images**: Users can enter a text prompt to generate images.
- **Clear Generated Images**: Users can clear all generated images from the display.
- **Navigation**: Users can navigate between the AI Image Generator and a test page.
- **Loading Indicator**: Displays a loading message while images are being generated.

## Project Structure


├── app.js
├── index.html
├── package.json
├── package-lock.json
├── server.js
├── styles.css
├── styless.css
└── test.html


## Files Description

### 1. app.js
Contains the JavaScript code to handle user interactions on the front-end. This includes capturing user input, making requests to the backend to generate images, and updating the DOM to display the generated images.

### 2. index.html
The main HTML page for the AI Image Generator. It includes the input field for the prompt, buttons for generating and clearing images, and links to navigate to other pages.

### 3. package.json
Specifies the project's dependencies, which include Express, CORS, Body-Parser, and Node-Fetch.

```json
{
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.18.3",
    "node-fetch": "^2.7.0"
  }
}
```

### 4. package-lock.json
Auto-generated file that contains the exact versions of the dependencies installed.

### 5. server.js
The back-end server script using Express. It serves static files and handles POST requests to generate images using the OpenAI API.


```javascript
const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("."));
app.use(bodyParser.json());

const API_KEY = "your-api-key-here";

app.post("/generate-image", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  };

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### 5. styles.css

### 6.  test.html

## Installation:
### Clone the Repository:

```git
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

###Install the Dependencies:
```
npm install
```

## Running the Application
### Start the Server:
```
sh
Copy code
node server.js
Open your Browser and Navigate to:

arduino
Copy code
http://localhost:3000
```

## Usage
### Enter a Text Prompt:

## Enter a text prompt in the input field.
### Generate Images:

## Click on the "Create" button to generate images.
### Clear Images:

## Click the "Clear Images" button to clear all generated images.
### Navigate Between Pages:

## Use the navigation link to switch between pages.






