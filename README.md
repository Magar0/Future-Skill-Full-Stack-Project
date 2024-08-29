# `Future Skill Full Stack project`

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)

## General info
<img src="https://github.com/user-attachments/assets/42ab35b8-bb91-4ecc-9e83-1345c3bd76ff" height="350" >

* Developed a feature-rich Full Stack App using the MERN stack (MongoDB, Express.js, React Js, Node.js)
* Developed a responsive platform accross all devices including mobiles & tablets.
* Enabled extensive user interaction with adding, creating ,deleting cards.
* Leveraged Node.js, Express.js and other technologies for a robust and scalable backend foundation.

## Technologies
* React Js
* Tailwind CSS
* Axios.
* Node JS., Express JS.
* Mongo DB
   
## Setup
1. Set up environment variables:
   - Create a `.env` file in the `client` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
     REACT_APP_URL="your backend URL"
     ```

   - Create a `.env` file in the `server` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
     PORT="port number on which you want to run" (default value "4000")
     MONGODB_URI="your_mongo_uri/database name"
     ```
2. Install dependencies and run server:
#### Frontend
```
 cd ../client
 npm install
 npm start
```
#### Backend
```
cd ../server
npm install
npm start
```

## API Endpoints

## API Endpoints

backend live url: https://future-skill-full-stack-project.vercel.app/

| Endpoint | Description | Method | Request Body | Response Format (Example) |
|----------|-------------|--------|--------------|----------------------------|
| `/` | Welcome message | GET | None | JSON (message: string) |
| `/cards` | Get all card | GET | None | JSON (Card Array) |
| `/cards` | Create card | POST | `{title:string, description:string}` | JSON |
| `/cards/:title` | get specific card | GET | None | JSON | 


