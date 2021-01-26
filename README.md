# clean-blog
Node.js, Express and MongoDB Blog  
Goal was to create a web app with CRUD functionality, that implemented user authentication and authorization, to allow the start of a 'blog'  
Post submissions are accompanied by an image upload that acts as the background for a given post's page  

# Technologies Used
Web-App follows general MVC architecture  
Frontend rendered through EJS templating and Bootstrap  
Node.js backend using Express.js  
Server hosted through Heroku and connected to Github for CI/CD  
Data persists through NoSQL cloud database on MongoDB Atlas  
Supports creating, reading, updating and deleting of data  
Sign-up and Login required to create  
Utilized middleware to handle authorization and authentication  
Images are stored on Node.js server, and then references/link are stored in MongoDB  

# To-do's
When a user signs up, they should be signed in and redirected to home page  
Main pages (home, sign up, login) could use some uniqueness/styling  
Would like to leave feedback on posts (comments/likes), this sort of logic exists in some of my other repos, would need to just implement  
About Me and Contact pages should be present  
Search function for posts/users?  
Remove auto-included content from the Bootstrap template  






