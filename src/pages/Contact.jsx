import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ScrolltoTop from '../components/ScrolltoTop'
import { LangContext } from '../context/LangContext'
import { Button, Container, Form } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const Contact = () => {
  const [lang] = useContext(LangContext)
  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Contact" : "Əlaqə"} />
      <div className="book-stores">
        <Container>
          <h3 className='text-center mb-5'>{lang === "en" ? "Our Book Store" : "Bizim Kitab Mağazalarımız"}</h3>
          <div className="row gy-5">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="store-img mb-4">
                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/contact_pic_1.png" alt="contact" />
              </div>
              <div className="city-data mb-4">
                <h4>New York</h4>
                <p className='mb-0'>3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                <p className='mb-0'>{lang === "en" ? "Hotline" : "Qaynar xətt"}: +(84) 2500 888 33</p>
                <p className='mb-0'>support@example.com</p>
              </div>
              <div className="woorking-hours">
                <h6>{lang === "en" ? "Working Hours" : "İş saatları"}</h6>
                <p className='mb-0'>{lang === "en" ? "Open: 8:00AM – Close: 18:00PM" : "Açılır: 8:00AM - Bağlanır: 18:00PM"}</p>
                <p className='mb-0'>{lang === "en" ? "Saturday – Sunday: Close" : "Şənbə - Bazar: Bağlı"}</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="store-img mb-4">
                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/contact_pic_2.png" alt="contact" />
              </div>
              <div className="city-data mb-4">
                <h4>Las Vegas</h4>
                <p className='mb-0'>3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                <p className='mb-0'>{lang === "en" ? "Hotline" : "Qaynar xətt"}: +(84) 2500 888 33</p>
                <p className='mb-0'>support@example.com</p>
              </div>
              <div className="woorking-hours">
                <h6>{lang === "en" ? "Working Hours" : "İş saatları"}</h6>
                <p className='mb-0'>{lang === "en" ? "Open: 8:00AM – Close: 18:00PM" : "Açılır: 8:00AM - Bağlanır: 18:00PM"}</p>
                <p className='mb-0'>{lang === "en" ? "Saturday – Sunday: Close" : "Şənbə - Bazar: Bağlı"}</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="store-img mb-4">
                <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/contact_pic_3.png" alt="contact" />
              </div>
              <div className="city-data mb-4">
                <h4>Los Angeles</h4>
                <p className='mb-0'>3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                <p className='mb-0'>{lang === "en" ? "Hotline" : "Qaynar xətt"}: +(84) 2500 888 33</p>
                <p className='mb-0'>support@example.com</p>
              </div>
              <div className="woorking-hours">
                <h6>{lang === "en" ? "Working Hours" : "İş saatları"}</h6>
                <p className='mb-0'>{lang === "en" ? "Open: 8:00AM – Close: 18:00PM" : "Açılır: 8:00AM - Bağlanır: 18:00PM"}</p>
                <p className='mb-0'>{lang === "en" ? "Saturday – Sunday: Close" : "Şənbə - Bazar: Bağlı"}</p>
              </div>
            </div>
          </div>
        </Container >
      </div >
      <div className="contact-form py-5">
        <Container>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4588906078384!2d49.83908007594627!3d40.37652105808568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e0!3m2!1sen!2saz!4v1684178584426!5m2!1sen!2saz" width="600" height="450" loading="lazy" title='AFMall'></iframe>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <h3 className='mb-3'>{lang === "en" ? "We Would Love To Hear From You." : "Sizdən Eşitmək İstəyirik."}</h3>
              <p className='mb-3'>{lang === "en" ? "Your email address will not be published. Required fields are marked " : "E-poçt ünvanınız dərc olunmayacaq. Tələb olunan sahələr qeyd olunub "}*</p>
              <Form>
                <Form.Group controlId="validationCustom01">
                  <Form.Control
                    type="text"
                    placeholder={lang === "en" ? "Name *" : "Ad *"}
                  />
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                  <Form.Control
                    type="email"
                    placeholder={lang === "en" ? "Email *" : "E-poçt *"}
                  />
                </Form.Group>
                <Form.Group controlId="validationCustom03">
                  <Form.Control
                    as="textarea"
                    placeholder={lang === "en" ? "Message" : "Şərh"}
                    cols={40}
                    rows={3}
                  />
                </Form.Group>
                <div className="check d-flex align-items-center">
                  <input type="checkbox" />
                  <label className='ms-2'>{lang === "en" ? "Save my name, email, and website in this browser for the next time I comment." : "Növbəti dəfə şərh yazmaq üçün adımı, e-poçtumu və vebsaytımı bu brauzerdə yadda saxlayın."}</label>
                </div>
                <Button type='submit'>{lang === "en" ? "Submit" : "Təqdim et"} <ChevronRight fontSize={10} className='ms-2' /></Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Contact