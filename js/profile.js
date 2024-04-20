document.addEventListener("DOMContentLoaded", function () {
  // Simulated profile data
  const profileData = {
    id: 10,
    fullName: "Hyatt Sykes",
    phone: " 1 (234) 707-9417",
    address: "Ab dolor dolorum qui",
    gender: "female",
    email: "bchaudhary@eeposit.com",
    password: "1234",
    role: "student",
    created_at: "2024-04-20T07:38:01.000Z",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJjaGF1ZGhhcnlAZWVwb3NpdC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTcxMzYxMDkyNn0.D014DTFCVbgU2BWzd8cUiSxnqU3ivhUwJ0B6Val38Mc",
    success: true,
  };

  renderProfile(profileData);
});

function renderProfile(data) {
  document.getElementById("fullName").innerText = data.fullName;
  document.getElementById("email").innerText = "Email: " + data.email;
  document.getElementById("phone").innerText = "Phone: " + data.phone;
  document.getElementById("address").innerText = "Address: " + data.address;
  document.getElementById("gender").innerText = "Gender: " + data.gender;
}
