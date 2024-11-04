import React, { useContext, useState, useEffect } from 'react'
import ScrolltoTop from '../components/ScrolltoTop'
import BreadCrumb from '../components/BreadCrumb'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { LangContext } from '../context/LangContext'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientCards from '../components/cards/ClientCards'
import { cli_az, cli_en, story_az, story_en } from '../data/langdata'
import { ChevronRight } from 'react-bootstrap-icons'

const About = () => {

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
  const [story, setStory] = useState([])

  useEffect(() => {
    const story = lang === "en" ? story_en : story_az;
    setStory(story)
  }, [lang])

  const [cli, setCli] = useState([])
  useEffect(() => {
    const cli = lang === "en" ? cli_en : cli_az;
    setCli(cli);
  }, [lang])

  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "About Us" : "Haqqımızda"} />
      <div className="about-story py-5">
        <Container>
          <div className="init-about text-center">
            <div className="init-logo mb-4">
              <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_01_1.png" alt="about-logo" />
            </div>
            <h4 className='text-center'>{lang === "en" ? "We are the premier book retailing chain in the Southeastern United States with more than 260 Book stores in 32 states." : "Biz 32 ştatda 260-dan çox kitab mağazası ilə Cənub-Şərqi Amerika Birləşmiş Ştatlarının ilk kitab pərakəndə satış şəbəkəsiyik."}</h4>
          </div>
        </Container>
        <div className="our-story">
          <Container>
            <div className="main-img">
              <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_04.jpg" alt="about" />
            </div>
            <div className="story-cards-part">
              <h3 className='text-center'>{lang === "en" ? "Our Story" : "Bizim hekayəmiz"}</h3>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="story-card">
                    <h5 className='text-uppercase'>{story[0]}</h5>
                    <p className='mb-0'>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                  </div>
                  <div className="story-card">
                    <h5 className='text-uppercase'>{story[1]}</h5>
                    <p className='mb-0'>Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <div className="story-card">
                    <h5 className='text-uppercase'>{story[2]}</h5>
                    <p className='main-card-p'>Pellentesque sodales augue eget ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis ultrices condimentum.</p>
                    <p className='mb-0'>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-images">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6">
                  <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_03.png" alt="about" />
                </div>
                <div className="col-6 col-sm-6 col-md-6">
                  <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_02.png" alt="about" />
                </div>
              </div>
            </div>
            <div className="quote-story">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <h5 className='text-capitalize'>“{story[3]}”</h5>
                  <p className='mb-0 text-uppercase'>{story[4]}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <p className='mb-4'>{story[5]}</p>
                  <p className='mb-0'>{story[6]}</p>
                </div>
              </div>
            </div>
            <div className="foot-img">
              <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/About_01.png" alt="about" />
            </div>
          </Container>
        </div>
      </div>
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
      <div className="community py-4">
        <Container className='community-bg'>
          <Row className='community-bar'>
            <Col sm={12} md={6} className='community-text'>
              <h4 className='text-capitalize mb-2'>{lang === "en" ? "Join the community" : "İcmaya qoşulun"}</h4>
              <p className='me-auto'>{lang === "en" ? "Enter your email address to receive regular updates, as well as news on upcoming events and specific offers" : "Müntəzəm yeniləmələri, eləcə də qarşıdan gələn hadisələr və xüsusi təkliflər haqqında xəbərləri almaq üçün e-poçt ünvanınızı daxil edin"}.</p>
              <Form className='me-auto'>
                <Form.Group controlId="validationCustom01">
                  <Form.Control
                    type="email"
                    placeholder={lang === "en" ? "Your email address" : "Sizin e-poçtunuz"}
                  />
                </Form.Group>
                <Button type='submit'><span>{lang === "en" ? "Subscribe" : "Abunə ol"}</span> <ChevronRight className='ms-2' fontSize={11} /></Button>
              </Form>
            </Col>
            <Col sm={12} md={6} className='community-img'>
              <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h2_img.png" alt="community" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About