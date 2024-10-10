import React from 'react'
import '../assets/scss/style.scss'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { BrightnessHighFill } from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { Facebook, Twitter, Instagram, Pinterest } from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'
import { GeoAlt } from 'react-bootstrap-icons'
import { Person } from 'react-bootstrap-icons'
import { Heart } from 'react-bootstrap-icons'
import { Bag } from 'react-bootstrap-icons'
import { Grid3x3Gap } from 'react-bootstrap-icons'
import { ChevronDown } from 'react-bootstrap-icons'
import { ChevronUp } from 'react-bootstrap-icons'
import { TelephonePlus } from 'react-bootstrap-icons'
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from 'react'
import { LangContext } from '../context/LangContext'
import { menu_az, menu_cat_az, menu_cat_en, menu_en } from '../data/langdata'
import { useState } from 'react'
import { useEffect } from 'react'
const Header = () => {


     const [lang, setLang] = useContext(LangContext);
    const langChange = () => {
        if (lang === 'en') {
            setLang("az");
            localStorage.setItem('lang', 'az');
        } else {
            setLang("en");
            localStorage.setItem('lang', 'en');
        }
    }

    const [menuData, setMenuData] = useState([]);
    const [menuCat, setMenuCat] = useState([]);

    useEffect(() => {
        const menuData = lang === "en" ? menu_en : menu_az;
        setMenuData(menuData)
        const menuCat = lang === "en" ? menu_cat_en : menu_cat_az;
        setMenuCat(menuCat)
    }, [lang])

    return (
        <>
            {/* Dashboard or social media nav */}
            <Navbar expand="lg" id='top-nav'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center" style={{ maxHeight: '100px' }} navbarScroll>
                            <button className="btn btn-func mode-btn" type="submit"><MdOutlineDarkMode />   </button>
                            <button
                                className="btn btn-func lang-btn ms-2"
                                type="submit"
                                onClick={langChange}
                            >
                                {lang === "en" ? "Az" : "En"}
                            </button>
                        </Nav>
                        {/* <LinkContainer to="/dashboard">
                            <span className='admin-dash'>Dashboard</span>
                        </LinkContainer> */}
                        <ul className="social-icons d-flex justify-content-center align-items-center ps-0 mb-0">
                            <li className='list-unstyled me-3'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Facebook /></a>
                            </li>
                            <li className='list-unstyled me-3'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Twitter /></a>
                            </li>
                            <li className='list-unstyled me-3'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Instagram /></a>
                            </li>
                            <li className='list-unstyled'>
                                <a href="/" className='d-flex justify-content-center align-items-center'><Pinterest /></a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Search Nav */}
            <Navbar expand="lg" id='search-nav' className='py-4'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand href="/">
                            <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg" alt="" />
                        </Navbar.Brand>
                        <div className="search-and-panel ms-auto d-flex justify-content-center align-items-center">
                            <Form className='position-relative'>
                                <Form.Control type="search" placeholder="Search books..." />
                                <Button className='d-flex align-items-center position-absolute'><Search /></Button>
                            </Form>
                            <div className="admin-panel-icons d-flex justify-content-center align-items-center">
                                <a href='/' className="find-location text-decoration-none d-flex justify-content-center align-items-center">
                                    <GeoAlt className='me-2' fontSize={16} /> <span>Find a Book Store</span>
                                </a>
                                <LinkContainer to="/dashboard">
                                <span className='admin-dash'>Dashboard</span>
                            </LinkContainer>
                                {/* <ul className='d-flex justify-content-center align-items-center mb-0'>
                                  
                                        <li className='list-unstyled pe-3' >
                                            <LinkContainer>
                                                <a href="/"><Person fontSize={18} /></a>
                                            </LinkContainer>
                                        </li>
                                      
                                            <li className='list-unstyled pe-3' >
                                                <LinkContainer>
                                                    <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>hi, admin</p> <Person fontSize={18} /></a>
                                                </LinkContainer>
                                                <div className="log-out">
                                                    <span>Log out</span>
                                                </div>
                                            </li>
                                            
                                            <li className='list-unstyled pe-3'>
                                                <LinkContainer>
                                                    <a href="/" className='d-flex align-items-center text-decoration-none'><p className='mb-0 me-1'>Hi</p> <Person fontSize={18} /></a>
                                                </LinkContainer>
                                                <div className="log-out" >
                                                    <span>Log out</span>
                                                </div>
                                            </li>
                                
                                    <li className='list-unstyled px-3'>
                                        <LinkContainer to="/wishlist">
                                            <a href="/"><Heart fontSize={14} /><span >salam</span></a>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled ps-3'>
                                        <div><Bag fontSize={15} /><span>cem</span></div>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Menu Nav */}
            <Navbar expand="lg" id='menu-nav' sticky='top'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <div className="categories d-flex justify-content-between align-items-center">
                            <div className="cat-relative d-flex justify-content-between align-items-center w-100">
                                <div className="main-part d-flex justify-content-center align-items-center">
                                    <Grid3x3Gap className='me-2' fontSize={18} /> Categories
                                </div>
                                <ChevronDown fontSize={10} />
                                <ChevronUp fontSize={10} />
                            </div>
                            <div className="category-hover">
                                <ul className='category-list ps-0 mb-0'>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" >
                                                <i className="fa-sharp fa-solid fa-mountain-sun me-2"></i>
                                                {menuCat[0]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" >
                                                <i className="fa-solid fa-feather me-2"></i>
                                                {menuCat[1]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" >
                                                <i className="fa-regular fa-flag me-2"></i>
                                                {menuCat[2]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" >
                                                <i className="fas fa-book-open me-2"></i>
                                                {menuCat[3]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" >
                                                <i className="fa-solid fa-fan me-2"></i>
                                                {menuCat[4]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" >
                                                <i className="fa-brands fa-canadian-maple-leaf me-2"></i>
                                                {menuCat[5]}
                                            </div>
                                        </LinkContainer>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <LinkContainer to="/">
                                <Nav.Link className='me-4'>{menuData[0]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/shop">
                                <Nav.Link className='me-4'>{menuData[1]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/vendor">
                                <Nav.Link className='me-4'>{menuData[2]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link className='me-4'>{menuData[3]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className='me-4'>{menuData[4]}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link className='me-4'>{menuData[5]}</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <div className="support-center d-flex justify-content-center align-items-center">
                            <div className="call-icon me-3"><TelephonePlus /></div>
                            <div className="support-context">
                                <p className='mb-0'>+1 840 - 841 25 69</p>
                                <span>24/7 Support Center</span>
                            </div>
                        </div>
                        <div className="admin-panel-icons">
                            <ul className='d-flex justify-content-center align-items-center mb-0'>
                                <li className='list-unstyled pe-3' >
                                    <LinkContainer to="/login">
                                        <a href="/"><Person fontSize={18} /></a>
                                    </LinkContainer>
                                </li>
                                <li className='list-unstyled px-3'>
                                    <LinkContainer to="/wishlist">
                                        <a href="/"><Heart fontSize={14} /></a>
                                    </LinkContainer>
                                </li>
                                <li className='list-unstyled ps-3' >
                                    <div><Bag fontSize={15} /></div>
                                </li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header