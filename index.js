fetch("/.auth/me")
  .then((res) => res.json())
  .then((data) => {
    const user = data.clientPrincipal;
    if (user) {
      document.body.innerHTML += `<p>Welcome, ${user.userDetails}</p>`;
    } else {
      document.body.innerHTML += `<p>You are not logged in.</p>`;
    }
  });
