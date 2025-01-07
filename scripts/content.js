const getTextFromArticle = () => {
    const article = document.querySelector("article") ||
                    document.querySelector("main") ||
                    document.querySelector("div[class*='content']") ||
                    document.querySelector("div[class*='article']");
  
    if (!article) return null;
  
    return article.textContent;
  };
  
  const calculateReadingTime = (text) => {
    const words = text.matchAll(/[^\s]+/g);
    const wordCount = [...words].length;
    return Math.round(wordCount / 200);
  };
  
  const text = getTextFromArticle();
  if (text) {
    const readingTime = calculateReadingTime(text);
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;
  
    const heading = document.querySelector("h1");
    const article = document.querySelector("article") || document.querySelector("main");
    (heading ?? article)?.insertAdjacentElement("afterbegin", badge);
  }
  