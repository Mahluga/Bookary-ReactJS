// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// //../data/data.js

// export const ShopContext = createContext(null);

// export const ShopProvider = ({ children }) => {
//     const [books, setBooks] = useState([])


//     useEffect(() => {
//         axios.get("https://mocki.io/v1/793b383b-4789-438e-a66b-c44da950768a")
//             .then(res => setBooks(res.data));
//     }, [])

//     return (
//         <ShopContext.Provider value={[books, setBooks]}>
//             {children}
//         </ShopContext.Provider>
//     )
// }
