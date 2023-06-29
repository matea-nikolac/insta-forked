# insta
<img width="1208" alt="Screenshot 2023-06-28 at 10 57 14" src="https://github.com/matea-nikolac/insta-forked/assets/62067357/f0e31045-0679-44d1-bfc4-660201fb1519">

## Description
This was my third project for the General Assembly's Software Engineering Immersive course. The goal of the project was to create a simplified version of an Instagram-like app using the MERN (MongoDB, Express.js, React, Node.js) stack.

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
* React
* JSX
* Axios
* Node
* Express
* MongoDB
* Mongoose
* SASS
* Bootstrap

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

### Backend

I started my contributions to the project by working on the backend. 

For the /posts endpoint, I developed two route handlers. The first one, `getPosts`, retrieves all posts from the database and populates the owner and `comments.owner` fields. This allows us to display the associated user and their comments on each post. The second handler, `getSinglePost`, retrieves a specific post based on the provided ID. Similarly, it populates the `owner` and `comments.owner` fields. These handlers ensure that the necessary post information is fetched and sent as JSON responses.

As part of my contributions to the User module in our project, I implemented route handlers for the following functionalities related to the /posts endpoint: retrieving all posts (getPosts), fetching a specific post by ID (getSinglePost), creating new posts (createPost), and deleting posts (deletedPost). These handlers ensure proper data retrieval, creation, and deletion, and incorporate error handling to provide accurate responses. 

![Screenshot 2023-06-28 at 22 00 21](https://github.com/matea-nikolac/insta-forked/assets/62067357/ad82eeb8-f319-47d8-8a63-a592c0c93838)

![Screenshot 2023-06-29 at 13 10 19](https://github.com/matea-nikolac/insta-forked/assets/62067357/0cd53aec-54dc-4b0f-9592-d08b4b13fcda)

![Screenshot 2023-06-29 at 13 09 29](https://github.com/matea-nikolac/insta-forked/assets/62067357/4fe2bae5-061f-4af2-93b2-d43ae6b17e99)

Additionaly, I created a script that seeds the database with initial data. The script establishes a connection to the MongoDB database, drops existing collections, and creates new users and posts based on predefined data. The posts are associated with random users from the created user pool. Once the seeding process is complete, the database connection is closed. This script enables the initialization of the application's database with sample data for testing and development purposes.

![Screenshot 2023-06-29 at 14 04 45](https://github.com/matea-nikolac/insta-forked/assets/62067357/69e4a654-059d-4743-9611-78e66ee1731d)

I implemented user authentication functionality in the project. This includes route handlers for user registration and login. 

The `registerUser` handler creates a new user based on the provided data and returns a JSON response with a welcome message. 
![Screenshot 2023-06-29 at 14 18 30](https://github.com/matea-nikolac/insta-forked/assets/62067357/84fc0a6e-1d6d-4edb-bf35-43a85d006259)

The `loginUser` handler validates the user's credentials, generates a JSON Web Token (JWT) for authentication, and sends it as a response along with a welcome message upon successful login. 
![Screenshot 2023-06-29 at 14 18 57](https://github.com/matea-nikolac/insta-forked/assets/62067357/41b3b7e2-5d12-4cbd-8103-5e6a30653a2c)

These features enhance the project's security and user experience by allowing users to register, log in, and receive authentication tokens for accessing protected routes.

Furthermore, I created a `secureRoute` middleware that safeguards specific routes, allowing access only to authenticated users. This middleware validates the presence of an authorization header and verifies the included JWT token. If the token is valid, it retrieves the corresponding user from the database and adds it to the request object as `req.loggedInUser`. This implementation enhances the project's security by preventing unauthorized access to protected routes.

![Screenshot 2023-06-29 at 14 30 07](https://github.com/matea-nikolac/insta-forked/assets/62067357/4a36af7f-b877-4108-b796-a13711c76fff)

### Frontend
To kick off the frontend implementation, my first task was to create the `EditPost` component. This component allows authenticated users to edit the caption of their own posts. To achieve this functionality, I utilized various libraries, including `react-router-dom` for streamlined routing and `useState` for efficient state management. The code snippet below showcases the `handleSubmit` function, which plays a crucial role in sending an HTTP PUT request to update the post and subsequently navigating to the updated post page.

![Screenshot 2023-06-29 at 15 01 09](https://github.com/matea-nikolac/insta-forked/assets/62067357/8bd2cb55-9d43-42c1-bf7d-bea8fe282801)

I created the `PageNavbar` component, that displays different links based on the user's authentication status, allowing access to the home page for both authenticated and non-authenticated users. Authenticated users can also access their profile and log out, while non-authenticated users can navigate to the login and registration pages.

![Screenshot 2023-06-29 at 15 41 31](https://github.com/matea-nikolac/insta-forked/assets/62067357/e0f6cea7-2c17-4d98-86d1-13748719e082)

I proceeded with creating the auth.js file, which contains functions related to user authentication. It provides methods to get and set the authentication token in local storage, decode the token payload, check the expiration time of the token, handle user logout by removing the token, set headers with the token for API requests, and verify if the user is the owner of a post based on the token payload. These functions are used to implement authentication and authorization features in the application.

![Screenshot 2023-06-29 at 16 15 57](https://github.com/matea-nikolac/insta-forked/assets/62067357/991ba226-fc5d-482b-b31a-36306400bc5a)

At the final stages of the project, I added two components to enhance the user experience. The `PageNotFound` component displays a "Page Not Found" message when a user navigates to a non-existent page. The `SpinnerComponent` displays a loading spinner while the app fetches data or performs tasks. 

Additionally, I created content for the app by sourcing images from Pinterest and generating captions using ChatGPT. Finally, I collaborated with teammates to address any remaining issues, such as bug fixes and ensuring proper synchronization between components.

## Challenges
The project was executed smoothly with minimal challenges, thanks to the outstanding organization and collaboration of the team members. Effective communication and coordination contributed to a seamless development process, allowing us to deliver the project successfully.

## Wins
The project was a great success! Our team collaborated exceptionally well, resulting in a fully functional app with a strong backend and a beautiful frontend design that looks clean and polished.

## Key Takeaways
These are the key learnings from the project:

* Daily standups were highly beneficial for our team as they allowed us to support each other, brainstorm ideas and celebrate achievements.
* Trello proved to be a valuable tool for managing our workload, keeping track of tasks, and getting an overview of the project's overall progress.
* Through this project, we gained confidence in developing a complete application with CRUD (Create, Read, Update, Delete) functionalities.

## Bugs
No significant bugs were identified during the project.

## Future Improvements
Some potential future improvements for the project are:

* Adding a like button for posts
* Ordering the home feed based on the number of likes
* Implementing the ability to edit or delete comments
* Enhancing the navigation bar by replacing text with icons
* Allowing users to add a location to their posts

