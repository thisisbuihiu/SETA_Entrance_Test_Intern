import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost } from '../store/postsSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      dispatch(deletePost(id));
    }
  };

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="post-list">
      <div className="post-list-header">
        <h2>All Posts</h2>
        <Link to="/create" className="btn btn-primary">Create New Post</Link>
      </div>
      
      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No posts yet. <Link to="/create">Create your first post!</Link></p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post._id} className="post-card">
              <h3>{post.title}</h3>
              <p className="post-preview">
                {post.body.length > 100 
                  ? `${post.body.substring(0, 100)}...` 
                  : post.body
                }
              </p>
              <div className="post-meta">
                <span>User ID: {post.userId}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="post-actions">
                <Link to={`/post/${post._id}`} className="btn btn-secondary">View</Link>
                <Link to={`/edit/${post._id}`} className="btn btn-outline">Edit</Link>
                <button 
                  onClick={() => handleDelete(post._id, post.title)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;