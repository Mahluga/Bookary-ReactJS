import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrolltoTop from '../components/ScrolltoTop'
import { LangContext } from '../context/LangContext'
import BlogPart from '../components/blog/BlogPart'

const Blog = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Blog" : "Bloq"} />
      <BlogPart/>
    </>
  )
}

export default Blog