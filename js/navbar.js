window.addEventListener("DOMContentLoaded", () => {
  fetch("template/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbarContainer").innerHTML = html;

      const userData = localStorage.getItem("userData");
      const token = JSON.parse(userData)?.data?.token;
      const logoutButton = document.getElementById("logout-btn");
      const logoutLi = document.getElementById("logout-li");
      const userNameLink = document.getElementById("userNameLink");
      const userName = JSON.parse(userData)?.data?.fullName;
      const isSuccess = JSON.parse(userData)?.data?.success;

      // Update the text content of the userNameLink
      // userNameLink.innerText = userName;

      userNameLink.innerHTML = `
      <i class="bi bi-person-circle" ></i>
      ${userName}
    `;

      logoutButton.addEventListener("click", () => {
        localStorage.clear();
        window.location.replace("/");
      });

      // Check if the user is logged in and update UI accordingly
      if (Boolean(token)) {
        logoutLi.classList.remove("d-none");
        userNameLink.classList.remove("d-none");

        // Remove login and sign up buttons if user is logged in
        document.getElementById("login-btn").parentNode.classList.add("d-none");
        document
          .getElementById("register-btn")
          .parentNode.classList.add("d-none");
        // Show the add post button
        document.getElementById("add-post").classList.remove("d-none");
        logoutButton.classList.remove("d-none");
      } else {
        logoutLi.classList.add("d-none");
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
