import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/navbar';

const Review = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [currentReview, setCurrentReview] = useState({
    name: '',
    rating: 0,
    comment: '',
    images: [],
    imageUrls: [],
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleRatingChange = (newRating) => {
    setCurrentReview((prev) => ({ ...prev, rating: newRating }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setCurrentReview((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
      imageUrls: [...prev.imageUrls, ...imageUrls],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, currentReview]);
    setCurrentReview({
      name: '',
      rating: 0,
      comment: '',
      images: [],
      imageUrls: [],
    });
  };

  const handleDeleteReview = (index) => {
    setReviews((prevReviews) => prevReviews.filter((_, i) => i !== index));
  };

  return (
    <div className="review-page">
    <Navbar></Navbar>
    <br></br>
    <br></br>
    <br></br>
      <div className="review-container">
        <div className="review-form">
          <h2>Rate and Review Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={currentReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Rating</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={currentReview.rating >= star ? 'star selected' : 'star'}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Comment</label>
              <textarea
                name="comment"
                value={currentReview.comment}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Upload Images</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
              />
              <div className="image-previews">
                {currentReview.imageUrls && currentReview.imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt='Preview'
                    className="image-preview"
                  />
                ))}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="review-list">
          <h2>Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <button className="delete-button" onClick={() => handleDeleteReview(index)}>
                ✖
              </button>
              <h3>{review.name}</h3>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={review.rating >= star ? 'star selected' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <p>{review.comment}</p>
              <div className="review-images">
                {review.imageUrls && review.imageUrls.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt='Review'
                    className="review-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .review-container {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background-color: #fff;
          min-height: 100vh;
          box-sizing: border-box;
          margin-top: 60px;
        }

        .review-form,
        .review-list {
          flex: 1;
          max-width: 48%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin: 0 10px;
          box-sizing: border-box;
          transition: box-shadow 0.3s, transform 0.3s;
        }

        .review-form:hover,
        .review-list:hover {
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          transform: scale(1.01);
        }

        h2 {
          margin-top: 0;
          font-size: 22px;
          font-weight: bold;
          color: #333;
        }

        .form-group {
          margin-bottom: 12px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #555;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 6px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        input[type="file"] {
          width: 100%;
          padding: 4px;
          margin-top: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          font-size: 14px;
        }

        textarea {
          resize: vertical;
          height: 80px;
        }

        button[type="submit"] {
          background-color: #0a638f;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        button[type="submit"]:hover {
          background-color: #0a638f;
          color: #fff;
        }

        button[type="submit"]:active {
          background-color: #0a638f;
          color: #fff;
        }

        .star-rating {
          display: inline-block;
          margin-top: 5px;
        }

        .star {
          cursor: pointer;
          font-size: 20px;
          color: #ccc;
          transition: color 0.2s;
        }

        .star.selected,
        .star:hover {
          color: orange;
        }

        .review-item {
          position: relative;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-bottom: 8px;
          background-color: #f9f9f9;
        }

        .review-item h3 {
          margin: 0 0 5px;
          font-size: 18px;
          font-weight: bold;
        }

        .review-item p {
          margin: 5px 0;
          color: #666;
        }

        .review-image,
        .image-preview {
          width: 100px;
          height: auto;
          border-radius: 4px;
          margin-top: 10px;
        }

        .review-list h2 {
          margin-top: 0;
          font-size: 22px;
          font-weight: bold;
          color: #333;
        }

        .close-button {
          position: absolute;
          top: 5px;
          right: 5px;
          background: none;
          border: none;
          font-size: 18px;
          color: red;
          cursor: pointer;
          transition: color 0.3s;
        }

        .close-button:hover {
          color: #ff4d4d;
        }

        .delete-button {
          background: none;
          border: none;
          color: red;
          font-size: 16px;
          cursor: pointer;
          float: right;
          transition: color 0.3s;
        }

        .delete-button:hover {
          color: darkred;
        }
      `}</style>
    </div>
  );
};

export default Review;
