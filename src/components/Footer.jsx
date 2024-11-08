import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Facebook, Instagram, Pinterest, Twitter } from 'react-bootstrap-icons'
import { ModeContext } from '../context/ModeContext'
import { LangContext } from '../context/LangContext'
import { LinkContainer } from 'react-router-bootstrap'
import { footer_az, footer_en } from '../data/langdata'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [mode] = useContext(ModeContext);
    const [lang] = useContext(LangContext)
    const [footInfo, setFootInfo] = useState([]);
    useEffect(() => {
        const foot = lang === "en" ? footer_en : footer_az;
        setFootInfo(foot)
    }, [lang])
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="row gy-4">
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="row info-part">
                                <div className="col-12 col-sm-6 col-md-6 d-flex flex-column align-items-start pb-4">
                                    <div className="foot-logo">
                                        <img src={mode === "light" || mode === null ? "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg" : "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo.svg"} alt="" />
                                    </div>
                                    <p className='mb-2'>{lang === "en" ? "Got Questions ? Call us 24/7!" : "Suallarınız var? 24/7 bizə zəng edin!"}</p>
                                    <h4 className='pb-4 mb-0'>+(84) - 1800 - 4635</h4>
                                    <ul className='social-icons ps-0 d-flex justify-content-center align-items-center'>
                                        <li className='list-unstyled me-3'><a href="/"><Facebook /></a></li>
                                        <li className='list-unstyled me-3'><a href="/"><Twitter /></a></li>
                                        <li className='list-unstyled me-3'><a href="/"><Instagram /></a></li>
                                        <li className='list-unstyled'><a href="/"><Pinterest /></a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 px-5">
                                    <h5 className="foot-title text-capitalize mb-3">{footInfo[0]}</h5>
                                    <ul className='ps-0 mb-4'>
                                        <li className='list-unstyled mb-3'>1418 River Drive, Suite 35 <br />
                                            Cottonhall, CA 9622</li>
                                        <li className='list-unstyled'>{lang === "en" ? "Monday – Friday" : "Bazar ertəsi - Cümə"}: 9:00-20:00 <br />
                                            {lang === "en" ? "Saturday" : "Şənbə"}: 11:00 – 15:00</li>
                                    </ul>
                                    <p className='mb-0'>{lang === "en" ? "contact@example" : "əlaqə@nümunə"}.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="row">
                                <div className="col-4 col-sm-4 col-md-4 resp-center">
                                    <h5 className="foot-title text-capitalize mb-3">{footInfo[1]}</h5>
                                    <ul className='ps-0 d-flex flex-column'>
                                        <Link to="/about" className='list-unstyled text-decoration-none mb-1'>
                                            <a href="/" className='text-decoration-none'>{footInfo[2]}</a>
                                        </Link>
                                        <Link to="/cart" className='list-unstyled text-decoration-none mb-1'>
                                        <a href="/" className='text-decoration-none'>{footInfo[3]}</a>
                                        </Link>
                                        <Link to="/shop" className='list-unstyled text-decoration-none mb-1'>
                                            <a href="/" className='text-decoration-none'>{footInfo[4]}</a>
                                        </Link>
                                        <Link to="/register" className='list-unstyled text-decoration-none mb-1'>
                                            <a href="/" className='text-decoration-none'>{footInfo[5]}</a>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 resp-center">
                                    <h5 className="foot-title text-capitalize mb-3">{footInfo[6]}</h5>
                                    <ul className='ps-0'>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[7]}</p>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[8]}</p>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[9]}</p>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[10]}</p>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[11]}</p>
                                        </li>
                                        <li className='list-unstyled'>
                                            <p className='ft text-decoration-none'>{footInfo[12]}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 resp-center">
                                    <h5 className="foot-title text-capitalize mb-3">{footInfo[13]}</h5>
                                    <ul className='ps-0'>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[14]}</p>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[15]}</p>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[16]}</p>
                                        </li>
                                        <li className='list-unstyled mb-1'>
                                            <p className='ft text-decoration-none'>{footInfo[17]}</p>
                                        </li>
                                        <li className='list-unstyled'>
                                            <p className='ft text-decoration-none'>{footInfo[18]}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="sub-footer">
                <Container className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>{lang === "en" ? "Copyright © 2023" : "Müəlliflik hüququ © 2023"} <LinkContainer to="/"><a href="/" className='text-decoration-none'>Bookory</a></LinkContainer>. {lang === "en" ? "All rights reserved." : "Bütün hüquqlar qorunur."}</p>
                    <div className="bank-cards">
                        <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/footer_img.png" alt="cards" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer