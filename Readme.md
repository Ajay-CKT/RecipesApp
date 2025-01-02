# Recipes App

## Table of contents

| S. No | Titles                                |
| ----- | ------------------------------------- |
| 1.    | [Task Description](#task-description) |
| 2.    | [Functionalities](#functionalities)   |
| 3.    | [Techstacks Used](#techstacks-used)   |
| 4.    | [Installation](#installation)         |
| 5.    | [API Endpoints](#api-endpoints)       |
| 6.    | [Deployment](#deployment)             |

## Task Description

- To develop a complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose.
- To follow the MVC (Model, Views, Controllers) pattern for the application.

## Functionalities

- There functionalities that are acheived in this application are,

  1. Create a new recipe.
  2. Retrieve all recipes.
  3. Retrieve a single recipe by ID.
  4. Update a recipe by ID.
  5. Delete a recipe by ID.

# Techstacks Used

- Node.js
- Express.js
- Mongoose (MongoDB)
- Postman

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Ajay-CKT/RecipesApp.git
cd RecipesApp
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

- Create a .env file in the root directory and add:

```plaintext
mongoDbURL = <Your MongoDB Connection String>
PORT = 8080
```

4. Start the server:

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| POST   | /        | Create a new recipe     |
| GET    | /        | Retrieve all recipes    |
| GET    | /:id     | Retrieve a recipe by ID |
| PUT    | /:id     | Update a recipe by ID   |
| DELETE | /:id     | Delete a recipe by ID   |

## Deployment

The app is deployed using Render. Access it here: [Recipes App]()
