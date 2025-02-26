function applyBlur(blurValue) {
  document.body.style.filter = `blur(${blurValue}px)`;
}

// Load saved settings
chrome.storage.sync.get("blurLevel", (data) => {
  applyBlur(data.blurLevel || 0);
});

// Listen for changes from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setBlur") {
    applyBlur(request.value);
    chrome.storage.sync.set({ blurLevel: request.value });
  }
});
