// import React, { useContext } from 'react'
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';
// import { useDispatch } from 'react-redux';
// import { removeWish } from '../../tools/action/wishActions';
// // import { removeWish } from '../../tools/action/wishAction';

// const WishListCard = ({ item }) => {
//     const [lang] = useContext(LangContext)
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);
//     const dispatch = useDispatch()
//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${!item.price.toString().split(".")[1]
//                         ? item.price.toString().concat(".00")
//                         : item.price.toString().split(".")[1].length === 1
//                             ? item.price.toString().concat("0")
//                             : item.price}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} onClick={() => { addItem(item); setShowCanvas(true); }}>
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={() => { dispatch(removeWish({ id: item.id })) }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard







// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';
// import { useWishlist } from 'react-use-wishlist'; // react-use-wishlist-dan import et

// const WishListCard = ({ item }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);
//     const { removeFromWishlist } = useWishlist(); // removeFromWishlist funksiyasını əldə et

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${!item.price.toString().split(".")[1]
//                         ? item.price.toString().concat(".00")
//                         : item.price.toString().split(".")[1].length === 1
//                             ? item.price.toString().concat("0")
//                             : item.price}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={() => { 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={() => { removeFromWishlist(item.id); }} // Redux istifadə etmədən removeFromWishlist çağır
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;














// const WishListCard = ({ item }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);
//     const { removeFromWishlist } = useWishlist();

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span> {/* Formatlama */}
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={() => { 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); // Default davranışı dayandır
//                             removeFromWishlist(item.id); 
//                         }} // Redux istifadə etmədən removeFromWishlist çağır
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }
// export default WishListCard;







// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';
// import { useWishlist } from 'react-use-wishlist';

// const WishListCard = ({ item }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);
//     const { removeFromWishlist } = useWishlist();

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={() => { 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             removeFromWishlist(item.id); 
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;







// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';
// import { useWishlist } from 'react-use-wishlist';

// const WishListCard = ({ item }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);
//     const { removeFromWishlist } = useWishlist();

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={() => { 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             removeFromWishlist(item.id); 
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;





// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';
// import { useWishlist } from 'react-use-wishlist';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // OnRemove funksiyasını çağırın
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;









// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';
// import { useWishlist } from 'react-use-wishlist';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // onRemove funksiyasını çağırın
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;








// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';
// import { useWishlist } from 'react-use-wishlist';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // onRemove funksiyasını çağırın
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;




// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // onRemove funksiyasını çağırın
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;











// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // Burada onRemove funksiyası çağırılır
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;










// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // Burada onRemove funksiyası çağırılır
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;





// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // burada `onRemove` funksiyası çağırılır
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;






// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // burada `onRemove` funksiyası çağırılır
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     )
// }

// export default WishListCard;







// import React, { useContext } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LangContext } from '../../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useBetween } from 'use-between';
// import SharedCanvas from '../SharedCanvas';
// import { Basket } from 'react-bootstrap-icons';

// const WishListCard = ({ item, onRemove }) => {
//     const [lang] = useContext(LangContext);
//     const { addItem } = useCart();
//     const { setShowCanvas } = useBetween(SharedCanvas);

//     return (
//         <tr>
//             <td><img src={item.image} alt="book" width={80} /></td>
//             <td>
//                 <div className="wish-info d-flex flex-column">
//                     <LinkContainer to={`/shop/${item.id}`}>
//                         <strong>{item.title}</strong>
//                     </LinkContainer>
//                     <span>${item.price.toFixed(2)}</span>
//                 </div>
//             </td>
//             <td>
//                 <LinkContainer to={window.location.pathname}>
//                     <a href="/" className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             addItem(item); 
//                             setShowCanvas(true); 
//                         }}
//                     >
//                         <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
//                     </a>
//                 </LinkContainer>
//             </td>
//             <td>
//                 <LinkContainer to="/wishlist">
//                     <a
//                         href="/"
//                         className="text-decoration-none delete-btn"
//                         onClick={(e) => { 
//                             e.preventDefault(); 
//                             onRemove(); // `onRemove` funksiyası çağırılır
//                         }}
//                     >
//                         x
//                     </a>
//                 </LinkContainer>
//             </td>
//         </tr>
//     );
// }

// export default WishListCard;



import React, { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { LangContext } from '../../context/LangContext';
import { useCart } from 'react-use-cart';
import { useBetween } from 'use-between';
import SharedCanvas from '../SharedCanvas';
import { Basket } from 'react-bootstrap-icons';

const WishListCard = ({ item, onRemove }) => {
    const [lang] = useContext(LangContext);
    const { addItem } = useCart();
    const { setShowCanvas } = useBetween(SharedCanvas);

    const handleRemove = (e) => {
        e.preventDefault();
        onRemove(item.id); // Məhsulu wishlist-dan silmək
    };

    return (
        <tr>
            <td><img src={item.image} alt="book" width={80} /></td>
            <td>
                <div className="wish-info d-flex flex-column">
                    <LinkContainer to={`/shop/${item.id}`}>
                        <strong>{item.title}</strong>
                    </LinkContainer>
                    <span>${item.price.toFixed(2)}</span>
                </div>
            </td>
            <td>
                <LinkContainer to={window.location.pathname}>
                    <a
                        href="/"
                        className={`text-decoration-none section-btn ${item.stock ? "" : "disable-btn"}`} 
                        onClick={(e) => { 
                            e.preventDefault(); 
                            addItem(item); 
                            setShowCanvas(true); 
                        }}
                    >
                        <Basket /> <span>&nbsp; {lang === "en" ? "Add to cart" : "Səbətə əlavə et"}</span>
                    </a>
                </LinkContainer>
            </td>
            <td>
                <LinkContainer to="/wishlist">
                    <a
                        href="/"
                        className="text-decoration-none delete-btn"
                        onClick={handleRemove} // Silmə funksiyasını çağırır
                    >
                        x
                    </a>
                </LinkContainer>
            </td>
        </tr>
    );
}

export default WishListCard;
