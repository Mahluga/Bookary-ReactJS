import { useState } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function ProductForm({ sendForm, editdata }) {
  const [title, setTitle] = useState(editdata ? editdata.title : "");
  const [image, setImage] = useState(editdata ? editdata.image : "");
  const [price, setPrice] = useState(editdata ? editdata.price : "");
  const [description, setDescription] = useState(editdata ? editdata.description : "");
  const [category, setCategory] = useState(editdata ? editdata.category : "");

  const formSubmited = (e) => {
    e.preventDefault();
    if (!image || !title || !description || !price || !category) {
      swal("Please fill in all inputs", "", "warning");
    } else {
      sendForm({
        title, image, price, description, category
      });
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className="col-md-6">
        <form onSubmit={formSubmited}>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Photo<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="img"
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="Type photo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Type title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Type price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category<span className='text-danger'>*</span></label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="Type category"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description<span className='text-danger'>*</span></label>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="desc"
                style={{ height: '100px' }}
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
              <label htmlFor="desc">Type description</label>
            </div>
          </div>
          <button type="submit" className="dashboard-btn btn my-4">
            Add
          </button>

          <Link to='/dashboard' type="submit" className="dashboard-btn btn my-4 ms-4">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
