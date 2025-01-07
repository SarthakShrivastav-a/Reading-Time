chrome.action.getBadgeText({}, (text) => {
    document.getElementById("readingTime").textContent =
      text ? `Estimated: ${text}` : "No data available.";
  });
  