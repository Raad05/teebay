# TeeBay - An Online Buying/Renting Platform 🌐

TeeBay is an online plaform to buy, sell and rent products of different niches from verified users.

- Demo link:

Note: The overall project is created maintaining best software practices and code reusability in order to prevent redundancy within the codebase.

## Project Setup

### Frontend

```yaml
# Navigate to ./frontend

# Install dependencies
npm install

# Start the server on localhost:5173
npm run dev
```

### Backend

```yaml
# Navigate to ./backend

# Install dependencies
npm install

# Start the server on localhost:5000
npm run start

# Command for ORM migration
npm run migrate

# GraphQL endpoint
localhost:5000/graphql

Note: Make sure to have PostgreSQL database server setup
```

## Features

- Users can signup to the plaform and login.
- Users can view all the available products.
- Users can view all the products owned/created by him/her.
- Users can buy new products.
- Users can rent products for a ceratain period of time.

## Project Structure

### Frontend:

- The overall stucture of the frontend relies on the main layout component of the application.
- Every component is a child component of the Main.jsx component which ensures code reusability.
- The routes of pages are defined within the routes.jsx component using react-router-dom.

### Backend:

- The backend of the project follows MVC (Model-View-Controller) architecture ensuring an organized file structure.
- The server configuration can be found within the root server.js file.
- The project contains well-structured folders namely controller, db, graphql and prisma having controller files for each entity, database configuration for prisma, graphql schema with resolver functions and prisma schema model for postgreSQL respectively.

## Tech Stack

### Frontend:

- React JS
- React Router DOM
- Tailwind CSS with Daisy UI
- Apollo Client

### Backend:

- Node JS
- Express JS
- Apollo Server
- Prisma (ORM)

### Database:

- PostgreSQL (RDBMS)

## Features yet to be implemented

- The renting functionality is yet to be integrated.
- The API calls of the product update functionality is implemented. The frontend interaction is yet to be completed.
- The API calls of the transaction history for each user is implemented but it needs to be integrated with the frontend.
- Apollo Cache is yet to be implemented.

## Feedback

- There is room for making authentication and authorization methods more secure using JWT.
- Testing of the project is required for better performance and handling more corner cases.
- The database model can be improved further.
