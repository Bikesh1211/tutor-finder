document.addEventListener("DOMContentLoaded", function () {
  const updateProfileForm = document.getElementById("updateProfileForm");

  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));

  // Check if user data exists
  if (userData) {
    // Populate form fields with user data
    document.getElementById("fullName").value = userData.fullName;
    document.getElementById("email").value = userData.email;
    document.getElementById("phone").value = userData.phone;
    document.getElementById("address").value = userData.address;
    document.getElementById("gender").value = userData.gender;
  }

  updateProfileForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get updated profile data
    const updatedProfileData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      gender: document.getElementById("gender").value,
    };

    // Update user data in local storage
    localStorage.setItem("userData", JSON.stringify(updatedProfileData));

    // Show success message
    alert("Profile updated successfully");
  });
});
