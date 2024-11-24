# Foodie *(MERN Stack Food Delivery Website)*

## 📋 Project Overview
This is a dynamic food delivery website built using the MERN stack (MongoDB, Express, ReactJS, NodeJS). The project integrates a fully functional frontend, backend and admin panel. It also incorporates Stripe for seamless payment processing.

## 🌟 Features
- **Frontend** : Built with ReactJS for a responsive and user-friendly interface.
- **Backend** : Developed using Express and Node.js to manage APIs and data flow.
- **Database** : MongoDB is used for efficient data storage and retrieval.
- **Admin Panel** : Includes functionalities to manage menu items and orders.
- **Stripe Integration** : Secure and smooth payment processing.
- **Menu Items** : Predefined categories such as Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, and Noodles.
- **Dynamic Content** : Data-driven menu display with attractive images.

## 🚀 Tech Stack
- **Frontend** : ReactJS
- **Backend** : ExpressJS, Node.js
- **Database** : MongoDB
- **Payment Gateway** : Stripe
- **State Management**: Context API

## 📂 Folder Structure
```plaintext
root/
│
├── frontend/            # ReactJS-based frontend
│   ├── public/          # Static assets (e.g., favicon, etc.)
│   ├── src/             # Source code
│       ├── assets/      # Images, icons, and other static resources
│       ├── components/  # Reusable React components
│       ├── context/     # Context API for global state management
│       ├── pages/       # Page-level React components
│       ├── App.jsx      # Main application file
│       ├── main.jsx     # Entry point for React app
│
├── backend/             # Node.js + Express backend
│   ├── config/          # Configuration files (e.g., database connection)
│   ├── controllers/     # Request handlers for routes
│   ├── middleware/      # Middleware (e.g., authentication)
│   ├── models/          # Mongoose schemas for MongoDB
│   ├── routes/          # API route definitions
│   ├── uploads/         # Directory for uploaded files/images
│   ├── .env             # Environment variables file
│   ├── server.js        # Main server file
│
├── admin/               # Admin panel
│   ├── public/          # Static assets (e.g., index.html, favicon, etc.)
│   ├── src/             # Source code
│       ├── assets/      # Images, icons, and other static resources
│       ├── components/  # Reusable React components for admin
│       ├── pages/       # Page-level React components for admin
│       ├── App.jsx      # Main application file for admin
│       ├── main.jsx     # Entry point for React admin app
│
├── README.md            # Project documentation
├── package.json         # Project dependencies and scripts
└── package-lock.json    # Lockfile for dependencies
```
