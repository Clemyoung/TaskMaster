---

# TaskMaster

TaskMaster is a web-based task management application that allows users to efficiently create, view, update, delete, and filter tasks. Users can also search for tasks based on specific keywords. This application leverages MongoDB for data storage and implements secure user authentication using JWT, bcrypt, and Express Validator. Additionally, it includes protection against XSS and SQL injection attacks.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Testing](#testing)
- [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

1. **User Authentication**: Users can register, log in, and authenticate securely.
2. **Task Management**:
   - Create, update, and delete tasks.
   - Each task includes attributes such as title, description, due date, and priority.
3. **Task Filtering**: Filter tasks by priority or due date.
4. **Search Functionality**: Search tasks based on keywords in the title or description.
5. **Responsive UI**: A user-friendly and responsive front-end interface.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Security**: Helmet, express-validator, sanitize-html
- **Testing**: Mocha, Chai, Sinon, Supertest

---

## Getting Started

Follow these instructions to get a copy of TaskMaster up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14+)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas for remote)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/TaskMaster.git
    cd TaskMaster
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and configure the necessary environment variables (see below).

### Environment Variables

Set up the following variables in your `.env` file:

```plaintext
PORT=3000
MONGODB_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
```

---

## API Endpoints

### User Authentication

- **POST** `/users/signup` - Register a new user
- **POST** `/users/login` - Login with existing credentials

### Task Management

- **POST** `/tasks` - Create a new task
- **GET** `/tasks` - Retrieve all tasks (with filtering and search options)
- **GET** `/tasks/:id` - Retrieve a task by ID
- **PUT** `/tasks/:id` - Update a task by ID
- **DELETE** `/tasks/:id` - Delete a task by ID

#### Request and Response Examples

- **Create a Task**:
    - **POST** `/tasks`
    - **Body**:
      ```json
      {
        "title": "Complete project report",
        "description": "Finish the report for project XYZ",
        "dueDate": "2024-12-31",
        "priority": "high",
        "userId": "<User ID>"
      }
      ```

---

## Usage

### Run the Application

To run the application locally:

```bash
npm start
```

The server will start on `http://localhost:3000` (or the port you set in `.env`).

### Testing

TaskMaster includes unit tests for key functions. Run tests using:

```bash
npm test
```

### Security

TaskMaster includes basic security features to ensure data integrity and protection against common attacks:

1. **Input Validation**: Uses `express-validator` to validate user inputs.
2. **XSS Protection**: Uses `sanitize-html` to prevent cross-site scripting.
3. **SQL Injection Protection**: MongoDB inherently protects against SQL injection, and user inputs are sanitized.
4. **Secure Headers**: Uses `helmet` to set secure HTTP headers.

---

## Deployment

### Deploying on Vercel

1. Push your code to GitHub or another repository.
2. Connect your repository to Vercel and configure environment variables.
3. Deploy the application via Vercel.

### Deploying on Fly.io

1. Install the Fly CLI and sign in.
2. Initialize your project:
    ```bash
    flyctl launch
    ```
3. Deploy using:
    ```bash
    flyctl deploy
    ```

Ensure that your environment variables are set in the Fly.io dashboard.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Acknowledgments

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Helmet](https://helmetjs.github.io/)
- [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)

---

Happy task management with TaskMaster!
