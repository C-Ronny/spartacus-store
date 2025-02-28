# Spartacus-Store

- This project is a Spartacus-Inspired E-Commerce Store built with Angular, Node.js, and Supabase
- It uses frameworks from the SAP (Systems, Applications, and Products in Data Processing) Commerce Cloud platform like Spartacus for the frontend which interacts with thte database using API's

Features:
- Product Listing Page: Fetch products from Supabase and display them.
- Shopping Cart: Users can add/remove items.
- Checkout Page: A simple form to collect user details.
- Responsive Design: Works well on mobile and desktop.



















### Lessons Learnt
- Supabase acts as your backend by handling the database and providing an API for your Angular frontend to fetch data (don't need to build in Node.js anymore)

Reason for creating separate service folder:
- Creates a reusable service to manage all interactions with Supabase (fetching products, users, etc.).
- Keeps API logic separate from the components, promoting clean and maintainable code.

async
- uses '.await' keyword to pause execution at specific points until a Promise resolves
- keyword in JavaScript/TypeScript used to define asynchronous functions
- Handles operations that take time to complete without blocking the rest of your code from running 