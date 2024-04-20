async function getUsers() {
  try {
    const response = await fetch("http://localhost:2003/feeds");
    const feeds = await response.json();
    renderUsers(feeds);
    return feeds;
  } catch (error) {
    console.error("Error fetching feeds:", error);
    return [];
  }
}

function renderUsers(users) {
  const userListContainer = document.getElementById("feed-list");
  userListContainer.innerHTML = ""; // Clear previous content

  users.forEach((data) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("col-8");
    cardElement.innerHTML = `
          <div class="card mb-4 p-4 rounded-4">
              <div class="row g-0">
                  <div class="col-md-2">
                      <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" class="card-img-top avatar rounded-circle" alt="Avatar">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">${data.name}</h5>
                          <p class="card-text">${data.message}</p>
                          <p class="card-text text-secondary">Post on: ${data.postedOn}<br>Deadline: ${data.deadline}</p>
                      </div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item">Subject: ${data.subject}</li>
                          <li class="list-group-item">Class: ${data.class}</li>
                          <li class="list-group-item">Medium: ${data.medium}</li>
                          <li class="list-group-item">Salary: ${data.salary}</li>
                          <li class="list-group-item">Location: ${data.location}</li>
                          <li class="list-group-item">Phone Number: ${data.phone}</li>
                          <li class="list-group-item">Preferred University: ${data.prefered_university}</li>
                      </ul>
                      <div class="card-body">
                          <button class="btn btn-outline-success">Apply</button>
                      </div>
                  </div>
              </div>
          </div>
      `;
    userListContainer.appendChild(cardElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getUsers();
});
