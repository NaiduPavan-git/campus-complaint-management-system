# 🎓 Campus Complaint Management System

A **Full-Stack Web Application** developed to simplify complaint registration and management within educational institutions. The system enables students to submit complaints online, track their complaint status in real time, and allows administrators to efficiently manage, update, and resolve complaints through a dedicated dashboard.

---
**##Live Demo:** 
https://campus-complaint-system.netlify.app

**##Technology Badges**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
## 📖 Project Overview

The **Campus Complaint Management System** replaces the traditional manual complaint process with a centralized digital platform. Students can securely register complaints, upload supporting documents, track complaint progress, and provide feedback. Administrators can review complaints, update their status, and monitor complaint statistics through an analytics dashboard.

---
**Screenshots**
<img width="1918" height="965" alt="Screenshot 2026-07-01 165031" src="https://github.com/user-attachments/assets/d276f7a7-3c72-4bba-9069-10a7a7945a02" />
<img width="1811" height="997" alt="Screenshot 2026-07-01 165131" src="https://github.com/user-attachments/assets/25413387-afee-4add-afdc-49ea55fcea18" />
<img width="1918" height="966" alt="Screenshot 2026-07-01 165158" src="https://github.com/user-attachments/assets/ac3c9ba3-3b7b-489a-a2c3-d4f614e314ba" />
<img width="1902" height="892" alt="Screenshot 2026-07-01 165225" src="https://github.com/user-attachments/assets/6d4e2d0d-70b1-4877-a1f2-67062d020475" />
<img width="1898" height="887" alt="Screenshot 2026-07-01 165245" src="https://github.com/user-attachments/assets/9f292942-bf55-4ea5-9bd5-3427d272b0b0" />
<img width="1535" height="897" alt="Screenshot 2026-07-01 165402" src="https://github.com/user-attachments/assets/60900faa-bef4-41c6-8c48-23ba32df46cc" />
<img width="1900" height="898" alt="Screenshot 2026-07-01 165516" src="https://github.com/user-attachments/assets/c8bf869f-87e9-4fe9-8e66-2b07ea8e07b9" />
<img width="1900" height="901" alt="Screenshot 2026-07-01 165836" src="https://github.com/user-attachments/assets/4f64c002-4404-4b4b-b499-4b5a3f8e777e" />
<img width="1898" height="893" alt="Screenshot 2026-07-01 165857" src="https://github.com/user-attachments/assets/c37c43d7-0eec-4733-bf3c-4f6da10d5e59" />
<img width="1898" height="896" alt="Screenshot 2026-07-01 165921" src="https://github.com/user-attachments/assets/31fbbc62-591b-416c-a8c9-5d8335d4d58e" />



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
