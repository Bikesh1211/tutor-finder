document.addEventListener("DOMContentLoaded", function () {
  const createPostForm = document.getElementById("createPostForm");
  const postList = document.getElementById("postList");

  // Function to fetch existing posts
  function fetchPosts() {
    // You need to implement the logic to fetch posts from the server
    // This could be done using fetch API or any other method
    // Once you fetch the posts, update the post list
    // Example:
    // const posts = fetchPostsFromServer();
    // renderPosts(posts);
  }

  // Function to render posts in the post list
  function renderPosts(posts) {
    postList.innerHTML = "";
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `
                <h5>${post.title}123</h5>
                <p>${post.content}1212</p>
                <button class="btn btn-sm btn-danger" data-post-id="${post.id}">Delete</button>
                <button class="btn btn-sm btn-secondary" data-post-id="${post.id}">Edit</button>
            `;
      postList.appendChild(listItem);
    });
  }

  // Event listener for form submission to create new post
  createPostForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;

    // You need to implement the logic to send the new post data to the server
    // This could be done using fetch API or any other method
    // Example:
    // createPost(postTitle, postContent);
  });

  // Fetch existing posts when the page loads
  fetchPosts();
});
