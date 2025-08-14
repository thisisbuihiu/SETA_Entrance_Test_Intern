# SETA Entrance Test - Full Stack Developer

This repository contains my solutions for the SETA Entrance Test,

## Repository Structure

```
SETA_Entrance_Test_Intern/
├── Task 1/                     # String Length Frequency
│   └── string-length-frequency.js
├── Task 2/                     # Sum of Top Two Integers
│   └── sum_of_top_two.js
├── Task 3/                     # Full Stack Application
│   ├── backend/               # Node.js + Express + MongoDB
│   ├── frontend/              # React + Redux
│   └── README.md
└── README.md                  # This file
```

## Tasks Completed

### Task 1: String Length Frequency
**Objective:** Identify the most frequent string lengths in an array

**Features:**
- Algorithm with O(n) time complexity
- Comprehensive test cases (7 scenarios)
- Edge case handling (empty arrays, ties)
- Unit testing function
- Step-by-step explanation

**Example:**
```javascript
Input: ['a', 'ab', 'abc', 'cd', 'def', 'gh']
Output: ['ab', 'cd', 'gh'] // Length 2 appears most frequently
```

**How to run:**
```bash
cd "Task 1"
node string-length-frequency.js
```

---

### Task 2: Sum of Top Two Integers
**Objective:** Find the sum of the two largest integers in an array

**Features:**
- Two algorithm approaches (O(n) and O(n log n))
- Performance comparison
- 6 comprehensive test cases
- Error handling for edge cases
- Vietnamese language comments

**Example:**
```javascript
Input: [1, 4, 2, 3, 5]
Output: 9 // (5 + 4 = 9)
```

**How to run:**
```bash
cd "Task 2"
node sum_of_top_two.js
```

---

### Task 3: Full Stack NodeJS-React-Redux Application
**Objective:** Complete CRUD application with modern stack

**Tech Stack:**
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React, Redux Toolkit, React Router
- **Styling:** Modern CSS with responsive design
- **Development:** Hot reload, error handling, validation

**Features:**
- RESTful API with full CRUD operations
- Redux state management with async thunks
- Responsive, modern UI design
- Form validation and error handling
- MongoDB integration
- Professional styling with animations

**API Endpoints:**
```
GET    /api/posts     - Get all posts
GET    /api/posts/:id - Get single post  
POST   /api/posts     - Create new post
PUT    /api/posts/:id - Update post
DELETE /api/posts/:id - Delete post
```

**How to run:**
```bash
# Backend
cd "Task 3/backend"
npm install
npm run dev

# Frontend (new terminal)
cd "Task 3/frontend"  
npm install
npm start
```

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git

### Running All Tasks

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd SETA_Entrance_Test_Intern
   ```

2. **Task 1 - String Length Frequency:**
   ```bash
   cd "Task 1"
   node string-length-frequency.js
   ```

3. **Task 2 - Sum of Top Two:**
   ```bash
   cd "../Task 2"
   node sum_of_top_two.js
   ```

4. **Task 3 - Full Stack App:**
   ```bash
   # Backend
   cd "../Task 3/backend"
   npm install
   npm run dev
   
   # Frontend (new terminal)
   cd "../frontend"
   npm install
   npm start
   ```

This project is submitted as the SETA entrance test and is for evaluation purposes only.
