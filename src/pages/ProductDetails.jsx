import React, { useCallback, useContext, useState } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import ScrolltoTop from '../components/ScrolltoTop';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import { useBetween } from 'use-between';
import { LangContext } from '../context/LangContext';
import { useDispatch } from 'react-redux';
// import { addWish, removeWish } from '../tools/action/wishActions';
import SharedCanvas from '../components/SharedCanvas';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addWish, removeWish } from '../tools/action/wishAction';

const ProductDetails = () => {
  const data = useSelector(p => p);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { setShowCanvas } = useBetween(SharedCanvas);
  const [activeTitle, setActiveTitle] = useState(1);
  const random = Math.floor(Math.random() * (30 - 0 + 1)) + 0;
  const { id } = useParams();
  const details = data?.find((item) => item.id.toString() === id);
  const [lang] = useContext(LangContext);
  const dispatch = useDispatch();
  const local = localStorage.getItem("wish");
  const wishData = local ? JSON.parse(local).find((item) => item.id == id) : false;
  const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");

  const findWish = (id) => {
    const local = localStorage.getItem("wish");
    const wishData = local ? JSON.parse(local).find((item) => item.id == id) : false;
    return wishData ? true : false;
  };

  const wishClick = useCallback(() => {
    if (findWish(id)) {
      dispatch(removeWish({ id: details.id }));
      setWishStatus("regular");
    } else {
      dispatch(addWish(details));
      setWishStatus("solid");
    }
  }, [id, details, dispatch]);

  
  if (!data || data.length === 0) {
    return (
      <Container className='my-5 no-details'>
        <div className="no-details-content d-flex align-items-center mb-3">
          <i className="fa-regular fa-calendar me-3"></i>
          <p className='mb-0'>{lang === "en" ? "No products available" : "Məhsul mövcud deyil"}</p>
        </div>
        <LinkContainer to="/shop">
          <a href="/" className='text-decoration-none section-btn'>
            {lang === "en" ? "Return to shop" : "Alış-verişə qayıt"}
          </a>
        </LinkContainer>
      </Container>
    );
  }

  return (
    <>
      <ScrolltoTop />
      {!details ? (
        <Container className='my-5 no-details'>
          <div className="no-details-content d-flex align-items-center mb-3">
            <i className="fa-regular fa-calendar me-3"></i>
            <p className='mb-0'>{lang === "en" ? "We don't have such a book" : "Bizim belə bir kitabımız yoxdur"}</p>
          </div>
          <LinkContainer to="/shop">
            <a href="/" className='text-decoration-none section-btn'>
              {lang === "en" ? "Return to shop" : "Alış-verişə qayıt"}
            </a>
          </LinkContainer>
        </Container>
      ) : (
        <Container className='details-page mb-5'>
          <div className="details-breadcrumb">
            <Breadcrumb className='pt-4 pb-3'>
              <Breadcrumb.Item href="/" className='text-uppercase'>{lang === "en" ? "Home" : "Ana səhifə"}</Breadcrumb.Item>
              <Breadcrumb.Item href="/shop" className='text-uppercase'>{details.category[1] ?? details.category[0]}</Breadcrumb.Item>
              <Breadcrumb.Item active className='text-uppercase'>{details.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="book-detail mb-5">
            <Row className='justify-content-center'>
              <Col sm={12} md={6} className='book-photo me-4'>
                <img src={details.image} alt="book" width="100%" />
              </Col>
              <Col sm={12} md={5} className='book-info'>
                <div className="info-title">
                  <div className={`${details && details.stock ? "stock-mode sale" : "stock-mode sold"}`}>
                    {details.stock ? (lang === "en" ? "In Stock" : "Stokda var") : (lang === "en" ? "Sold Out" : "Tükənib")}
                  </div>
                </div>
                <div className="book-title">
                  <div className="book-name">{details.title}</div>
                  <div className="book-author-rate d-flex">
                    <div className="author">
                      {lang === "en" ? "Author" : "Yazıçı"}: &nbsp;
                      <LinkContainer to={`/author/${details.author}`}>
                        <span>{details.author}</span>
                      </LinkContainer>
                    </div>
                    <div className="rate">
                      <Rating star={details.star} count="5" />
                    </div>
                    <div className="sku">
                      SKU: &nbsp; <span>{details.sku}</span>
                    </div>
                  </div>
                </div>
                <div className="price-desc">
                  <div className="price">${details.price}</div>
                  <div className="brief-desc">{details.briefDescription}</div>
                </div>
                <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
                <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
                  <div className="modal-quantity d-flex align-items-center me-2">
                    <button className="d-flex align-items-center justify-content-center" onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button>
                    <input type="number" readOnly id="quantity" name="quantity" min="1" max="999" value={quantity} />
                    <button className="d-flex align-items-center justify-content-center" onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                  <div className="resp-btns d-flex align-items-center">
                    <LinkContainer to={`/shop/${details.id}`}>
                      <a href="/" className={`text-decoration-none section-btn me-2 ${details.stock ? "" : "disable-btn"}`} onClick={() => { addItem(details, quantity); setShowCanvas(true); }}>
                        <i className="fas fa-shopping-basket"></i>  <Link className='text-decoration-none detail-btns' to='/cart'>&nbsp;{lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</Link>
                      </a>
                    </LinkContainer>
                    <Button variant="none" className="detail-wish detail-btns d-flex align-items-center" onClick={wishClick}>
                      <i className={`fa-${wishStatus} fa-heart me-1`}></i>
                      <Link className='text-decoration-none detail-btns-wish' to='/wishlist'>{lang === "en" ? "Add to wishlist" : "Bəyənilənlərə əlavə et"}</Link>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="additional-data mb-5">
            <div className="data-titles d-flex justify-content-center">
              <h3 className={`mb-0 ${activeTitle === 1 ? "active-title" : ""}`} onClick={() => { setActiveTitle(1) }}>{lang === "en" ? "Description" : "Təsvir"}</h3>
              <h3 className={`mb-0 ${activeTitle === 2 ? "active-title" : ""}`} onClick={() => { setActiveTitle(2) }}>{lang === "en" ? "Reviews" : "Rəylər"}(5)</h3>
            </div>
            <div className="data-content">
              <div className={`desc-data ${activeTitle === 1 ? "d-block" : "d-none"}`}>
                <p className='mb-0'>{details.description}</p>
              </div>
              <div className={`review-data ${activeTitle === 2 ? "d-block" : "d-none"}`}>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={3} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Join Hiddleston</h4>
                        <span>October 10, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.
                  </div>
                </div>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={3} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Kenneth R. Myers </h4>
                        <span>October 11, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.
                  </div>
                </div>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={4} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Mike Addington</h4>
                        <span>October 10, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware
                  </div>
                </div>
                <div className="review-item mb-4">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={5} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Ervin Arlington</h4>
                        <span>October 15, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop
                  </div>
                </div>
                <div className="review-item">
                  <div className="person-info d-flex align-items-center">
                    <img src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" alt="person" width={50} />
                    <div className="person-data ms-2">
                      <Rating star={5} count={0} />
                      <div className="person-name d-flex align-items-center">
                        <h4 className='me-2 mb-0'>Patrick M. Newman</h4>
                        <span>October 18, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="person-review">
                    My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};


export default ProductDetails