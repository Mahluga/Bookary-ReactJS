import React, { useContext } from 'react'
import ScrolltoTop from '../components/ScrolltoTop'
import BreadCrumb from '../components/BreadCrumb'
import Story from '../components/about/Story'
import { LangContext } from '../context/LangContext'
import Client from '../components/about/Client'
import Subscribe from '../components/about/Subscribe'

const About = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "About Us" : "Haqqımızda"}/>
      <Story />
      <Client />
      <Subscribe />
    </>
  )
}

export default About