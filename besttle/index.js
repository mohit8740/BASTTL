document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the JSON file
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process the fetched data
        displayData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    // Display the fetched data
    function displayData(data) {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '<h2>Fetched Data:</h2>';
      
      data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `Name: ${item.name}, Age: ${item.age}, Gender: ${item.gender}, Score: ${item.score}`;
        outputDiv.appendChild(itemDiv);
      });
    }
  });