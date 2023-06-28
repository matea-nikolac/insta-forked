# insta
<img width="1208" alt="Screenshot 2023-06-28 at 10 57 14" src="https://github.com/matea-nikolac/insta-forked/assets/62067357/f0e31045-0679-44d1-bfc4-660201fb1519">

## Description
The objective of this project was to develop a game  

## Deployment link
https://instasham-project.herokuapp.com/

## Code Installation
To set up the project, follow these steps:

* Clone the project repository.
* Run  `npm install` in both the 'Insta' folder and the 'client' folder to install the dependencies
* In the 'Insta' folder, run `npm run seed` in the terminal to add the seeds.
* After the seeds are added, run `npm run serve` in the 'Insta' folder to start the server.
* Open a second terminal window, navigate to the 'client' folder, and run `npm run start` to launch the app.
* Access the app in your browser at 'localhost:3000' to enjoy its features.

## Timeframe & Working Team (Solo/Pair/Group)
This project was a collaborative team effort with three members: Giorgia Mineo, James Nellist, and myself. It was completed within a timeframe of 1.5 weeks.

## Technologies Used
React, JSX, Axios, SASS, Bootstrap, Node, Express, MongoDB, Mongoose

## Brief
* Build a full-stack application by making your own backend and your own front-end
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which - you can cut
* Have a visually impressive design

## Planning
A wireframe was designed to visualize the layout and structure of the web and mobile versions of the app. The wireframes showcase the following pages and their key components:

* Register Page: Includes input fields for name, email, and password, as well as a "Register" button.
* Login Page: Provides input fields for email and password, along with a "Login" button.
* Profile Page: Features the user's profile picture, bio, and a "Create a New Post" option. Also displays all posts from that specific user.
* Home Page: Displays a feed of posts from all users, including post images, usernames, and descriptions.
* Single Post Page: Shows a single post posted by a user, along with comments and an option for logged-in users to leave a comment.
* Creating a Post Page: Provides options to write a post description, upload a photo, and a button to submit the post.
  
![Screenshot 2023-06-28 at 20 16 28](https://github.com/matea-nikolac/insta-forked/assets/62067357/dec7eb4e-5214-4628-b077-b32cff40bd75)

An ERD was created to define the relationships between backend components in the Instasham project.

![Screenshot 2023-06-28 at 20 45 19](https://github.com/matea-nikolac/insta-forked/assets/62067357/83d61ad8-dd09-4d6c-9a9a-4400272dab09)

We also utilized a Trello board to organize and manage all the project tasks among team members. Each team member had a 'To Do' section for their assigned tasks. An 'In Progress' section tracked active tasks. Completed tasks moved to 'Done - Testing Needed' for testing, and finally to 'Done - Tested' after successful verification.

![Screenshot 2023-06-28 at 21 26 43](https://github.com/matea-nikolac/insta-forked/assets/62067357/4407f699-aba2-4ecd-90f7-0eaa44529376)

## Build Process
As part of my contributions to the group project, I personally implemented the following functionalities:

For the /posts endpoint, I developed two route handlers. The first one, `getPosts`, retrieves all posts from the database and populates the owner and `comments.owner` fields. This allows us to display the associated user and their comments on each post. The second handler, `getSinglePost`, retrieves a specific post based on the provided ID. Similarly, it populates the `owner` and `comments.owner` fields. These handlers ensure that the necessary post information is fetched and sent as JSON responses.

![Screenshot 2023-06-28 at 22 00 21](https://github.com/matea-nikolac/insta-forked/assets/62067357/ad82eeb8-f319-47d8-8a63-a592c0c93838)

## Challenges


## Wins


## Key Takeaways


## Bugs


## Future Improvements

