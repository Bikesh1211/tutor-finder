async function getUsers() {
  try {
    const response = await fetch("http://localhost:2003/tutor");
    const feeds = await response.json();
    console.log("🚀 ~ getUsers ~ feeds:", feeds);
    // renderUsers(feeds);
    renderPostCards(feeds);
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
    <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title"> 
    <i class="bi bi-person-circle "></i>

      ${data.fullName}</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" class="btn btn-primary">View Profile</a>
    </div>
  </div>
    `;

  // `;

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
