# 🛒 Product-Box

Product-Box is a simple and modern e-commerce-style application built using **Next.js 15/16 (App Router)**.  
The project demonstrates public and protected routing, authentication, item listing, item details, and item management features.

This project was developed as part of **SCIC-12 Assignment 9 (Job Task)**.

---

## 🔗 Live & Repository Links

- **Live Site:** https://product-box-tan.vercel.app/
- **GitHub Repository:** https://github.com/Jobayed1408/product-box

---

## 🔐 Login Credentials (Mock / Demo)

# 🛒 Product-Box

Product-Box is a simple and modern e-commerce-style application built using **Next.js 15/16 (App Router)**.  
The project demonstrates public and protected routing, authentication, item listing, item details, and item management features.

This project was developed as part of **SCIC-12 Assignment 9 (Job Task)**.

---


## 🔐 Login Credentials (Mock / Demo)

Email: jamil@uddin.com

Password: jamil


(You can also log in using Google if enabled.)

---

## 🧩 Core Features

### 1️⃣ Landing Page (Public)
- Fully public landing page
- Includes **7 relevant sections** (excluding Navbar & Footer)
- Modern UI built with Tailwind CSS
- Navbar includes navigation to:
  - Home
  - Items
  - Login

---

### 2️⃣ Authentication
- **Primary:** Credential-based login
- **Optional (Implemented):** NextAuth.js with Google login
- Authentication features:
  - Login using email & password
  - Credentials stored securely using cookies/session
  - Redirect to intended/private page after login
  - Logout functionality
  - User avatar shown in navbar when logged in

---

### 3️⃣ Item List Page (Public)
- Publicly accessible
- Fetches items from backend API
- Displays:
  - Product image
  - Name
  - Short description
  - Price
  - Category
- Category-wise filtering
- Search functionality

---

### 4️⃣ Item Details Page (Public)
- Shows full details of a single product
- Dynamic route using product ID
- Displays:
  - Image
  - Name
  - Description
  - Price
  - Category
  - Ratings
  - Stock & Sold info

---

### 5️⃣ Protected Page: Add Item (Optional Requirement Implemented)
- Accessible **only when logged in**
- Redirects unauthenticated users to login
- Add item form includes:
  - Name
  - Image URL
  - Category
  - Price
  - Stock
  - Description
- Saves item to database
- Toast notification shown on successful product creation

---

## 🛣️ Route Summary

| Route | Access | Description |
|-----|------|------------|
| `/` | Public | Landing Page |
| `/login` | Public | Login Page |
| `/items` | Public | Item List Page |
| `/items/[id]` | Public | Item Details Page |
| `/add-item` | Protected | Add New Item |
| `/api/products` | API | Fetch products |
| `/api/categories` | API | Fetch categories |

---

## 🛠️ Technologies Used

- **Next.js 15/16 (App Router)**
- **NextAuth.js**
- **MongoDB**
- **Tailwind CSS**
- **DaisyUI**
- **Express-style API routes**
- **Vercel** (Deployment)

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/product-box.git
cd product-box


### 👨‍💻 Author

Mohammad Jobayed
CSE Graduate | Aspiring Full-Stack Developer
