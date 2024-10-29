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
import { CiLogout } from "react-icons/ci";
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
import { ModeContext } from '../context/ModeContext'
import { MoonFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SharedCategory from './SharedCategory'
import { useBetween } from 'use-between'
const Header = () => {
    const data = useSelector(p=>p);

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


    const [mode, setMode] = useContext(ModeContext);
    const modeChange = () => {
        if (mode === 'light') {
            setMode("dark");
            localStorage.setItem('mode', 'dark');
        } else {
            setMode("light");
            localStorage.setItem('mode', 'light');
        }
    }
    const { setActiveCat } = useBetween(SharedCategory);
    const [menuData, setMenuData] = useState([]);
    const [menuCat, setMenuCat] = useState([]);

    useEffect(() => {
        const menuData = lang === "en" ? menu_en : menu_az;
        setMenuData(menuData)
        const menuCat = lang === "en" ? menu_cat_en : menu_cat_az;
        setMenuCat(menuCat)
    }, [lang])

    const { totalItems } = useCart();
    const isLoggedIn = localStorage.getItem('login') === 'true';
    const isAdmin = localStorage.getItem('adminlogin') === 'true';
    const logout = () => {
        localStorage.setItem('adminlogin', 'false');
        localStorage.setItem('login', 'false');
        window.location.reload();
    };


    const [searchValue, setSearchValue] = useState("");
    const searchResult = data.filter((value) => value.title.toLocaleLowerCase().includes(searchValue));



    return (
        <>
            {/* Dashboard or social media nav */}
            <Navbar expand="lg" id='top-nav'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center" style={{ maxHeight: '100px' }} navbarScroll>
                          
                            <button
                                className="btn btn-func mode-btn"
                                type="submit"
                                onClick={modeChange}
                            >
                                {mode === "dark" ? <BrightnessHighFill /> : <MoonFill />}
                            </button>
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
                        <img src={mode === "light" || mode === null ? "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg" : "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo.svg"} alt="" />
                        </Navbar.Brand>
                        <div className="search-and-panel ms-auto d-flex justify-content-center align-items-center">
                            {/* <Form className='position-relative'>
                                <Form.Control type="search" placeholder="Search books..." />
                                <Button className='d-flex align-items-center position-absolute'><Search /></Button>
                            </Form> */}
                                <Form className='position-relative'>
                                <Form.Control type="search" placeholder={lang === "en" ? "Search books..." : "Kitabları axtarın..."} onChange={(e) => { setSearchValue(e.target.value) }} />
                                <Button className='d-flex align-items-center position-absolute'><Search /></Button>
                                <div className={`searching-result ${searchValue === "" ? "d-none" : "d-block"}`}>
                                    {searchResult.length !== 0 ? searchResult.map((item) => {
                                        return <div className="search-item d-flex align-items-center justify-content-between" key={item.id}>
                                            <div className="book-img-info d-flex align-items-center">
                                                <div className="search-img">
                                                    <img src={item.image} alt="book" width="60px" />
                                                </div>
                                                <div className="book-data ms-3">
                                                    <LinkContainer to={`/shop/${item.id}`}>
                                                        <h3 className="book-name mb-1" onClick={() => { setSearchValue("") }}>{item.title}</h3>
                                                    </LinkContainer>
                                                    <p className="book-info mb-1">{item.briefDescription}...</p>
                                                    <span className='price'>${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    }) : <p className='no-book mb-0'>No such book was found</p>}
                                </div>
                            </Form>
                            <div className="admin-panel-icons d-flex justify-content-center align-items-center">
                                <Link to='/vendor' className="find-location text-decoration-none d-flex justify-content-center align-items-center">
                                    <GeoAlt className='me-2' fontSize={16} /> <span>Find a Book Store</span>
                                </Link>
                                {/* <LinkContainer to="/dashboard">
                                <span className='admin-dash'>Dashboard</span>
                            </LinkContainer> */}
                               {isAdmin && <NavLink to='/dashboard' className='header-btn2 ms-5'>{lang === "en" ? "Dashboard" : "İdarəetmə paneli"}</NavLink>}
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
                        {/* <div className="categories d-flex justify-content-between align-items-center">
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

                        </div> */}
                         <div className="categories d-flex justify-content-between align-items-center">
                            <div className="cat-relative d-flex justify-content-between align-items-center w-100">
                                <div className="main-part d-flex justify-content-center align-items-center">
                                    <Grid3x3Gap className='me-2' fontSize={18} /> {lang === "en" ? "Categories" : "Kateqoriyalar"}
                                </div>
                                <ChevronDown fontSize={10} />
                                <ChevronUp fontSize={10} />
                            </div>
                            <div className="category-hover">
                                <ul className='category-list ps-0 mb-0'>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(1) }}>
                                                <i className="fa-sharp fa-solid fa-mountain-sun me-2"></i>
                                                {menuCat[0]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(5) }}>
                                                <i className="fa-solid fa-feather me-2"></i>
                                                {menuCat[1]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(8) }}>
                                                <i className="fa-regular fa-flag me-2"></i>
                                                {menuCat[2]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(11) }}>
                                                <i className="fas fa-book-open me-2"></i>
                                                {menuCat[3]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(12) }}>
                                                <i className="fa-solid fa-fan me-2"></i>
                                                {menuCat[4]}
                                            </div>
                                        </LinkContainer>
                                    </li>
                                    <li className='list-unstyled'>
                                        <LinkContainer to="/shop">
                                            <div className="cat-item d-flex align-items-center" onClick={() => { setActiveCat(13) }}>
                                                <i className="fa-brands fa-canadian-maple-leaf me-2"></i>
                                                {menuCat[5]}
                                            </div>
                                        </LinkContainer>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <Nav className="menus my-2 my-lg-0" style={{ maxHeight: '100px' }}>
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
                            <LinkContainer to="/faq">
                                <Nav.Link className='me-4'>{menuData[6]}</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        {/* <div className="support-center d-flex justify-content-center align-items-center">
                            <div className="call-icon me-3"><TelephonePlus /></div>
                            <div className="support-context">
                                <p className='mb-0'>+1 840 - 841 25 69</p>
                                <span>24/7 Support Center</span>
                            </div>
                        </div> */}
                        <div className="admin-panel-icons">
                            <ul className='d-flex justify-content-center align-items-center mb-0'>
                                <li className='list-unstyled pe-3' >
                                    {/* <LinkContainer to="/login">
                                        <a href="/"><Person fontSize={18} /></a>
                                    </LinkContainer> */}
                                        {isAdmin ? (
                                <div className="dropdown">
                                    <button className="btn dropdown d-flex flex-column align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <Person fontSize={18} /> <span>Mahluga</span> 
                                    </button>
                                    <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                        <li><button className="btn ms-2" onClick={logout}><CiLogout />{lang === "en" ? "Log Out" : "Çıxış"}</button></li>
                                    </ol>
                                </div>
                            ) : isLoggedIn ? (
                                <div className="dropdown">
                                    <button className="btn dropdown d-flex flex-column align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Person fontSize={18} /> <span>{localStorage.getItem('username')}</span>
                                    </button>
                                    <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                        <li><button className="btn ms-4" onClick={logout}><CiLogout fontSize={20}/>{lang === "en" ? "Log Out" : "Çıxış "}</button></li>
                                    </ol>
                                </div>
                            ) : (
                                  <LinkContainer to="/login">
                                         <a href="/"><Person fontSize={18} /></a>
                                    </LinkContainer>
                            )}
                                </li>
                                <li className='list-unstyled px-3'>
                                    <LinkContainer to="/wishlist">
                                        <a href="/"><Heart fontSize={14} /></a>
                                    </LinkContainer>
                                </li>
                                <li className='list-unstyled px-3'>
                                    <Link to="/cart">
                                        <a href="/"><Bag fontSize={15} /></a>
                                        <span className="position-absolute translate-middle badge rounded-pill cart-top d-flex justify-content-center align-items-center text-center">
                                        {(isLoggedIn || isAdmin) ? (totalItems > 0 ? totalItems : 0) : 0}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                                    </Link>
                                </li>
                            </ul>
                            {/* {isAdmin ? (
                                <div className="dropdown">
                                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {lang === "en" ? "Hello" : "Salam"},Mahluga
                                    </button>
                                    <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                        <li><button className="btn btn-success ms-2" onClick={logout}>{lang === "en" ? "Log Out" : "Cixis"}</button></li>
                                    </ol>
                                </div>
                            ) : isLoggedIn ? (
                                <div className="dropdown">
                                    <button className="btn btn-danger dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {lang === "en" ? "Hello" : "Salam"}, {localStorage.getItem('username')}
                                    </button>
                                    <ol className="dropdown-menu custom-dropdown-width mt-1 w-25">
                                        <li><button className="btn btn-success ms-4" onClick={logout}>{lang === "en" ? "Log Out" : "Cixis"}</button></li>
                                    </ol>
                                </div>
                            ) : (
                                <p>.</p>
                            )} */}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header