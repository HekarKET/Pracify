import React from "react";

function Blog({ img, title, description }) {
  return (
    <div className='blog'>
      <img src={img} alt={title} />
      <div className='blog-title'>
        <p>{title}</p>
      </div>
      <div className='blog-description'>
        <p>{description}</p>
      </div>
      <div className='read-more'>
        <p>Read more</p>
      </div>
    </div>
  );
}

export default Blog;
