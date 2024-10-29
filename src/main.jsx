import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import './assets/scss/style.scss';
import shopStore from './tools/store/shopStore'
import { Provider } from 'react-redux';
import supabase from './supabase/clientSupabase'
import { addProduct } from './tools/action/shopAction';
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist';

const store = shopStore();

store.subscribe(() => {
  console.log(store.getState());
})
const fetchData = async () => {
  const { data, error } = await supabase.from('products').select()
  if (error) {
    console.log(error);
  } else {
    data.map(item => (
      store.dispatch(addProduct({
        id: item.id,
        image: item.image,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        author: item.author,
        stock: item.stock,
        star: item.star,
        briefDescription: item.briefDescription,
        storeWish: item.storeWish,
        tags: item.tags,
        sku: item.sku,
        mode: item.sku
      }))

    ))
  }
}
fetchData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <WishlistProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </WishlistProvider>
  </CartProvider>
)