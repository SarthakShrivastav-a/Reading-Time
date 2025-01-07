chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "computeReadingTime") {
      const calculateReadingTime = (text) => {
        const words = text.match(/[^\s]+/g) || [];
        const wordCount = words.length;
        return Math.round(wordCount / 200); // Average reading speed: 200 WPM
      };
  
      const readingTime = calculateReadingTime(message.text);
      const badgeText = readingTime ? `${readingTime}m` : "";
  
      // Update the extension's badge text
      chrome.action.setBadgeText({ text: badgeText });
      chrome.action.setBadgeBackgroundColor({ color: "#000" });
    }
  });
  