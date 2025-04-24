fetch("https://cipappservice-ghayfnbmdxhtbhaw.westeurope-01.azurewebsites.net/weatherforecast", {
  headers: {
    "x-ms-client-principal": encodedClientPrincipal // Optional, if your backend requires it
  }
})
  .then(res => res.json())
  .then(data => 
    console.log(data)
     const infoDiv = document.getElementById("restricted-info");
        if (Array.isArray(data)) {
      // Create a list of weather information
      const weatherList = data.map(item => {
        return `
          <div>
            <p>Temperature: ${item.temperatureC}°C</p>
            <p>Summary: ${item.summary}</p>
          </div>
        `;
      }).join(''); // Join all weather items into a single string

      // Insert the weather data into the div
      infoDiv.innerHTML = `
        <h3>Weather Forecast</h3>
        ${weatherList}
      `;
    } else {
      // If the data format isn't what you expect
      infoDiv.innerHTML = "<p>Failed to load weather data.</p>";
    }
       )
  .catch(err => console.error("Fetch error:", err));
