import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BookStores from '../components/contact/BookStores'
import FormPart from '../components/contact/FormPart'
import ScrolltoTop from '../components/ScrolltoTop'
import { LangContext } from '../context/LangContext'

const Contact = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Contact" : "Əlaqə"} />
      <FormPart />
      <BookStores />
    </>
  )
}

export default Contact