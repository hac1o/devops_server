// Function to fetch random data from the server
function fetchRandomData() {
  // Make an AJAX request to the server
  fetch('/randomData')
    .then(response => response.json())
    .then(data => {
      // Update HTML elements with random data
      document.getElementById('randomName').textContent = data.randomName;
      document.getElementById('randomEmail').textContent = data.randomEmail;
    })
    .catch(error => console.error('Error fetching random data:', error));
}
