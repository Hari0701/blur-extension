document.addEventListener("DOMContentLoaded", () => {
  let leftSlider = document.getElementById("leftEyeBlur");
  let rightSlider = document.getElementById("rightEyeBlur");
  let leftBlurText = document.getElementById("leftBlurValue");
  let rightBlurText = document.getElementById("rightBlurValue");

  // Load saved blur values
  chrome.storage.sync.get(["leftBlur", "rightBlur"], (data) => {
    leftSlider.value = data.leftBlur || 0;
    rightSlider.value = data.rightBlur || 0;
    leftBlurText.textContent = `${leftSlider.value}px`;
    rightBlurText.textContent = `${rightSlider.value}px`;
  });

  // Function to update blur
  function updateBlur() {
    let leftBlur = leftSlider.value;
    let rightBlur = rightSlider.value;

    leftBlurText.textContent = `${leftBlur}px`;
    rightBlurText.textContent = `${rightBlur}px`;

    // Save to storage
    chrome.storage.sync.set({ leftBlur: leftBlur, rightBlur: rightBlur });

    // Send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "updateBlur",
        leftBlur: leftBlur,
        rightBlur: rightBlur,
      });
    });
  }

  // Event listeners for both sliders
  leftSlider.addEventListener("input", updateBlur);
  rightSlider.addEventListener("input", updateBlur);
});
