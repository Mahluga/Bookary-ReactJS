export const addWish = ({ id, image, title, price, storeWish, stock }) => ({
    type: "ADD_WISH",
    wish: {
      id,
      image,
      title,
      price,
      storeWish,
      stock
    },
  });
  
  export const removeWish = ({ id }) => ({
    type: "REMOVE_WISH",
    id,
  });