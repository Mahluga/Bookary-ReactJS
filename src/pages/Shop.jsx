import React, { useContext } from 'react'
import '../assets/scss/style.scss'
import ScrolltoTop from '../components/ScrolltoTop'
import BreadCrumb from '../components/BreadCrumb'
import { LangContext } from '../context/LangContext'
import Shoping from '../components/shop/Shoping'

const Shop = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Shop" : "Mağaza"} />
      <Shoping />
    </>
  )
}

export default Shop