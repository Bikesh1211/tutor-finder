window.addEventListener("DOMContentLoaded", () => {
  fetch("template/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbarContainer").innerHTML = html;
      const userData = localStorage.getItem("userData");
      const token = JSON.parse(userData)?.data?.token;
      const logoutButton = document.getElementById("logout-btn");
      const createPostBtn = document.getElementById("create-post");
      const logoutLi = document.getElementById("logout-li");
      const userNameLink = document.getElementById("userNameLink");
      const onlineClassId = document.getElementById("online-class");
      const userName = JSON.parse(userData)?.data?.fullName;

      userNameLink.innerHTML = `
      <i class="bi bi-person-circle"></i>
      ${userName}
    `;

      logoutButton.addEventListener("click", () => {
        const logoutAlert = document.getElementById("logoutAlert");

        localStorage.clear();
        logoutAlert.style.display = "block";
        setTimeout(() => {
          logoutAlert.style.display = "none";
          window.location.replace("/");
        }, 1000); // Hides the alert after 3 seconds and redirects to home page
      });

      const isLoggedIn = Boolean(token);
      // Check if the user is logged in and update UI accordingly
      if (isLoggedIn) {
        logoutLi.classList.remove("d-none");
        userNameLink.classList.remove("d-none");
        onlineClassId.classList.remove("d-none");

        // Remove login and sign up buttons if user is logged in
        document.getElementById("login-btn").parentNode.classList.add("d-none");
        logoutButton.classList.remove("d-none");
        createPostBtn.classList.remove("d-none");

        // Get the action button
        const actionButton = document.getElementById("admin-pannel-btn");
        actionButton.parentNode.classList.remove("d-none");

        document.getElementById("ccreate-post-btn").innerText = "Hello world";

        // If user is logged in, change the button text and link
        actionButton.innerText = "Find Tutor";
        actionButton.href = "tutor.html"; // Update this to your find teacher page
      } else {
        logoutLi.classList.add("d-none");
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
