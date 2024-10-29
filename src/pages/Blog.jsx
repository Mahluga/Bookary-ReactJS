import React, { useState, useEffect, useContext } from 'react';
import supabase from '../supabase/clientSupabase';
import BreadCrumb from '../components/BreadCrumb';
import ScrolltoTop from '../components/ScrolltoTop';
import { LangContext } from '../context/LangContext';

const Blog = () => {
  const [lang] = useContext(LangContext);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data: blogsData, error } = await supabase
        .from('blogs')
        .select('*');

      if (error) {
        console.error('Error fetching blogs:', error.message);
      } else {
        setBlogs(blogsData);
        setFilteredBlogs(blogsData);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(value) ||
      blog.text.toLowerCase().includes(value)
    );
    setFilteredBlogs(filtered);
  };

  if (loading) {
    return (
      <div className='d-flex justify-content-center my-5'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
          alt='Loading'
        />
      </div>
    );
  }

  return (
    <>
      <ScrolltoTop />
      <BreadCrumb page={lang === "en" ? "Blog" : "Bloq"} />
      <div className='blogs'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 my-5'>
              <h2 className='text-success mb-4'>Search</h2>
              <div className="search-bar mb-4 d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <div className="search-icon text-align-center align-items-center justify-content-center">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            {filteredBlogs.length === 0 ? (
              <p>No blogs available</p>
            ) : (
              filteredBlogs.map(blog => (
                <div key={blog.id} className='col-12 col-md-6 col-lg-4 my-3'>
                  <div className='blog-post'>
                    <div className="blog-img">
                      <img src={blog.img} alt={blog.title} className='img-fluid' />
                    </div>
                    <div className='d-flex my-3 gap-5'>
                      <p><i className="fa-solid fa-user ms-3 me-1"></i>{blog.text}</p>
                      <p><i className="fa-solid fa-calendar-days me-1"></i>{blog.date}</p>
                    </div>
                    <h5 className='ms-2'>{blog.title}</h5>
                    <p className='ms-2'>{blog.desc.slice(0, 35)}...</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
