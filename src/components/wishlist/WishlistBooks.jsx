import React, { useContext } from 'react'
import { Container, Table } from 'react-bootstrap';
import WishlistCard from '../cards/WishlistCard';
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../context/LangContext';
import { useSelector } from 'react-redux';

const WishlistBooks = () => {
    const [lang] = useContext(LangContext);
    const data = useSelector((a) => a.wish)
    return (
        <>
            {data.length !== 0 ?
                <div className="wishlist my-5">
                    <Container>
                        <Table responsive striped bordered hover className="w-75 my-0 mx-auto">
                            <tbody>
                                {data.map((item) => {
                                    return <WishlistCard item={item} key={item.id}/>
                                })}
                            </tbody>
                        </Table>
                    </Container>
                </div>
                :
                <Container className='add-cart text-center mb-5'>
                    <div className="empty-icon text-center">
                        <img src="https://harshcreation.com/images/emptywishlist.jpg" alt="empty" width="450px" />
                    </div>
                    <h5 className='mb-4'>{lang === "en" ? "Your wishlist is currently empty." : "Bəyənilənlər siyahınız hazırda boşdur."}</h5>
                    <LinkContainer to="/shop">
                        <a href="/" className='text-decoration-none section-btn'>
                            {lang === "en" ? "Return to shop" : "Alış-verişə geri dön"}
                        </a>
                    </LinkContainer>
                </Container>
            }
        </>
    )
}

export default WishlistBooks