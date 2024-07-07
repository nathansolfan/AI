const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".images-section");
const clearImagesButton = document.querySelector("#clear-images");
const loadingBarContainer = document.querySelector("#loading-bar-container");
const loadingProgress = document.querySelector("#loading-progress");

const clearImages = () => {
  imageSection.innerHTML = "";
};

const getImages = async () => {
  const userPrompt = inputElement.value;
  const fullPrompt = "flamboyant " + userPrompt;

  // Show the loading message
  loadingProgress.textContent = "Loading images...";
  loadingBarContainer.style.display = "block";

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

    data?.data.forEach((imageObject) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const imageElement = document.createElement("img");

      imageElement.onload = () => {
        if (imageContainer === imageSection.lastChild) {
          // Hide the loading message once the last image has loaded
          loadingBarContainer.style.display = "none";
        }
      };

      imageElement.setAttribute("src", imageObject.url);
      imageContainer.append(imageElement);
      imageSection.append(imageContainer);
    });
  } catch (error) {
    console.error(error);
    // Hide the loading message in case of an error
    loadingBarContainer.style.display = "none";
  }
};

submitIcon.addEventListener("click", getImages);
clearImagesButton.addEventListener("click", clearImages);
