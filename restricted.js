// Check the current login status
fetch("/.auth/me")
  .then(res => res.json())
  .then(data => {
    const userInfoDiv = document.getElementById("user-info");

    if (data.clientPrincipal) {
      const user = data.clientPrincipal;
      userInfoDiv.innerHTML = `
        <h2>Welcome, ${user.userDetails}!</h2>
        <p><strong>Provider:</strong> ${user.identityProvider}</p>
        <p><strong>User ID:</strong> ${user.userId}</p>
        <p><strong>Roles:</strong> ${user.userRoles.join(", ")}</p>
      `;
    } else {
      userInfoDiv.innerHTML = "<p>You are not logged in.</p>";
    }
  });


fetch("https://cipappservice-ghayfnbmdxhtbhaw.westeurope-01.azurewebsites.net/weatherforecast")
  .then(res => res.json())
  .then(data =>  {
     console.log(data);
     const infoDiv = document.getElementById("restricted-info");
        if (Array.isArray(data)) {
      // Create a list of weather information
      const weatherList = data.map(item => {
        return `
          <div>
            <p>Date: ${item.date}</p>
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
  })
  .catch(err => console.error("Fetch error:", err));
