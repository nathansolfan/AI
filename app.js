const API_KEY = "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";

const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".images-section");
const clearImagesButton = document.querySelector("#clear-images");

const clearImages = () => {
  imageSection.innerHTML = "";
};

const getImages = async () => {
  const userPrompt = inputElement.value;
  const fullPrompt = "dramatic" + userPrompt;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: fullPrompt,
      n: 2,
      size: "1024x1024",
    }),
  };
  try {
    const response = await fetch(
      "http://localhost:3000/generate-image",
      options
    );
    const data = await response.json();
    console.log(data);

    // if data is present then use a forEach method where I call it imgObject

    data?.data.forEach((imageObject) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageObject.url);
      imageContainer.append(imageElement);
      imageSection.append(imageContainer);
    });
  } catch (error) {
    console.error(error);
  }
};

submitIcon.addEventListener("click", getImages);
clearImagesButton.addEventListener("click", clearImages);
