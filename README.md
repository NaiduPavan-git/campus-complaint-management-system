# 🎓 Campus Complaint Management System

A **Full-Stack Web Application** developed to simplify complaint registration and management within educational institutions. The system enables students to submit complaints online, track their complaint status in real time, and allows administrators to efficiently manage, update, and resolve complaints through a dedicated dashboard.

---

## 📖 Project Overview

The **Campus Complaint Management System** replaces the traditional manual complaint process with a centralized digital platform. Students can securely register complaints, upload supporting documents, track complaint progress, and provide feedback. Administrators can review complaints, update their status, and monitor complaint statistics through an analytics dashboard.

---

## 🚀 Features

### 👨‍🎓 Student Module

* User Registration
* Secure Login using JWT Authentication
* Submit Complaints
* Upload Supporting Files/Images
* View Complaint History
* Track Complaint Status
* Forgot Password & Reset Password
* Submit Feedback
* Secure Logout

### 👨‍💼 Admin Module

* Admin Login
* View All Complaints
* Update Complaint Status
* Manage Complaint Records
* Dashboard Analytics
* Complaint Statistics
* Secure Logout

---

## 🔒 Security Features

* JWT Authentication
* Password Encryption using bcrypt.js
* Role-Based Access Control
* Protected Admin Pages
* MongoDB Atlas Cloud Database

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

### File Upload

* Multer

### Deployment

* Netlify (Frontend)
* Render (Backend)

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```
Campus Complaint Management System
│
├── backend
│   ├── models
│   │   ├── User.js
│   │   ├── Complaint.js
│   │   └── Feedback.js
│   │
│   ├── routes
│   │   ├── auth.js
│   │   ├── complaints.js
│   │   └── feedback.js
│   │
│   ├── uploads
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── index.html
├── register.html
├── dashboard.html
├── complaint.html
├── my-complaints.html
├── admin.html
├── admin-complaints.html
├── feedback.html
├── forgot-password.html
├── reset-password.html
├── styles.css
├── script.js
├── auth-check.js
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/NaiduPavan-git/campus-complaint-management-system.git
```

Move into the project directory:

```bash
cd campus-complaint-management-system
```

---

### Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
FRONTEND_URL=http://127.0.0.1:5500
```

Start the backend server:

```bash
node server.js
```

or

```bash
npx nodemon server.js
```

---

### Frontend Setup

Open the project in VS Code.

Install the **Live Server** extension.

Right-click **index.html** and select:

```
Open with Live Server
```

The application will open in your browser.

---

## 👨‍💻 User Workflow

1. Register a new account
2. Login securely
3. Submit complaints
4. Upload supporting files
5. Track complaint status
6. View complaint history
7. Submit feedback

---

## 👨‍💼 Admin Workflow

1. Login as Administrator
2. View all complaints
3. Update complaint status
4. Monitor dashboard statistics
5. Analyze complaint trends

---

## 📊 Complaint Status Flow

```
Pending
      ↓
In Progress
      ↓
Resolved
```

---

## 📈 Dashboard Features

### Student Dashboard

* Total Complaints
* Pending Complaints
* In Progress Complaints
* Resolved Complaints
* Feedback Module

### Admin Dashboard

* Total Complaints
* Pending Complaints
* In Progress Complaints
* Resolved Complaints
* Complaint Analytics
* Pie Chart Visualization

---

## 🗄️ Database Collections

### Users

* Name
* Email
* Password (Encrypted)
* Role

### Complaints

* Title
* Category
* Description
* Status
* Uploaded File
* Date

### Feedback

* Name
* Feedback Message
* Submitted Date

---

## 🌐 Deployment

### Frontend

Hosted on **Netlify**

### Backend

Hosted on **Render**

### Database

Hosted on **MongoDB Atlas**

---

## 💡 Challenges Faced

* MongoDB Atlas connectivity
* JWT Authentication
* Password Hashing
* Complaint Status Synchronization
* File Upload Management
* Cross-Origin Resource Sharing (CORS)
* Cloud Deployment
* Dashboard UI Alignment

---

## 🚀 Future Enhancements

* Email Notifications
* Real-Time Notifications
* Mobile Application
* AI-Based Complaint Classification
* Complaint Priority System
* Complaint Search & Filters
* Dashboard Reports (PDF/Excel)
* Dark Mode
* Multi-College Support

---

## 📚 Learning Outcomes

This project helped strengthen practical knowledge in:

* Full-Stack Web Development
* REST API Development
* Authentication & Authorization
* MongoDB Database Design
* Cloud Deployment
* Git & GitHub
* UI Design
* Debugging & Problem Solving

---

## 📸 Screenshots

Add screenshots of:

* Login Page
* Registration Page
* User Dashboard
* Complaint Submission
* My Complaints
* Admin Dashboard
* Complaint Management
* Feedback Page

---

## 👤 Author

**Pavan Naidu**

Master of Computer Applications (MCA)

Interested in Cloud Computing, DevOps, Full-Stack Development, and Modern Web Technologies.

---

## ⭐ If you found this project useful, please consider giving it a star!
