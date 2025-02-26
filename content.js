function applyBlur(leftBlur, rightBlur) {
  let blurValue = `blur(${(parseFloat(leftBlur) + parseFloat(rightBlur)) / 2}px)`;

  // Apply blur effect
  document.body.style.filter = blurValue;

  // Simulating different focus for each eye
  document.body.style.textShadow = `${leftBlur}px 0px 2px rgba(0,0,0,0.3), 
                                       ${-rightBlur}px 0px 2px rgba(0,0,0,0.3)`;
}

// Load saved values
chrome.storage.sync.get(["leftBlur", "rightBlur"], (data) => {
  applyBlur(data.leftBlur || 0, data.rightBlur || 0);
});

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "updateBlur") {
    applyBlur(request.leftBlur, request.rightBlur);
  }
});
