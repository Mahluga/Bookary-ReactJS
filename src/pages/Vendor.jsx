import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrolltoTop from '../components/ScrolltoTop'
import { LangContext } from '../context/LangContext'
import VendorPart from '../components/vendor/VendorPart'

const Vendor = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Store List" : "Satıcılar"} />
      <VendorPart />
    </>
  )
}

export default Vendor