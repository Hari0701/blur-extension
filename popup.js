document.addEventListener("DOMContentLoaded", function () {
  const blurRange = document.getElementById("blurRange");
  const blurValue = document.getElementById("blurValue");

  chrome.storage.sync.get("blurLevel", (data) => {
    blurRange.value = data.blurLevel || 0;
    blurValue.textContent = data.blurLevel || 0;
  });

  blurRange.addEventListener("input", function () {
    let value = blurRange.value;
    blurValue.textContent = value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "setBlur", value: value });
    });
  });
});
