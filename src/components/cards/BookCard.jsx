// import React, { useCallback, useContext, useState } from "react";
// import Rating from "../Rating";
// import { LinkContainer } from "react-router-bootstrap";
// import { Basket } from "react-bootstrap-icons";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// // import 'animate.css';
// import { useCart } from "react-use-cart";
// // import useSharedCanvas from "../sharedHook/useSharedCanvas";
// // import { useBetween } from "use-between";
// // import { ThemeContext } from "../../context/ThemeContext";
// import { LangContext } from "../../context/LangContext";
// import { useBetween } from "use-between";
// import SharedCanvas from "../SharedCanvas";
// import { useDispatch } from "react-redux";
// import { addWish, removeWish } from "../../tools/action/wishActions";
// import { ModeContext } from "../../context/ModeContext";



// const BookCard = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange, stock }) => {
//   const [show, setShow] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();

//   const { setShowCanvas } = useBetween(SharedCanvas);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);



//   const [mode] = useContext(ModeContext)
//   const [lang] = useContext(LangContext)
//   const normalizedCategory = Array.isArray(category) ? category : [category];
//   const normalizedTags = Array.isArray(tags) ? tags : [tags];


//   const local = localStorage.getItem("wish");
//   const wishData = local ? JSON.parse(local).find((item) => item.id === id) : false;

//   const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");

//   const dispatch = useDispatch();

//   const findWish = (id) => {
//     // const localWish = localStorage.getItem("wish");
//     const local = localStorage.getItem("wish");
//     const wishData = local ? JSON.parse(local).find((item) => item.id === id) : false;
//     // const wish = JSON.parse(localWish)?.find((item) => item.id === id);
//     // wishData ? setWishStatus("solid") : setWishStatus("regular");
//     return wishData ? true : false;
//   }

//   const wishClick = useCallback(() => {
//     if (findWish(id)) {
//       dispatch(removeWish({ id: item.id }));
//       setWishStatus("regular");
//     } else {
//       dispatch(addWish(item));
//       setWishStatus("solid")
//     }
//   }, [])


//   return (
//     <>
//       <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
//         <div className="book-img-div d-flex align-items-center justify-content-center">
//           <LinkContainer
//             to={`/shop/${id}`}
//             className="book-img d-flex align-items-center justify-content-center"
//           >
//             <img src={image} alt="book" />
//           </LinkContainer>
//           <span className={`text-uppercase ${stock ? "d-none" : ""}`}>Sold out</span>
//           <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
//             <Button variant="none" className="wish-icon mb-2" onClick={() => { wishClick() }}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//             <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
//               <i className="fa-regular fa-eye" />
//             </Button>
//             <Button variant="none" className={`add-cart-icon ${stock ? "" : "disable-hover"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//               <Basket className="mb-1" />
//             </Button>
//           </div>
//         </div>
//         <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
//           <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
//             <p>{cutTitle && title.length > 15
//               ? title.substring(0, 15).concat("...")
//               : title}</p>
//           </LinkContainer>
//           <Rating star={star} count={star} />
//           <a href="/" className="author text-decoration-none">
//             {author}
//           </a>
//           <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
//           <div className="price mt-2">
//             $
//             {!price.toString().split(".")[1]
//               ? price.toString().concat(".00")
//               : price.toString().split(".")[1].length === 1
//                 ? price.toString().concat("0")
//                 : price}
//           </div>
//           <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
//             <LinkContainer to="/shop">
//               <a href="/" className={`text-decoration-none section-btn me-4 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//                 <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//               </a>
//             </LinkContainer>
//             <Button variant="none" className="add-wish" onClick={() => { wishClick() }}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//           </div>
//         </div>
//         <Modal show={show} onHide={handleClose} animation={false} className={`animate__animated animate__rotateInDownRight ${mode === "dark" ? "dark-modal" : ""}`} centered>
//           <Modal.Header closeButton></Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
//                 <img src={image} alt="book" width="330px" />
//               </Col>
//               <Col sm={12} md={6} className="book-info">
//                 <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
//                   <p>{title}</p>
//                 </LinkContainer>
//                 <Rating star={star} count={0} />
//                 <div className="book-price">${!price.toString().split(".")[1]
//                   ? price.toString().concat(".00")
//                   : price.toString().split(".")[1].length === 1
//                     ? price.toString().concat("0")
//                     : price}</div>
//                 <div className="book-desc mb-3">{briefDesc}</div>
//                 <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
//                 <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
//                   <div className="modal-quantity d-flex align-items-center me-3">
//                     <button className="d-flex align-items-center justify-content-center" onClick={() => {
//                       quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
//                     }}>-</button>
//                     <input type="number" readOnly id="quantity" name="quantity" min="1" max="999" value={quantity} />
//                     <button className="d-flex align-items-center justify-content-center" onClick={() => { setQuantity(quantity + 1) }}>+</button>
//                   </div>
//                   <div className="modal-res d-flex align-items-center">
//                     <LinkContainer to={window.location.pathname}>
//                       <a href="/" className={`text-decoration-none section-btn me-3 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
//                         <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
//                       </a>
//                     </LinkContainer>
//                     <Button variant="none" className="add-wish" onClick={() => { wishClick() }}>
//                       <i className={`fa-${wishStatus} fa-heart`}></i>
//                     </Button>
//                   </div>
//                 </div>



//                 {/* <div className="categories d-flex align-items-start">
//                     <span>{lang === "en" ? "Categories" : "Kateqoriyalar"}: </span>
//                     <div className="list ms-2 d-flex flex-wrap">
//                       {Array.isArray(normalizedCategory) ? (
//                         normalizedCategory.map((item, id) => (
//                           <>
//                             <LinkContainer to="/shop" onClick={handleClose}>
//                               <span className="d-inline">
//                                 {item}
//                                 {item === normalizedCategory[normalizedCategory.length - 1] ? "" : ','}
//                               </span>
//                             </LinkContainer>
//                             <span style={{ whiteSpace: 'pre-wrap' }}> </span>
//                           </>
//                         ))
//                       ) : (
//                         <span>Category is not an array</span>
//                       )}
//                     </div>
//                   </div> */}


//                 <div className="modal-cat-tag">
//                   <div className="categories d-flex align-items-start">
//                     <span>{lang === "en" ? "Categories" : "Kateqoriyalar"}: </span>
//                     <div className="list ms-2 d-flex flex-wrap">
//                       {Array.isArray(normalizedCategory) ? (
//                         normalizedCategory.map((item, id) => (
//                           <>
//                             <LinkContainer to="/shop" onClick={handleClose}>
//                               <span className="d-inline">
//                                 {item}
//                                 {item === normalizedCategory[normalizedCategory.length - 1] ? "" : ','}
//                               </span>
//                             </LinkContainer>
//                             <span style={{ whiteSpace: 'pre-wrap' }}> </span>
//                           </>
//                         ))
//                       ) : (
//                         <span>Category is not an array</span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="tags d-flex align-items-start">
//                     <span>{lang === "en" ? "Tags" : "Etiketlər"}: &nbsp;</span>
//                     <div className="list ms-2 d-flex flex-wrap">
//                       {Array.isArray(normalizedTags) && normalizedTags.length > 0 ? (
//                         normalizedTags.map((item, id) => (
//                           <>
//                             <LinkContainer to="/shop" onClick={handleClose}>
//                               <span className="d-inline">
//                                 {item}
//                                 {item === normalizedTags[normalizedTags.length - 1] ? "" : ","}
//                               </span>
//                             </LinkContainer>
//                             <span style={{ whiteSpace: 'pre-wrap' }}> </span>
//                           </>
//                         ))
//                       ) : (
//                         <span>No tags available</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default BookCard;






// import React, { useCallback, useContext, useState } from "react";
// import Rating from "../Rating";
// import { LinkContainer } from "react-router-bootstrap";
// import { Basket } from "react-bootstrap-icons";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import { useCart } from "react-use-cart";
// import { LangContext } from "../../context/LangContext";
// // import { useWishlist } from 'use-wishlist'; // use-wishlist paketindən import
// import { useBetween } from "use-between";
// import SharedCanvas from "../SharedCanvas";
// import { useWishlist } from "react-use-wishlist";

// const BookCard = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange, stock }) => {
//   const [show, setShow] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();
//   const { setShowCanvas } = useBetween(SharedCanvas);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [lang] = useContext(LangContext);
//   const normalizedCategory = Array.isArray(category) ? category : [category];
//   const normalizedTags = Array.isArray(tags) ? tags : [tags];

//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); // use-wishlist istifadə

//   const isInWishlist = wishlist.some(wishItem => wishItem.id === id); // İstək siyahısında olub olmadığını yoxla
//   const [wishStatus, setWishStatus] = useState(isInWishlist ? "solid" : "regular");

//   const wishClick = useCallback(() => {
//     if (isInWishlist) {
//       removeFromWishlist(item.id); // İstək siyahısından sil
//       setWishStatus("regular");
//     } else {
//       addToWishlist(item); // İstək siyahısına əlavə et
//       setWishStatus("solid");
//     }
//   }, [item, isInWishlist]);

//   return (
//     <>
//       <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
//         <div className="book-img-div d-flex align-items-center justify-content-center">
//           <LinkContainer to={`/shop/${id}`} className="book-img d-flex align-items-center justify-content-center">
//             <img src={image} alt="book" />
//           </LinkContainer>
//           <span className={`text-uppercase ${stock ? "d-none" : ""}`}>Sold out</span>
//           <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
//             <Button variant="none" className="wish-icon mb-2" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//             <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
//               <i className="fa-regular fa-eye" />
//             </Button>
//             <Button variant="none" className={`add-cart-icon ${stock ? "" : "disable-hover"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//               <Basket className="mb-1" />
//             </Button>
//           </div>
//         </div>
//         <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
//           <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
//             <p>{cutTitle && title.length > 15 ? title.substring(0, 15).concat("...") : title}</p>
//           </LinkContainer>
//           <Rating star={star} count={star} />
//           <a href="/" className="author text-decoration-none">{author}</a>
//           <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
//           <div className="price mt-2">${price.toFixed(2)}</div>
//           <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
//             <LinkContainer to="/shop">
//               <a href="/" className={`text-decoration-none section-btn me-4 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//                 <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//               </a>
//             </LinkContainer>
//             <Button variant="none" className="add-wish" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//           </div>
//         </div>
//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton></Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
//                 <img src={image} alt="book" width="330px" />
//               </Col>
//               <Col sm={12} md={6} className="book-info">
//                 <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
//                   <p>{title}</p>
//                 </LinkContainer>
//                 <Rating star={star} count={0} />
//                 <div className="book-price">${price.toFixed(2)}</div>
//                 <div className="book-desc mb-3">{briefDesc}</div>
//                 <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
//                 <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
//                   <div className="modal-quantity d-flex align-items-center me-3">
//                     <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
//                     <input type="number" readOnly id="quantity" name="quantity" min="1" value={quantity} />
//                     <button onClick={() => setQuantity(quantity + 1)}>+</button>
//                   </div>
//                   <div className="modal-res d-flex align-items-center">
//                     <LinkContainer to={window.location.pathname}>
//                       <a href="/" className={`text-decoration-none section-btn me-3 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
//                         <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
//                       </a>
//                     </LinkContainer>
//                     <Button variant="none" className="add-wish" onClick={wishClick}>
//                       <i className={`fa-${wishStatus} fa-heart`}></i>
//                     </Button>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default BookCard;





// import React, { useCallback, useContext, useState } from "react";
// import Rating from "../Rating";
// import { LinkContainer } from "react-router-bootstrap";
// import { Basket } from "react-bootstrap-icons";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import { useCart } from "react-use-cart";
// import { LangContext } from "../../context/LangContext";
// import { useBetween } from "use-between";
// import SharedCanvas from "../SharedCanvas";
// import { useWishlist } from "react-use-wishlist";

// const BookCard = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange, stock }) => {
//   const [show, setShow] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();
//   const { setShowCanvas } = useBetween(SharedCanvas);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [lang] = useContext(LangContext);
//   const normalizedCategory = Array.isArray(category) ? category : [category];
//   const normalizedTags = Array.isArray(tags) ? tags : [tags];

//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
//   // Wishlist yoxlaması
//   const isInWishlist = wishlist && wishlist.some(wishItem => wishItem.id === id);
//   const [wishStatus, setWishStatus] = useState(isInWishlist ? "solid" : "regular");

//   const wishClick = useCallback(() => {
//     if (isInWishlist) {
//       removeFromWishlist(item.id);
//       setWishStatus("regular");
//     } else {
//       addToWishlist(item);
//       setWishStatus("solid");
//     }
//   }, [item, isInWishlist]);

//   return (
//     <>
//       <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
//         <div className="book-img-div d-flex align-items-center justify-content-center">
//           <LinkContainer to={`/shop/${id}`} className="book-img d-flex align-items-center justify-content-center">
//             <img src={image} alt="book" />
//           </LinkContainer>
//           <span className={`text-uppercase ${stock ? "d-none" : ""}`}>Sold out</span>
//           <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
//             <Button variant="none" className="wish-icon mb-2" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//             <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
//               <i className="fa-regular fa-eye" />
//             </Button>
//             <Button variant="none" className={`add-cart-icon ${stock ? "" : "disable-hover"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//               <Basket className="mb-1" />
//             </Button>
//           </div>
//         </div>
//         <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
//           <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
//             <p>{cutTitle && title.length > 15 ? title.substring(0, 15).concat("...") : title}</p>
//           </LinkContainer>
//           <Rating star={star} count={star} />
//           <a href="/" className="author text-decoration-none">{author}</a>
//           <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
//           <div className="price mt-2">${price.toFixed(2)}</div>
//           <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
//             <LinkContainer to="/shop">
//               <a href="/" className={`text-decoration-none section-btn me-4 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//                 <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//               </a>
//             </LinkContainer>
//             <Button variant="none" className="add-wish" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//           </div>
//         </div>
//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton></Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
//                 <img src={image} alt="book" width="330px" />
//               </Col>
//               <Col sm={12} md={6} className="book-info">
//                 <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
//                   <p>{title}</p>
//                 </LinkContainer>
//                 <Rating star={star} count={0} />
//                 <div className="book-price">${price.toFixed(2)}</div>
//                 <div className="book-desc mb-3">{briefDesc}</div>
//                 <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
//                 <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
//                   <div className="modal-quantity d-flex align-items-center me-3">
//                     <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
//                     <input type="number" readOnly id="quantity" name="quantity" min="1" value={quantity} />
//                     <button onClick={() => setQuantity(quantity + 1)}>+</button>
//                   </div>
//                   <div className="modal-res d-flex align-items-center">
//                     <LinkContainer to={window.location.pathname}>
//                       <a href="/" className={`text-decoration-none section-btn me-3 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
//                         <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
//                       </a>
//                     </LinkContainer>
//                     <Button variant="none" className="add-wish" onClick={wishClick}>
//                       <i className={`fa-${wishStatus} fa-heart`}></i>
//                     </Button>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default BookCard;











// import React, { useCallback, useContext, useState } from "react";
// import Rating from "../Rating";
// import { LinkContainer } from "react-router-bootstrap";
// import { Basket } from "react-bootstrap-icons";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import { useCart } from "react-use-cart";
// import { LangContext } from "../../context/LangContext";
// import { useBetween } from "use-between";
// import SharedCanvas from "../SharedCanvas";
// import { useWishlist } from "react-use-wishlist";

// const BookCard = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange, stock }) => {
//   const [show, setShow] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();
//   const { setShowCanvas } = useBetween(SharedCanvas);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [lang] = useContext(LangContext);
//   const normalizedCategory = Array.isArray(category) ? category : [category];
//   const normalizedTags = Array.isArray(tags) ? tags : [tags];

//   // useWishlist hook'unu çağırın
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

//   // Wishlist kontrolü
//   const isInWishlist = wishlist && wishlist.some(wishItem => wishItem.id === id);
//   const [wishStatus, setWishStatus] = useState(isInWishlist ? "solid" : "regular");

//   const wishClick = useCallback(() => {
//     if (isInWishlist) {
//       removeFromWishlist(item.id);
//       setWishStatus("regular");
//     } else {
//       addToWishlist(item);
//       setWishStatus("solid");
//     }
//   }, [item, isInWishlist, addToWishlist, removeFromWishlist]);

//   return (
//     <>
//       <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
//         <div className="book-img-div d-flex align-items-center justify-content-center">
//           <LinkContainer to={`/shop/${id}`} className="book-img d-flex align-items-center justify-content-center">
//             <img src={image} alt="book" />
//           </LinkContainer>
//           <span className={`text-uppercase ${stock ? "d-none" : ""}`}>Sold out</span>
//           <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
//             <Button variant="none" className="wish-icon mb-2" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//             <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
//               <i className="fa-regular fa-eye" />
//             </Button>
//             <Button variant="none" className={`add-cart-icon ${stock ? "" : "disable-hover"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//               <Basket className="mb-1" />
//             </Button>
//           </div>
//         </div>
//         <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
//           <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
//             <p>{cutTitle && title.length > 15 ? title.substring(0, 15).concat("...") : title}</p>
//           </LinkContainer>
//           <Rating star={star} count={star} />
//           <a href="/" className="author text-decoration-none">{author}</a>
//           <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
//           <div className="price mt-2">${price.toFixed(2)}</div>
//           <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
//             <LinkContainer to="/shop">
//               <a href="/" className={`text-decoration-none section-btn me-4 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//                 <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//               </a>
//             </LinkContainer>
//             <Button variant="none" className="add-wish" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//           </div>
//         </div>
//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton></Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
//                 <img src={image} alt="book" width="330px" />
//               </Col>
//               <Col sm={12} md={6} className="book-info">
//                 <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
//                   <p>{title}</p>
//                 </LinkContainer>
//                 <Rating star={star} count={0} />
//                 <div className="book-price">${price.toFixed(2)}</div>
//                 <div className="book-desc mb-3">{briefDesc}</div>
//                 <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
//                 <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
//                   <div className="modal-quantity d-flex align-items-center me-3">
//                     <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
//                     <input type="number" readOnly id="quantity" name="quantity" min="1" value={quantity} />
//                     <button onClick={() => setQuantity(quantity + 1)}>+</button>
//                   </div>
//                   <div className="modal-res d-flex align-items-center">
//                     <LinkContainer to={window.location.pathname}>
//                       <a href="/" className={`text-decoration-none section-btn me-3 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
//                         <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
//                       </a>
//                     </LinkContainer>
//                     <Button variant="none" className="add-wish" onClick={wishClick}>
//                       <i className={`fa-${wishStatus} fa-heart`}></i>
//                     </Button>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default BookCard;










// import React, { useCallback, useContext, useState } from "react";
// import Rating from "../Rating";
// import { LinkContainer } from "react-router-bootstrap";
// import { Basket } from "react-bootstrap-icons";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import { useCart } from "react-use-cart";
// import { LangContext } from "../../context/LangContext";
// import { useBetween } from "use-between";
// import { useWishlist } from 'react-use-wishlist';
// import SharedCanvas from "../SharedCanvas";

// const BookCard = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange, stock }) => {
//   const [show, setShow] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();
//   const { setShowCanvas } = useBetween(SharedCanvas);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [lang] = useContext(LangContext);
//   const normalizedCategory = Array.isArray(category) ? category : [category];
//   const normalizedTags = Array.isArray(tags) ? tags : [tags];

//   // useWishlist hook'unu çağırın
//   const { wishlist, addWishlistItem, removeFromWishlist } = useWishlist();

//   // Wishlist kontrolü
//   const isInWishlist = wishlist && wishlist.some(wishItem => wishItem.id === id);
//   const [wishStatus, setWishStatus] = useState(isInWishlist ? "solid" : "regular");

//   const wishClick = useCallback(() => {
//     if (isInWishlist) {
//       removeFromWishlist(item.id);
//       setWishStatus("regular");
//     } else {
//       addWishlistItem(item);
//       setWishStatus("solid");
//     }
//   }, [item, isInWishlist, addWishlistItem, removeFromWishlist]);

//   return (
//     <>
//       <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
//         <div className="book-img-div d-flex align-items-center justify-content-center">
//           <LinkContainer to={`/shop/${id}`} className="book-img d-flex align-items-center justify-content-center">
//             <img src={image} alt="book" />
//           </LinkContainer>
//           <span className={`text-uppercase ${stock ? "d-none" : ""}`}>Sold out</span>
//           <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
//             <Button variant="none" className="wish-icon mb-2" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//             <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
//               <i className="fa-regular fa-eye" />
//             </Button>
//             <Button variant="none" className={`add-cart-icon ${stock ? "" : "disable-hover"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//               <Basket className="mb-1" />
//             </Button>
//           </div>
//         </div>
//         <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
//           <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
//             <p>{cutTitle && title.length > 15 ? title.substring(0, 15).concat("...") : title}</p>
//           </LinkContainer>
//           <Rating star={star} count={star} />
//           <a href="/" className="author text-decoration-none">{author}</a>
//           <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
//           <div className="price mt-2">${price.toFixed(2)}</div>
//           <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
//             <LinkContainer to="/shop">
//               <a href="/" className={`text-decoration-none section-btn me-4 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//                 <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//               </a>
//             </LinkContainer>
//             <Button variant="none" className="add-wish" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//           </div>
//         </div>
//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton></Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
//                 <img src={image} alt="book" width="330px" />
//               </Col>
//               <Col sm={12} md={6} className="book-info">
//                 <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
//                   <p>{title}</p>
//                 </LinkContainer>
//                 <Rating star={star} count={0} />
//                 <div className="book-price">${price.toFixed(2)}</div>
//                 <div className="book-desc mb-3">{briefDesc}</div>
//                 <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
//                 <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
//                   <div className="modal-quantity d-flex align-items-center me-3">
//                     <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
//                     <input type="number" readOnly id="quantity" name="quantity" min="1" value={quantity} />
//                     <button onClick={() => setQuantity(quantity + 1)}>+</button>
//                   </div>
//                   <div className="modal-res d-flex align-items-center">
//                     <LinkContainer to={window.location.pathname}>
//                       <a href="/" className={`text-decoration-none section-btn me-3 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
//                         <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
//                       </a>
//                     </LinkContainer>
//                     <Button variant="none" className="add-wish" onClick={wishClick}>
//                       <i className={`fa-${wishStatus} fa-heart`}></i>
//                     </Button>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default BookCard;














// import React, { useCallback, useContext, useState } from "react";
// import Rating from "../Rating";
// import { LinkContainer } from "react-router-bootstrap";
// import { Basket } from "react-bootstrap-icons";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import { useCart } from "react-use-cart";
// import { LangContext } from "../../context/LangContext";
// import { useWishlist } from 'react-use-wishlist'; // react-use-wishlist paketindən import edirik
// import { useBetween } from "use-between";
// import SharedCanvas from "../SharedCanvas";

// const BookCard = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange, stock }) => {
//   const [show, setShow] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();
//   const { setShowCanvas } = useBetween(SharedCanvas);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [lang] = useContext(LangContext);
//   const normalizedCategory = Array.isArray(category) ? category : [category];
//   const normalizedTags = Array.isArray(tags) ? tags : [tags];

//   // react-use-wishlist'dan hook'u istifadə edirik
//   const { isEmpty, totalItems, items, addWishlistItem, removeWishlistItem } = useWishlist();

//   // Wishlist kontrolü
//   const isInWishlist = items.some(wishItem => wishItem.id === id);
//   const [wishStatus, setWishStatus] = useState(isInWishlist ? "solid" : "regular");

//   // const wishClick = useCallback(() => {
//   //   if (isInWishlist) {
//   //     removeWishlistItem(item.id);
//   //     setWishStatus("regular");
//   //   } else {
//   //     addWishlistItem(item); // İndi burası düzgün işləyəcək
//   //     setWishStatus("solid");
//   //   }
//   // }, [item, isInWishlist, removeWishlistItem, addWishlistItem]);

// //   const wishClick = useCallback(() => {
// //     if (isInWishlist) {
// //         removeWishlistItem(item.id);
// //         setWishStatus("regular");
// //     } else {
// //         console.log('Adding to wishlist:', item); // Konsolda item-i görmək üçün
// //         addWishlistItem(item); // İndi burası düzgün işləyəcək
// //         setWishStatus("solid");
// //     }
// // }, [item, isInWishlist, removeWishlistItem, addWishlistItem]);

// const wishClick = useCallback(() => {
//   console.log('Item being added to wishlist:', item); // Yoxla
//   if (isInWishlist) {
//       removeWishlistItem(item.id);
//       setWishStatus("regular");
//   } else {
//       addWishlistItem(item);
//       setWishStatus("solid");
//   }
// }, [item, isInWishlist, removeWishlistItem, addWishlistItem]);

  

//   return (
//     <>
//       <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
//         <div className="book-img-div d-flex align-items-center justify-content-center">
//           <LinkContainer to={`/shop/${id}`} className="book-img d-flex align-items-center justify-content-center">
//             <img src={image} alt="book" />
//           </LinkContainer>
//           <span className={`text-uppercase ${stock ? "d-none" : ""}`}>Sold out</span>
//           <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
//             <Button variant="none" className="wish-icon mb-2" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//             <Button variant="none" className="view-icon mb-2" onClick={handleShow}>
//               <i className="fa-regular fa-eye" />
//             </Button>
//             <Button variant="none" className={`add-cart-icon ${stock ? "" : "disable-hover"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//               <Basket className="mb-1" />
//             </Button>
//           </div>
//         </div>
//         <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
//           <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
//             <p>{cutTitle && title.length > 15 ? title.substring(0, 15).concat("...") : title}</p>
//           </LinkContainer>
//           <Rating star={star} count={star} />
//           <a href="/" className="author text-decoration-none">{author}</a>
//           <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
//           <div className="price mt-2">${price.toFixed(2)}</div>
//           <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
//             <LinkContainer to="/shop">
//               <a href="/" className={`text-decoration-none section-btn me-4 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//                 <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//               </a>
//             </LinkContainer>
//             <Button variant="none" className="add-wish" onClick={wishClick}>
//               <i className={`fa-${wishStatus} fa-heart`}></i>
//             </Button>
//           </div>
//         </div>
//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton></Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
//                 <img src={image} alt="book" width="330px" />
//               </Col>
//               <Col sm={12} md={6} className="book-info">
//                 <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
//                   <p>{title}</p>
//                 </LinkContainer>
//                 <Rating star={star} count={0} />
//                 <div className="book-price">${price.toFixed(2)}</div>
//                 <div className="book-desc mb-3">{briefDesc}</div>
//                 <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
//                 <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
//                   <div className="modal-quantity d-flex align-items-center me-3">
//                     <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
//                     <input type="number" readOnly id="quantity" name="quantity" min="1" value={quantity} />
//                     <button onClick={() => setQuantity(quantity + 1)}>+</button>
//                   </div>
//                   <div className="modal-res d-flex align-items-center">
//                     <LinkContainer to={window.location.pathname}>
//                       <a href="/" className={`text-decoration-none section-btn me-3 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
//                         <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
//                       </a>
//                     </LinkContainer>
//                     <Button variant="none" className="add-wish" onClick={wishClick}>
//                       <i className={`fa-${wishStatus} fa-heart`}></i>
//                     </Button>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default BookCard;
















import React, { useCallback, useContext, useState, useEffect } from "react";
import Rating from "../Rating";
import { LinkContainer } from "react-router-bootstrap";
import { Basket } from "react-bootstrap-icons";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { LangContext } from "../../context/LangContext";
import { useWishlist } from 'react-use-wishlist';
import { useBetween } from "use-between";
import SharedCanvas from "../SharedCanvas";

const BookCard = ({ item, id, image, title, author, price, star, category, tags, cutTitle, flexStyle, briefDesc, listChange, stock }) => {
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();
    const { setShowCanvas } = useBetween(SharedCanvas);
    const { addWishlistItem, removeWishlistItem, items } = useWishlist();
    const [lang] = useContext(LangContext);

    const isInWishlist = items.some(wishItem => wishItem.id === id);
    const [wishStatus, setWishStatus] = useState(isInWishlist ? "solid" : "regular");

    const wishClick = useCallback(() => {
        console.log('Item being added to wishlist:', item);
        if (isInWishlist) {
            removeWishlistItem(item.id);
            setWishStatus("regular");
        } else {
            addWishlistItem(item);
            console.log('Item added to wishlist');
            setWishStatus("solid");
        }
    }, [item, isInWishlist, removeWishlistItem, addWishlistItem]);

    useEffect(() => {
        console.log('Updated wishlist items:', items);
    }, [items]);

    return (
        <div className={`book-card d-flex ${flexStyle} justify-content-center ${listChange ? "align-items-center list-change" : ""}`}>
            <div className="book-img-div d-flex align-items-center justify-content-center">
                <LinkContainer to={`/shop/${id}`} className="book-img d-flex align-items-center justify-content-center">
                    <img src={image} alt="book"  />
                </LinkContainer>
                <span className={`text-uppercase ${stock ? "d-none" : ""}`}>Sold out</span>
                <div className={`book-img-hover flex-column ${flexStyle === "flex-column" ? "d-flex" : "d-none"}`}>
                    <Button variant="none" className="wish-icon mb-2" onClick={wishClick}>
                        <i className={`fa-${wishStatus} fa-heart`}></i>
                    </Button>
                    <Button variant="none" className="view-icon mb-2" onClick={() => setShow(true)}>
                        <i className="fa-regular fa-eye" />
                    </Button>
                    <Button variant="none" className={`add-cart-icon ${stock ? "" : "disable-hover"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
                        <Basket className="mb-1" />
                    </Button>
                </div>
            </div>
            <div className={`book-info pt-3 ${listChange ? "ps-4 pe-5" : ""}`}>
                <LinkContainer to={`/shop/${id}`} className="book-name text-decoration-none mb-2">
                    <p>{cutTitle && title.length > 15 ? title.substring(0, 15).concat("...") : title}</p>
                </LinkContainer>
                <Rating star={star} count={star} />
                <a href="/" className="author text-decoration-none">{author}</a>
                <p className={`brief-desc ${listChange ? "" : "d-none"}`}>{briefDesc}</p>
                <div className="price mt-2">${price.toFixed(2)}</div>
                <div className={`cart-footer d-flex align-items-center ${listChange ? "" : "d-none"}`}>
                    <LinkContainer to="/shop">
                        <a href="/" className={`text-decoration-none section-btn me-4 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
                            <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
                        </a>
                    </LinkContainer>
                    <Button variant="none" className="add-wish" onClick={wishClick}>
                        <i className={`fa-${wishStatus} fa-heart`}></i>
                    </Button>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12} md={6} className="modal-img d-flex justify-content-center align-items-center">
                            <img src={image} alt="book" width="330px" />
                        </Col>
                        <Col sm={12} md={6} className="book-info">
                            <LinkContainer to={`/shop/${id}`} className="book-name mb-0 pb-0">
                                <p>{title}</p>
                            </LinkContainer>
                            <Rating star={star} count={0} />
                            <div className="book-price">${price.toFixed(2)}</div>
                            <div className="book-desc mb-3">{briefDesc}</div>
                            <label htmlFor="quantity">{lang === "en" ? "Quantity" : "Say"}</label>
                            <div className="modal-actions d-flex justify-content-start align-items-center pt-0 mt-1">
                                <div className="modal-quantity d-flex align-items-center me-3">
                                    <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                                    <input type="number" readOnly id="quantity" name="quantity" min="1" value={quantity} />
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <div className="modal-res d-flex align-items-center">
                                    <LinkContainer to={window.location.pathname}>
                                        <a href="/" className={`text-decoration-none section-btn me-3 ${stock ? "" : "disable-btn"}`} onClick={() => { addItem(item, quantity); setShow(false); setShowCanvas(true); }}>
                                            <i className="fas fa-shopping-basket"></i> &nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}
                                        </a>
                                    </LinkContainer>
                                    <Button variant="none" className="add-wish" onClick={wishClick}>
                                        <i className={`fa-${wishStatus} fa-heart`}></i>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default BookCard;
