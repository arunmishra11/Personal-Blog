const postform = document.getElementById("post-form");

postform.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form input values
  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // Create a post object to store data
  const post = {
    username,
    title,
    content,
  };

  
});
