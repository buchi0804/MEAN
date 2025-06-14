# Electronics Sales Dashboard (MEAN Stack)

This project is an Electronics Sales Dashboard built with the MEAN stack (MongoDB, Express.js, Angular, Node.js).

## Structure
- `backend/` — Node.js + Express API server (connects to MongoDB)
- `frontend/` — Angular app (dashboard UI)

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)
- Angular CLI (`npm install -g @angular/cli`)

### Backend Setup
1. Open a terminal in the `backend` folder:
   ```sh
   cd backend
   npm install
   # To start the server (after code is added):
   node index.js
   ```

### Frontend Setup
1. Open a terminal in the `frontend` folder:
   ```sh
   cd frontend
   npm install
   ng serve
   ```

### Development
- The backend will run on `http://localhost:3000` (default).
- The frontend will run on `http://localhost:4200` (default).

## Features
- Dashboard with summary cards (Total Sales, Orders, Categories, Customers)
- Bar charts (Sales by Category, Sales by Region)
- Recent Sales table
- Add Sale form

---

You are ready to start building your Electronics Sales Dashboard!

---

# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
