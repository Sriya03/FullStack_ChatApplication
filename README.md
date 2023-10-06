# Full Stack Chat Application with ChatEngine.io

## Project Overview

Welcome to the Full Stack Chat Application built using ChatEngine.io! This project demonstrates the implementation of a real-time chat application with a complete stack, including both the frontend and backend components.

### Features

- Real-time messaging
- User authentication
- Multiple chat rooms
- Responsive design

## How to Use

Follow these steps to clone and run the application locally:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm
- Git
- ChatEngine.io Account (To create and store users)

### Setup a Chat Engine server

Go to [Chat Engine](https://chatengine.io) to setup your own chat server.

- Click "New Project" and follow the steps
- Your `Project ID` and `Private Key` will be required for API calls

### Clone the Repository

```bash
git clone https://github.com/Sriya03/FullStack_ChatApplication.git
cd folder_name_given
```

## Install dependencies

### For backend:
```
cd backend
npm init
npm install axios express cors
npm install nodemon
Add this command in scripts of package.json: "start":"nodemon index.js"
Add your secret key in index.js
npm run start

```

### For Frontend
```
cd frontend
npm install
npm run
```
Visit http://localhost:3000 in your browser to view the chat application.

## Project Structure
The project is structured into two main directories:

frontend: Contains the client side code built with React.<br>
backend: Contains the backend code using Express.js and ChatEngine.io.
Technologies Used
React.js
Node.js
Express.js
ChatEngine.io

Feel free to reach out if you have any questions or issues! Happy coding!