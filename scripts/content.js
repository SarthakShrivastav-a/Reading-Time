const extractTextFromPage = () => {
    return document.body.textContent || "";
  };
  
  const text = extractTextFromPage();
  
  // Send the extracted text to the background script
  chrome.runtime.sendMessage({ action: "computeReadingTime", text });
  