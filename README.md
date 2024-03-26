Travel Explorer App ReadMe
Description

I completed the Travel Explorer App as part of my coursework using Vue.js for the frontend, Node.js for the backend, and MongoDB for the database. The project aims to provide users with a platform to discover and plan their trips. This ReadMe will walk you through the key aspects of the project.



Deployment link

https://github.com/Behzad1983Rad/Unit2-CityScout-Backend
https://github.com/Behzad1983Rad/Behzad1983Rad-Unit2-CityScout-FrontEnd

Getting Started/Code Installation

To set up and run the Travel Explorer App locally, ensure you have the following prerequisites installed:
Node.js: A JavaScript runtime for executing server-side code.
Vue.js: A JavaScript framework for building user interfaces.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
Holidayapi: An API for retrieving holiday data.


Timeframe & Working Team (Solo/Pair/Group)

Timeframe: Completed over a span of one week.
Working Solo: I developed this project independently.



Technologies Used
Frontend: Vue.js
Backend: Node.js
Database: MongoDB
Authentication: Google Authenticator
External APIs: Holidayapi

Brief

The Travel Explorer App is a web application designed to inspire travel enthusiasts, helping them plan and manage their trips effortlessly. Built using a tech stack comprising Node.js, Vue.js, MongoDB, and Google Authenticator, this project offers a seamless and engaging travel exploration experience.
Features:
User Authentication:
Utilizes Google Authenticator for secure and convenient user authentication.
Each user can sign in with their Google credentials, providing a personalized experience.
Trip Exploration:
Users can discover exciting travel destinations with the "Discover" feature.
The app retrieves holiday data using the Holidayapi to enhance trip planning.
Create, Read, Update, Delete (CRUD) Operations:
Implements CRUD functionality for managing trip details.
Users can add new trips, edit existing ones, view trip details, and remove trips from their list.
Different Workspaces:
Provides a unique workspace for each authenticated user.
Users can customize and organize their trips independently.
Tech Stack:
Frontend:
Vue.js: A progressive JavaScript framework for building user interfaces.
Various components and views enhance the user experience.
Backend:
Node.js: A JavaScript runtime for building scalable server-side applications.
MongoDB: A NoSQL database for efficient data storage.
Mongoose: An ODM library for MongoDB and Node.js for smooth database interactions.
Deployment:
The app is deployable on platforms like Netlify (frontend) and other cloud providers (backend). However, due to CORS policy issues during Netlify deployment, further troubleshooting may be required.

Future Improvements:
Integration of Email APIs:
Implement an additional email API (e.g., Mailchimp) for marketing and trip reminder emails.
Hotel Information:
Integrate an API to provide users with hotel information related to their trips.
Enhanced User Experience:
Continuously improve the visual design and user interface for a more immersive experience.
The Travel Explorer App aims to not only assist users in planning their journeys but also create a platform that evolves with the user's travel interests and needs. Whether discovering new destinations or managing existing trips, the app provides a dynamic and enjoyable travel exploration journey.








Planning

During the planning stage, I took the following steps:
Conducted sketches for the user interface.
Created wireframes for the frontend UI.
Designed an Entity-Relationship Diagram (ERD) for the database.
Utilized a project management tool (Trello) to plan the sprint, allocate tickets, and manage responsibilities.
Assigned tasks in a group project, ensuring clear ownership of different code elements.




Build/Code Process
Backend (Node.js with Express and Mongoose):
Install Dependencies:
Make sure you have Node.js and npm installed on your machine.
Run npm install to install the required dependencies specified in your package.json file, including Express, Mongoose, dotenv, cors, body-parser, and holidayapi.
Create a MongoDB Database:
Make sure you have MongoDB installed and running.
Set up a MongoDB database either locally or on a cloud service.
Obtain the connection URL for your MongoDB database.
Environment Variables:
Create a .env file in the root of your backend project.
Add the following variables:
makefile
Copy code
PORT=4000
DATABASE_URL=<Your MongoDB Connection URL>
HOLIDAY_API_KEY=<Your Holiday API Key>


Code Execution:
Execute your backend server by running the command: npm start or node your-server-file.js.
The server will run on the specified port, and you should see a message like "Listening on port: 4000" in the console.
Frontend (Vue.js):
Install Dependencies:
Navigate to your frontend project directory.
Run npm install to install the required dependencies specified in your package.json file, including Vue Router, vue3-cookies, and other dependencies.
Environment Variables:
Create a .env file in the root of your frontend project.
Add the following variables:
arduino
Copy code
VITE_API_URL=http://localhost:4000


Code Execution:
Execute your frontend development server by running the command: npm run dev.
Your Vue.js application will be accessible on the specified development port (usually 3000), and you should see a message like "Server running at http://localhost:3000/".
Access Your Application:
Open your web browser and go to the specified URL for your frontend (http://localhost:3000/ by default).
You should be able to access and interact with your travel planner application.
Note:
Ensure that your MongoDB database is running and accessible.
Make sure to replace placeholder values such as <Your MongoDB Connection URL> and <Your Holiday API Key> with your actual MongoDB connection URL and Holiday API key.
Consider deploying your application for production using appropriate deployment strategies for both the backend and frontend.
This process assumes a development environment. For production, additional considerations like security, deployment, and performance optimization should be taken into account.





Challenges

Connecting to Holiday API:
Technical Challenges:
API Integration Complexity: Integrating the Holiday API required understanding and implementing the API's documentation.
Data Targeting: Extracting specific and relevant data from the API response posed challenges.
Problem Solving:
In-Depth Documentation Review: Overcame challenges by thoroughly reviewing the API documentation to comprehend the endpoints and data structures.
Trial and Error: Experimented with different approaches to pinpoint and extract the necessary holiday data.
Google Authentication:
Technical Challenges:
User-Specific Workspaces: Designing a system where each user has access only to their data and workspace.
CORS Policy Issues: Encountered Cross-Origin Resource Sharing (CORS) policy problems during deployment on Netlify.
Problem Solving:
User Authentication Configuration: Implemented user authentication through Google Authenticator, ensuring secure and unique logins for each user.
CORS Policy Troubleshooting: Attempted various solutions to resolve CORS policy issues during Netlify deployment, including adjusting server configurations and exploring alternative deployment options.
Wins
Implemented a seamless authentication process using Google Authenticator.
Developed a responsive and visually appealing user interface.
Key Learnings/Takeaways

Improved proficiency in Vue.js and Node.js.
Gained valuable insights into project management using Trello.
Enhanced understanding of database interactions with MongoDB.
Bugs

CORS policy issues during deployment on Netlify, unresolved due to external constraints.
Future Improvements
Integration of Email APIs:
Add Mailchimp to send marketing emails and trip reminders.
Implement a system for users to opt-in for email notifications.
Hotel Information API:
Integrate an additional API to provide hotel information for user trips.
Resolve CORS policy issue during deployment.

By providing a comprehensive overview of the Travel Explorer App, I aim to showcase my skills, problem-solving abilities, and continuous learning in the field of web development. Feel free to explore the code repository for a more in-depth understanding. If you have any questions or feedback, please reach out!







