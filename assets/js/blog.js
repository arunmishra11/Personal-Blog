const postContainer = document.getElementById("posts");

function displayPosts() {
  // Get data from localStorage
  const blogData = JSON.parse(localStorage.getItem("posts")) || [];

  // Clear previous entries
  postContainer.innerHTML = "";

  if (blogData.length === 0) {
    postContainer.textContent = "No blog posts yet.";
    return;
  }

  // Loop through each blog entry
  blogData.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Create elements for username, title, and content
    const titleElement = createElement("h2", post.title);
    const contentElement = createElement("p", post.content);
    const usernameElement = createElement("h3", `Posted by: ${post.username}`);

    // Append elements to the post
    appendChildren(postElement, [titleElement, contentElement, usernameElement]);

    // Append the post to the container
    postContainer.appendChild(postElement);
  });
}

// Function to create element with text content
function createElement(tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
}

// Function to append multiple children to a parent element
function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

// Call the display function on page load and after form submission
displayPosts();
