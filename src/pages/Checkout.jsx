import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ScrolltoTop from '../components/ScrolltoTop';
import BreadCrumb from '../components/BreadCrumb';
import { LangContext } from '../context/LangContext';

const Checkout = () => {
    const [lang] = useContext(LangContext)

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <ScrolltoTop />
            <BreadCrumb page={lang === "en" ? "CheckOut" : "Ödəniş"} />
            <div className="hero">
                <div className='container d-flex justify-content-center align-items-center flex-column'>
                    <div className="col-5 my-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Mahluga Jalilova"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="055 555 55 55"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Card Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="col-6">
                                    <label className="form-label">Expiry Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">CVV</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cvv"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>
                            <Link to='/succesfulcheckout' type="submit" className="home-btn btn text-center w-100">
                                Check Out
                            </Link>
                            <div className="mt-3 text-center ">
                                <Link to="/" className='home-btn-to btn text-center'>Cancel and Return to Home</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;