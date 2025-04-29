# E-Commerce Website

A full-stack e-commerce web application featuring separate interfaces for customers (frontend), administrators (admin), and the server-side logic (backend).

**Note:** This project is currently under development. **Currently, only the frontend is working.**

## Technologies Used

- **Backend:** Node.js, Express.js , npm
- **Frontend:** Vite, React, Tailwind CSS, npm
- **Admin Panel:** Vite, React, Tailwind CSS, npm

## Project Structure

The project is organized into three main directories:

- `backend/`: Contains the server-side code, API endpoints, and database interactions.
- `frontend/`: Contains the customer-facing user interface code.
- `admin/`: Contains the administrative interface code for managing the store.

## Setup and Installation

To run this project locally, you need to install dependencies and start the development servers for each part separately.

### Prerequisites

- Node.js (v18 or later recommended)
- npm (usually comes with Node.js)

### Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the backend server (check `package.json` for the exact script, often `start` or `dev`):
    ```bash
    npm run start # or npm run dev
    ```

### Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server (Vite typically uses `dev`):
    ```bash
    npm run dev
    ```
    This will usually open the frontend application in your default web browser.

### Admin Panel Setup

**Note:** The admin panel is currently under development and may not be fully functional.

1.  Navigate to the admin directory:
    ```bash
    cd admin
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the admin panel development server (Vite typically uses `dev`):
    ```bash
    npm run dev
    ```
    This will usually open the admin application in your default web browser on a different port than the frontend.

## Contributing

(Optional: Add guidelines for contributing if this is an open project).

## License

(Optional: Add license information).
