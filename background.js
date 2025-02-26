chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle_blur") {
    chrome.storage.sync.get("blurLevel", (data) => {
      let newBlur = data.blurLevel > 0 ? 0 : 5; // Toggle between 0 and 5px blur
      chrome.storage.sync.set({ blurLevel: newBlur });

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setBlur", value: newBlur });
      });
    });
  }
});
