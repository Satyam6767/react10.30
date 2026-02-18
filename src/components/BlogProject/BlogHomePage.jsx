import React, { use, useState } from 'react'
import BlogCard from './BlogCard'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'

function BlogHomePage() {

    const blogs = [
        { id:1, title:"blog title 1", paragraph:"this is blog card1 paragraph", imageURL:image1},
        { id:2, title:"blog title 2", paragraph:"this is blog card1 paragrap2", imageURL:image2},
        { id:3, title:"blog title 3", paragraph:"this is blog card1 paragrap3", imageURL:image3},
        { id:4, title:"blog title 4", paragraph:"this is blog card1 paragrap4", imageURL:image4},
        { id:5, title:"blog title 5", paragraph:"this is blog card1 paragrap4", imageURL:image4},
    ]


  return (
    <div style={{display:"flex"}}>
        {
          blogs.map((element)=>(
            <BlogCard title={element.title} paragraph={element.paragraph} imageURL={element.imageURL} id={element.id}  />
          ))
        }      
    </div>
  )
}

export default BlogHomePage