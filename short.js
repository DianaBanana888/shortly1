document.getElementById('short').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    let result = document.getElementById('result');
    
    if (!urlInput) {
        result.innerHTML += '<br>Please enter a URL!';
        return;
    }

    // Send GET request to TinyURL API
    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlInput)}`)
    .then(response => response.text())
    .then(shortUrl => {
        result.innerHTML += `<br>Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
    })
    .catch(error => {
        console.error('Error:', error);
        result.innerHTML += "<br>There was an error processing your request.";
    });
});

