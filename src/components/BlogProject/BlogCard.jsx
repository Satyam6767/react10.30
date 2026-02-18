import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({ title, paragraph, imageURL, id }) {
  return (
   
    <div style={{
      width: "300px",
      border: "1px solid grey"

    }}>
      <img style={{ width: "300px" }} src={imageURL} alt="" />
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <Link to={`/blogs/${id}`}>Read more</Link>
    </div>
  )
}

export default BlogCard