# Full Stack Posts Application

## Features

- **Full CRUD Operations**: Create, Read, Update, Delete posts
- **RESTful API**: Built with Express.js and MongoDB
- **Modern Frontend**: React with Redux for state management
- **Responsive Design**: Works perfectly on desktop and mobile
- **Real-time Updates**: Instant UI updates with Redux
- **Input Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling
- **Professional UI**: Modern, clean design with animations

## Project Structure

```markdown:Task 3/README.md
Task 3/
├── backend/                 # Node.js + Express API
│   ├── models/             
│   │   └── Post.js         # MongoDB Post model
│   ├── routes/
│   │   └── posts.js        # API routes for posts
│   ├── .env                # Environment variables
│   ├── server.js           # Express server setup
│   └── package.json        # Backend dependencies
├── frontend/               # React + Redux application
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.js
│   │   │   ├── PostList.js
│   │   │   ├── PostForm.js
│   │   │   └── PostDetail.js
│   │   ├── store/          # Redux store and slices
│   │   │   ├── store.js
│   │   │   └── postsSlice.js
│   │   ├── App.js          # Main App component
│   │   ├── App.css         # Application styles
│   │   ├── index.js        # React entry point
│   │   └── index.css       # Global styles
│   └── package.json        # Frontend dependencies
└── README.md               # This file
```

## Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Task 3"
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/posts_app
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB** (if using local installation)
   ```bash
   # macOS with Homebrew
   brew services start mongodb/brew/mongodb-community
   
   # Or start manually
   mongod
   ```

2. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   
   You should see:
   ```
   ✅ Connected to MongoDB
   🚀 Server running on http://localhost:5001
   ```

3. **Start the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```
   
   The app will open at `http://localhost:3000`

## API Endpoints

### Posts API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get single post by ID |
| POST | `/api/posts` | Create new post |
| PUT | `/api/posts/:id` | Update existing post |
| DELETE | `/api/posts/:id` | Delete post |

### Example API Usage

**Create a new post:**
```bash
curl -X POST http://localhost:5001/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "body": "This is the content of my first post.",
    "userId": 1
  }'
```

**Get all posts:**
```bash
curl http://localhost:5001/api/posts
```

## Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## Development

### Available Scripts

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Database Schema

**Post Model:**
```javascript
{
  title: String (required),
  body: String (required),
  userId: Number (required, default: 1),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```


## Testing

### Manual Testing Checklist

- [ ] Create a new post
- [ ] View all posts in the list
- [ ] View individual post details
- [ ] Edit an existing post
- [ ] Delete a post
- [ ] Responsive design on mobile
- [ ] Error handling for invalid data

### API Testing with curl

```bash
# Health check
curl http://localhost:5001/api/health

# Get all posts
curl http://localhost:5001/api/posts

# Create a post
curl -X POST http://localhost:5001/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","body":"Test content","userId":1}'

# Update a post (replace :id with actual post ID)
curl -X PUT http://localhost:5001/api/posts/:id \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","body":"Updated content","userId":1}'

# Delete a post (replace :id with actual post ID)
curl -X DELETE http://localhost:5001/api/posts/:id
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   ```
   Error: connect ECONNREFUSED 127.0.0.1:27017
   ```
   **Solution:** Make sure MongoDB is running
   ```bash
   brew services start mongodb/brew/mongodb-community
   ```

2. **Port Already in Use**
   ```
   Error: listen EADDRINUSE: address already in use :::5001
   ```
   **Solution:** Kill the process or change the port
   ```bash
   lsof -i :5001
   kill -9 <PID>
   ```

3. **CORS Errors**
   - Make sure backend is running on port 5001
   - Check proxy setting in frontend package.json

## Contributing 

Although this is just a simple project for an entrance test, I would be happy if you could give me some feedback on my code.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---