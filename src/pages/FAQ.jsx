import React, { useState, useContext } from 'react';
import ScrolltoTop from '../components/ScrolltoTop';
import BreadCrumb from '../components/BreadCrumb';
import { LangContext } from '../context/LangContext';


const FAQ = () => {
    
    const [lang] = useContext(LangContext);
    const [isVisible, setIsVisible] = useState(1);

    const toggleInfo = (value) => {
        if (value === isVisible) {
            setIsVisible(null);
        } else {
            setIsVisible(value);
        }
    };

    return (
        <>
            <ScrolltoTop />
            <BreadCrumb page={lang === "en" ? "FAQs" : "FAQs"} />
            <div>
                <section className='question-part text-center '>
                    <h1>Frequently Ask Question</h1>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-6 ">
                            <ul className='questions my-4'>
                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(1)}>
                                    Is it safe to pay by credit card?
                                    <button className="toggle-button">{isVisible === 1 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 1 && (
                                    <div className="info">
                                        <p>Tliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(2)}>
                                    When is my credit/debit card charged?
                                    <button className="toggle-button">{isVisible === 2 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 2 && (
                                    <div className="info">
                                        <p>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(3)}>
                                    Does Hub Support Both Elementor And WP Bakery Page Builder?
                                    <button className="toggle-button">{isVisible === 3 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 3 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t
                                            look even slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(4)}>
                                    How do I make payment?
                                    <button className="toggle-button">{isVisible === 4 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 4 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even
                                            slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(5)}>
                                    What is my shipping charges?
                                    <button className="toggle-button">{isVisible === 5 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 5 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                    </div>
                                )}

                                <li className='d-flex align-items-center justify-content-between' onClick={() => toggleInfo(6)}>
                                    When will I get the books I ordered?
                                    <button className="toggle-button">{isVisible === 6 ? '-' : '+'}</button>
                                </li>
                                {isVisible === 6 && (
                                    <div className="info">
                                        <p>There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                                    </div>
                                )}

                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FAQ;
