'use client'

import GetBlog from "../Components/BlogPages/Blogget"
import BlogLanding from "../Components/BlogPages/BlogLanding"


export default function Blogs(){
  return(
    <div className="overflow-hidden">
      <BlogLanding/>
      <GetBlog/>
    </div>
  )
}