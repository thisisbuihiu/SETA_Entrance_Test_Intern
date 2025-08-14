import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchPostById, deletePost } from '../store/postsSlice';

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentPost, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(id));
    }
  }, [dispatch, id]);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${currentPost.title}"?`)) {
      dispatch(deletePost(id));
      navigate('/');
    }
  };

  if (loading) return <div className="loading">Loading post...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!currentPost) return <div className="error">Post not found</div>;

  return (
    <div className="post-detail">
      <div className="post-header">
        <Link to="/" className="back-link">&larr; Back to Posts</Link>
        <div className="post-actions">
          <Link to={`/edit/${currentPost._id}`} className="btn btn-outline">Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
      
      <article className="post-content">
        <h1>{currentPost.title}</h1>
        <div className="post-meta">
          <span>By User {currentPost.userId}</span>
          <span>Created: {new Date(currentPost.createdAt).toLocaleDateString()}</span>
          {currentPost.updatedAt !== currentPost.createdAt && (
            <span>Updated: {new Date(currentPost.updatedAt).toLocaleDateString()}</span>
          )}
        </div>
        <div className="post-body">
          {currentPost.body.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default PostDetail;