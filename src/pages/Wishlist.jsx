import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrolltoTop from '../components/ScrolltoTop'
import { LangContext } from '../context/LangContext'
import WishlistBooks from '../components/wishlist/WishlistBooks'


const Wishlist = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Wishlist" : "Bəyənilənlər"} />
      <WishlistBooks />
    </>
  )
}

export default Wishlist