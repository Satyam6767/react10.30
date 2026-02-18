import React from 'react'
import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
import { useParams } from 'react-router-dom'




const detailblog = [
        {id: 1, title: "this is internal page title", paragraph:"this is detail explaination of blog 1", imageURL:image1},
        {id: 2, title: "this is internal page titl2", paragraph:"this is detail explaination of blog 2", imageURL:image2},
        {id: 3, title: "this is internal page titl3", paragraph:"this is detail explaination of blog 3", imageURL:image3},
        {id: 4, title: "this is internal page titl4", paragraph:"this is detail explaination of blog 4", imageURL:image4},
    ]


function BlogPostPage() {

    const {id} =  useParams()
    const blogpost = detailblog.find(blog => blog.id  === parseInt(id))

  return (
    <div>
        <h1>{blogpost.title}</h1>
        <img src={blogpost.imageURL} alt="" />
        <p>{blogpost.paragraph}</p>
    </div>
  )
}

export default BlogPostPage