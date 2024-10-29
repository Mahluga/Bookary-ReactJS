import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addProductToDatabase } from '../tools/action/shopAction';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-center my-5'>Add product</h1>
      <ProductForm sendForm={(fd) => {
        dispatch(addProductToDatabase(fd));
        Swal.fire("Product added", "", "success");
      }} />
    </div>
  )
}


export default AddProduct