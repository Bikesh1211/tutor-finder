async function getUsers() {
  try {
    const response = await fetch("http://localhost:2003/feeds");
    const feeds = await response.json();
    const userData = localStorage.getItem("usersData");
    if (true) {
      renderPostCards(feeds);
    }
    return feeds;
  } catch (error) {
    console.error("Error fetching feeds:", error);
    return [];
  }
}

// Function to create a post card from data
function createPostCard(data) {
  const card = document.createElement("div");
  card.classList.add("col-md-6");

  card.innerHTML = `
      <div class="card mb-3">
        <div class="card-header fw-bold">
          Subject: ${data.subject} 
        </div>
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Class: ${data.class}</p>
          <p class="card-text">Medium: ${data.medium}</p>
          <p class="card-text">Salary: ${data.salary}</p>
          <p class="card-text">Location: ${data.location}</p>
          <p class="card-text">Preferred University: ${data.prefered_university}</p>
          <p class="card-text"><small class="text-muted">Posted on: ${data.created_at}</small></p>
          <a href="#" class="btn btn-primary">Contact</a>
        </div>
      </div>
    `;

  return card;
}

// Function to render post cards from API data
function renderPostCards(data) {
  const row = document.querySelector(".row");

  // Clear existing content
  row.innerHTML = "";

  // Create and append post cards
  data.forEach((item) => {
    const postCard = createPostCard(item);
    row.appendChild(postCard);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  getUsers();
});

// Call the renderPostCards function with the API data
