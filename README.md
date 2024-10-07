# **Airbnb (Server Side)**

## Hotel Booking Application

This is the server-side repository for a hotel booking application inspired by Airbnb. The backend is built with Node.js, Express.js, and MongoDB to provide an API for managing hotel information and bookings. The application offers hotel categorization, filtering, and searching capabilities.

## Features

- Load all available hotels.
- Filter hotels by category (Icons, Beach, Amazing Views).
- Search hotels by destination, check-in/check-out dates, and guest requirements (adults, children, infants, pets).

## API Endpoints

### Hotel Collection API

1. **Get All Hotels**
   - **Endpoint**: `/hotels`
   - **Method**: `GET`
   - **Description**: Retrieves all hotels from the database.
   - **Sample Code**:
     ```javascript
     app.get('/hotels', async (req, res) => {
       const cursor = hotelCollection.find();
       const result = await cursor.toArray();
       res.send(result);
     });
     ```

2. **Get Hotels by Category and Search Parameters**
   - **Endpoint**: `/hotels/:category`
   - **Method**: `GET`
   - **Description**: Retrieves hotels based on their category and search parameters (destination, check-in/out dates, guest details).
   - **Parameters**: 
     - **Path Parameter**: `category` (e.g., `icons`, `beach`, `amazing-views`)
     - **Query Parameters**:
       - `destination`
       - `checkInDate`
       - `checkOutDate`
       - `guests` (contains `adults`, `children`, `infants`, `pets`)

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Tools**: Vite, Netlify

---

## API

Vercel: https://hotel-booking-server-brown.vercel.app/

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

---

## Folder Structure

```
/server
  ├── index.js          # Entry point of the application
  ├── package.json      # Dependencies and scripts
  ├── .env              # Environment variables
  └── README.md         # Project documentation
```

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nadim-Nion/hotel-booking-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```
     MONGODB_URI=<your_mongo_connection_string>
     ```

### Running the Server

To start the server, run:

```bash
npm start
```

The server will run on `http://localhost:5000`.

Absolutely, here's the section on commits with a potential improvement

---

## Commits

This repository adheres to a structured commit message convention to enhance readability and maintainability. Here's an overview of the key commit types:

- **feat:** Introduces a new feature to the application.
- **fix:** Addresses a bug or issue identified in the codebase.
- **docs:** Encompasses changes made to documentation, such as updates, additions, or corrections.
- **style:** Covers formatting adjustments, whitespace changes, or fixing minor inconsistencies like missing semicolons.
- **refactor:** Represents code structure improvements without altering functionality. This can involve code organization, renaming variables or functions, or improving readability.
- **test:** Introduces new tests or updates existing tests to ensure code quality and maintainability.
- **chore:** Encompasses changes that don't directly affect the application's functionality, such as updating build tasks, package manager configurations, or dependency versions.

**Optional Improvement:**

Consider adopting a more comprehensive commit message convention like Conventional Commits ([https://www.conventionalcommits.org/en/v1.0.0-beta.4/](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)). This approach provides a standard format for commit messages, including type, scope (optional), and a clear description of the change, making it easier to generate changelogs, automate workflows, and collaborate effectively.

By following these guidelines and potentially adopting a more detailed convention, you'll ensure clear and consistent commit messages that benefit you and your team in the long run.## Contributions

Feel free to contribute to this project! If you have any suggestions or improvements, please fork the repository, make your changes, and submit a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Available Scripts

- **`npm run dev`**: Start the application in development mode.
- **`npm run build`**: Build the application for production.

---

## Deployment

The frontend of this project is deployed on **Netlify**. For your own deployment, follow these steps:

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder on Netlify.

---


## Tech Stack

**Client:** React+Vite, React Router, Tailwind CSS, Daisy UI, Axios JS

**Server:** Express.js, Node.js

**Database:** MongoDB

**Tools:** Vite, Vercel, npm, Netlify



## FAQ

#### Is this website reponsible?

Answer : Yes, the full website is responsive for the all devices (Desktop, Tablet and Phone)

#### Is this website store data to the database?

Answer : I have stored all the data in MongoDB.

## 🚀 About Me
Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at the Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022. I am expertise in the following skills:

* React

* Express.js 

* Node.js 

* MongoDB

* JWT

* Stripe

* Vite

* React Router

* Firebase (Authentication & Hosting)

* Vercel

* JavaScript

* Advanced JavaScript

* Daisy UI 

* Bootstrap

* Tailwind

* HTML5

* CSS3

* Media Query

I have built multiple projects using these skills. You are invited to my GitHub profile to know about my projects and don't forget to give a star to my projects.

