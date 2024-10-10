import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LangContext } from '../../context/LangContext';
import { cli_az, cli_en } from '../../data/langdata';
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ClientCards from "../cards/ClientCards";

const Client = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1216,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [lang] = useContext(LangContext)
    const [cli, setCli] = useState([])
    useEffect(()=>{
        const cli = lang === "en" ? cli_en : cli_az;
        setCli(cli);
    },[lang])

    return (
        <div className='testimonials pb-5'>
            <Container>
                <div className="section-header mb-5">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-3">
                            <h4 className='text-capitalize mb-0'>{lang === "en" ? "What Client Says" : "Müştəri nə deyir"}</h4>
                        </div>
                        <div className="col-4 col-sm-4 col-md-7 d-flex justify-content-center align-items-center">
                            <div className="divider-line"></div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-1"></div>
                    </div>
                </div>
                <Slider {...settings}>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_01.png"} content={`“${cli[0]}”`} name='Pam Pruitt' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_02.png"} content={`“${cli[1]}”`} name='Joel M.' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png"} content={`“${cli[2]}”`} name='Ellie A.' job='New York' />
                    </div>
                    <div>
                        <ClientCards image={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/test_03.png"} content={`“${cli[1]}”`} name='John Doe' job='New York' />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default Client