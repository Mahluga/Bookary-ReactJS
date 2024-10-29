import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from '../cards/CategoryCard';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const Categories = () => {
    const [catCards, setCatCards] = useState([])
  
    return (
        <div className='pt-5 pb-0 d-flex home-categories'>
            <Container>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    rewind={true}
                    pagination={false}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper d-flex"
                >
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat1.png' category={catCards[0]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat2.png' category={catCards[1]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat3.png' category={catCards[2]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat4.png' category={catCards[3]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat5.png' category={catCards[4]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat6.png' category={catCards[5]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat7.png' category={catCards[6]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat8.png' category={catCards[7]} /></SwiperSlide>
                    <SwiperSlide><CategoryCard image='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat9.png' category={catCards[8]} /></SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default Categories
