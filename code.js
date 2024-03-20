function checkStatus() {
  const sessionId = Math.floor(Math.random() * 1000000) + 1;
  const currentTime = new Date().getTime();

  const url = `https://kahoot.it/reserve/session/${sessionId}/?${currentTime}`;

  fetch(url, {
    credentials: 'include',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
    },
    referrer: 'https://kahoot.it/',
    method: 'GET',
    mode: 'cors',
  })
    .then(response => {
      if (response.status === 200) {
        console.log('Request successful!');
        alert(`Code: ${sessionId}`);
      } else {
        console.log('Request failed. Retrying...');
        // Retry the request
        checkStatus();
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
      // Handle the error here
    });
}

// Start checking the status
checkStatus();
