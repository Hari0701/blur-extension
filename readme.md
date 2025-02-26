# Blur Vision

Blur Vision is a Chrome extension that allows users to adjust the screen blur based on their eyesight power. This can be useful for reducing eye strain or simulating different vision conditions.

## Features

- Adjust screen blur using a range slider in the popup.
- Toggle blur on/off using a keyboard shortcut (Ctrl+B or Command+B on Mac).
- Saves the blur level in Chrome's storage.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded this repository.

## Usage

1. Click on the Blur Vision icon in the Chrome toolbar to open the popup.
2. Use the range slider to adjust the blur level. The blur will be applied to the current tab.
3. You can also use the keyboard shortcut (Ctrl+B or Command+B on Mac) to toggle the blur on and off.

## Files

- `background.js`: Handles the keyboard shortcut to toggle blur.
- `content.js`: Applies the blur effect to the webpage and listens for messages from the popup.
- `popup.js`: Manages the popup UI and sends messages to the content script to update the blur level.
- `popup.html`: The HTML for the popup UI.
- `styles.css`: The CSS for the popup UI.
- `manifest.json`: The manifest file that defines the extension's properties and permissions.

## License

This project is licensed under the MIT License.