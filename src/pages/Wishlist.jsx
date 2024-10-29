import React, { useContext } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ScrolltoTop from '../components/ScrolltoTop';
import { LangContext } from '../context/LangContext';
import { LinkContainer } from 'react-router-bootstrap';
import WishListCard from '../components/cards/WishlistCard';
import { Container, Table } from 'react-bootstrap';
import { useWishlist } from 'react-use-wishlist';

const Wishlist = () => {
  const [lang] = useContext(LangContext);
  const { items: wishlist, isWishlistEmpty, totalWishlistItems, removeWishlistItem } = useWishlist();

  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Wishlist" : "Sevimlilər"} />
      {isWishlistEmpty ? (
        <Container className="add-cart text-center mb-5">
          <div className="empty-icon text-center">
            <img src="https://harshcreation.com/images/emptywishlist.jpg" alt="empty" width="450px" />
          </div>
          <h5 className="mb-4">
            {lang === "en" ? "Your wishlist is currently empty." : "Bəyənilənlər siyahınız hazırda boşdur."}
          </h5>
          <LinkContainer to="/shop">
            <a href="/" className="text-decoration-none section-btn">
              {lang === "en" ? "Return to shop" : "Alış-verişə geri dön"}
            </a>
          </LinkContainer>
        </Container>
      ) : (
        <div className="wishlist my-5">
          <Container>
            <Table responsive striped bordered hover className="w-75 my-0 mx-auto">
              <tbody>
                {wishlist.map((item) => (
                  <WishListCard
                    key={item.id}
                    item={item}
                    onRemove={removeWishlistItem}
                  />
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      )}
    </>
  );
};

export default Wishlist;
