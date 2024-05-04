# MypersonalBlog

**Objective**
This challenge asks us to create a webpage where users can input their data and view blog. The webpage needs a form, dynamic blog post on the basis of input, toggle at the top of the page which provides light and dark mode. 

**Technologies used**

html,css,js

**User Story**

AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
Acceptance Criteria
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.

**File Structure**

personal-blog
├── assets
│ ├── css
│ │ ├── blog.css
│ │ ├── form.css
│ │ └── styles.css
│ └── js
│ ├── blog.js
│ ├── form.js
│ └── logic.js
├── index.html
├── blog.html
└── README.md

**Screenshots**

![landing page](https://github.com/arunmishra11/Personal-Blog/assets/156019606/bdf646dd-386d-4d4e-92ff-073dae8e4b1c)

![form section](https://github.com/arunmishra11/Personal-Blog/assets/156019606/46645716-2d73-431d-bedf-913044530ad5)


![dark mode](https://github.com/arunmishra11/Personal-Blog/assets/156019606/efd8b0a7-0cab-4c25-9610-c756ecf3716f)


![localstorge](https://github.com/arunmishra11/Personal-Blog/assets/156019606/320a4ca8-5e0a-4448-868a-dd1d621874be)

![Appending](https://github.com/arunmishra11/Personal-Blog/assets/156019606/70c4feed-e1b0-466c-8e37-6bf425c8d163)
