Amber-alert PRO
Amber-alert PRO is a web application designed to help spread awareness and provide timely information about missing persons. The application allows users to report missing persons, view missing persons in their area, and contact local police stations. The app is built using the MERN stack (MongoDB, Express, React, and Node.js) and styled with Tailwind CSS.

Table of Contents
Amber-alert PRO
Table of Contents
Project Overview
Features
Technologies Used
Setup Instructions
1. Prerequisites
2. Clone the Repository
3. Install Dependencies
4. Run the Application
Folder Structure
Screenshots
API Endpoints
Contributing
License

Project Overview
Amber-alert PRO is a web application aimed at improving public awareness of missing persons. This app allows users to:

Report missing individuals with detailed information and attach images.
View a list of reported missing persons based on their location.
Contact local police authorities directly through the app.
Register and sign in to receive alerts and notifications.
This project was developed as part of the ALX Webstack specialization final portfolio project, summarizing the skills acquired throughout the program.

Features
Report a Missing Person: Users can submit information and upload photos of missing persons.
View Missing Persons: A list of missing persons is available, filtered by location.
Contact Police: Direct contact information for nearby police stations is available for users.
User Authentication: Sign up and login functionality allows users to manage their profile and alert preferences.
Responsive Design: The app is fully responsive and works well on both desktop and mobile devices.
Real-time Notifications: Alerts for missing persons in your area (optional feature based on team implementation).
Technologies Used
Frontend:
React.js: JavaScript library for building the user interface.
React Router: For managing navigation and routing within the app.
Tailwind CSS: Utility-first CSS framework for styling.
Backend:
Node.js & Express.js: For building the RESTful API to handle requests and manage data.
MongoDB: NoSQL database for storing missing person reports and user data.
Deployment (Optional):
Netlify/Vercel: For frontend deployment.
Heroku/Render: For backend deployment.
Setup Instructions
1. Prerequisites
Ensure you have the following installed:

Node.js (version 12.x or higher)
npm or yarn (npm comes bundled with Node.js)
MongoDB (if setting up the backend)
2. Clone the Repository
Clone the repository to your local machine using the following command:


git clone https://github.com/ntswakikekana/Amnber-alert-pro.git
Navigate to the project directory:


cd amber-alert-pro
3. Install Dependencies
Install the required packages for both frontend and backend
# Navigate to the frontend directory
cd client
npm install

# If using a backend, install backend dependencies
cd ../server
npm install
4. Run the Application
To run the React frontend locally:

bash
Copy code
cd client
npm start
This will start the development server at http://localhost:3000.

If you have a backend, start the backend server:


cd ../server
npm start
Your backend will run at http://localhost:5000 (or your defined port).

Folder Structure
Here’s the basic folder structure of the project:

amber-alert-pro/
├── client/                   # React frontend
│   ├── public/               # Public assets (index.html, images, etc.)
│   ├── src/                  # Source code for the frontend
│   │   ├── components/       # Reusable React components (NavBar, etc.)
│   │   ├── pages/            # Individual pages (Home, ReportMissing, etc.)
│   │   ├── App.js            # Main React app component
│   │   └── index.js          # React entry point
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── package.json          # Frontend dependencies
├── server/                   # (Optional) Node.js backend
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes (e.g., missing persons, users)
│   ├── app.js                # Main server entry point
│   └── package.json          # Backend dependencies
└── README.md                 # Project documentation
Screenshots

