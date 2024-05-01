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
  <div class="card border-1 rounded shadow-lg p-3">
    <div class="card-body">
      <h5 class="card-title mb-4"> 
        <i class="bi bi-person-circle me-2" style="font-size: 2rem;"></i> ${data.fullName}
      </h5>
      <ul class="list-group list-group-flush mb-4">
        <li class="list-group-item border-0"><strong>Email:</strong> ${data.email}</li>
        <li class="list-group-item border-0"><strong>Phone:</strong> ${data.phone}</li>
        <li class="list-group-item border-0"><strong>Address:</strong> ${data.address}</li>
        <li class="list-group-item border-0"><strong>Education:</strong> ${data.education}</li>
        <li class="list-group-item border-0"><strong>Experience:</strong> ${data.experience}</li>
      </ul>
      <a href="tel:${data.phone}" class="btn btn-outline-primary d-block w-100 rounded-pill">Hire Now</a>
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
