# jathinsomanna_s68_skinLove
 E-Commerce Platform Development: Full-Stack MERN Application (Skincare Store)
Project Overview
This project involves building a fully functional skincare e-commerce platform using the MERN stack (MongoDB, Express, React, Node.js). The platform will allow users to register, browse skincare products, add items to their cart, manage orders, and more. Admins and skincare brand sellers can also manage their products and view orders.
The application is divided into two main sections:
Frontend (React)


Backend (Node.js + Express + MongoDB)



Technologies Used
🖥️ Frontend:
React – Interactive user interface


Tailwind CSS – Responsive, utility-first styling


React Router – Page navigation


Axios – Making API calls


🔧 Backend:
Node.js + Express – RESTful APIs


MongoDB – NoSQL database for users, products, orders


Mongoose – MongoDB ODM


JWT – Secure user authentication


Bcrypt.js – Password encryption


Multer – Image upload handling (for product images)



Frontend Pages/Components
Login Page


Sign Up Page


Forgot Password Page


Home Page – Displays a grid of featured skincare products


Product Detail Page – Individual product description and reviews


Cart Page – Selected skincare items with quantity, subtotal, and total


Profile Page – User info and skincare preferences


Order History Page


Address Page – Shipping and billing addresses


Payment Page


Order Confirmation Page


Error Page (404/500)



Backend Endpoints/Features
👤 User Authentication:
POST /signup – Register new user


POST /login – Login & receive JWT


POST /forgot-password – Reset password


GET /profile – View user info


POST /address – Add shipping address


GET /address – Retrieve saved addresses


🧴 Product Management (Admin/Seller):
POST /product – Add new skincare product


GET /products – View all skincare products


GET /product/:id – View specific product details


PUT /product/:id – Edit product info


DELETE /product/:id – Delete a product


🛒 Cart and Order Management:
POST /cart – Add item to cart


GET /cart – View cart contents


PUT /cart/:id – Update cart item


DELETE /cart/:id – Remove cart item


POST /order – Place an order


GET /orders – View past orders



🧱 Key Milestones
Frontend Development:
Login Page – Milestone 2 ✅


Product Pages (Home + Cards) – Milestone 8 ✅


Product Form – Milestone 9 ✅


Product Management UI – CRUD for sellers


Cart Management – Add, edit, and delete items


Backend Development:
User Authentication – JWT + bcrypt


Product API – Full CRUD for admins/sellers


Cart API – Manage user cart


Order API – Order placement and retrieval



💳 Payment Integration
Stripe or PayPal for secure transactions


On successful order placement:


Payment processing


Store order in database


Send confirmation email



🔧 Additional Features
Admin Dashboard – Overview of users, orders, and all products


Seller Dashboard – Manage skincare listings and view orders


Security Enhancements:


HTTPS communication


Role-based authentication (User, Admin, Seller)


Rate limiting, CSRF, and XSS protection



🏗️ Detailed Architecture
Frontend:
App.js – Central router for all views
 Components:
Navbar.jsx – Persistent header with links and cart


Login.jsx, Signup.jsx – Auth screens


ProductCard.jsx – Skin product preview layout


CartComponent.jsx – Cart item list with editable quantities


State Management:
useState, useEffect – Local state


Redux or Context API – Global cart, user, and auth state



Backend:
Models:
ProductModel.js
 Fields: name, price, type (serum, moisturizer), ingredients, description, skin types, image URL, tags, sellerId


UserModel.js
 Fields: email, password, name, role (user/admin/seller), addresses


OrderModel.js
 Fields: userId, products, totalPrice, paymentStatus, shippingAddress, status


Controllers:
Handle business logic, validation, and responses


Routes:
Auth, product, cart, and order operations



Middleware:
JWT authentication middleware


Centralized error handler



 Possible Expansions
Wishlist – Save products for later


Search & Filters – By product type, skin concern, price range, etc.


Product Reviews & Ratings – Users can rate and review skincare items


Email/In-App Notifications – For order updates, new arrivals


Admin Order Management – View and update shipping status (e.g., Processing → Shipped → Delivered)






