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
  })
  .catch(err => {
    console.error("Error fetching user info:", err);
    document.getElementById("user-info").innerHTML =
      "<p>Error fetching user info.</p>";
  });
