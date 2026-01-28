# Book Management System

This is a React-based web application for managing a collection of books. Users can add, view, edit, and delete books stored in Firebase Firestore.

## Deploy Link

- Link :- https://pr-13-firebase-storage.vercel.app/

## Features

- **Add Books**: Add new books with title, author, and price.
- **View Books**: Display all books in a responsive table format.
- **Edit Books**: Update existing book details.
- **Delete Books**: Remove books from the collection.
- **Responsive Design**: Built with Bootstrap for a mobile-friendly interface.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool for fast development and bundling.
- **Firebase Firestore**: NoSQL database for storing book data.
- **Bootstrap**: CSS framework for styling.
- **React Router DOM**: For client-side routing.
- **dotenv**: For managing environment variables.

## Installation and Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd pr-13-firebase-storage
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_DATABASE_URL=your_database_url
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

- Navigate to the "Add Book" page to add new books.
- View all books on the "View Books" page.
- Use the edit and delete buttons to manage existing books.