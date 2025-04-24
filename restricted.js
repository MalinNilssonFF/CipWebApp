fetch("https://cipappservice-ghayfnbmdxhtbhaw.westeurope-01.azurewebsites.net/weatherforecast", {
  headers: {
    "x-ms-client-principal": encodedClientPrincipal // Optional, if your backend requires it
  }
})
  .then(res => res.json())
  .then(data => 
    console.log(data)
     const infoDiv = document.getElementById("restricted-info");
        infoDiv.innerHTML = "list of weatherinfo";
       )
  .catch(err => console.error("Fetch error:", err));
