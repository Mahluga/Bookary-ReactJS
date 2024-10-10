import React from 'react'
import '../data/langdata'
import '../assets/scss/style.scss'
import ScrolltoTop from '../components/ScrolltoTop'
import CarouselPart from '../components/home/CarouselPart'
// import Categories from '../components/home/Categories'
import SaleCards from '../components/home/SaleCards'
import Suggestions from '../components/home/Suggestions'
import TopSelling from '../components/home/TopSelling'
import BiggestSale from '../components/home/BiggestSale'
import FavouriteReading from '../components/home/FavouriteReading'
import Brands from '../components/home/Brands'
import Discount from '../components/home/Discount'
import Gallery from '../components/home/Gallery'
// import TrendingNow from '../components/home/TrendingNow'
// import Bestselling from '../components/home/BestSelling'

const Home = () => {
  return (
    <>
      <ScrolltoTop />
      <CarouselPart />
      {/* <Categories /> */}
      <SaleCards />
      <TopSelling />
      <BiggestSale />
      <FavouriteReading />
      {/* <TrendingNow /> */}
      {/* <Bestselling /> */}
      <Brands />
      <Discount />
      <Gallery />
      <Suggestions />
    </>
  )
}

export default Home