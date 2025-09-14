# KodeBreaker

A simple Node.js authentication app using Express, MongoDB, JWT, and EJS.

## Features

- User signup and login
- Passwords hashed with bcrypt
- JWT-based authentication
- Dashboard for logged-in users

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) running locally or accessible via URI

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd KodeBreaker
```

### 2. Install dependencies

```sh
cookie-parser dotenv express ejs mongoose jwt bcrypt 
```

```sh
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory. **Do not commit this file to version control.**  
You can use the `.env` example below as a template:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

- Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., `mongodb://localhost:27017/your-app-name`).
- Replace `your_jwt_secret_key` with a strong, random secret string.

### 4. Start MongoDB

Make sure your MongoDB server is running.

### 5. Run the app

```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- [`app.js`](app.js) - Main application file
- [`auth/routes.js`](auth/routes.js) - Authentication routes
- [`middleware/isloggedin.js`](middleware/isloggedin.js) - Authentication middleware
- [`models/user.js`](models/user.js) - User model
- [`views/`](views/) - EJS templates
- [`public/`](public/) - Static assets

## Default Routes

- `/signup` - Register a new user
- `/login` - Login
- `/dashboard` - Protected dashboard (requires login)
- `/logout` - Logout

## Security Notes

- **Never commit your `.env` file or any credentials to version control.**  
  The `.gitignore` already excludes `.env` and `node_modules/`.
- Use a strong, unique value for `JWT_SECRET`.
- Change default database names and secrets before deploying to production.

