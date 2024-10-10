export const addBlog = (blog) => ({
    type: "ADD_BLOG",
    blog,
  });
  
  export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch) => {
      const { photo = "", title = "", desc = "", cat="", person="", date="" } = blogData;
      const blog = { photo, title, desc, cat, person, date};
  
      database
        .ref("blogs")
        .push(blog)
        .then((res) => {
          dispatch(
            addBlog({
              id: res.key,
              ...blog,
            })
          );
        });
    };
  };
  
  export const editBlog = (id, update) => ({
    type: "EDIT_BLOG",
    id,
    update,
  });
  
  export const editBlogFromDatabase = (id, updates) => {
    return (dispatch) => {
      return database
        .ref(`blogs/${id}`)
        .update(updates)
        .then(() => {
          dispatch(editBlog(id, updates));
        });
    };
  };
  
  export const removeBlog = ({ id }) => ({
    type: "REMOVE_BLOG",
    id,
  });
  
  export const removeBlogFromDatabase = (id) => {
    return (dispatch) => {
      return database
        .ref(`blogs/${id}`)
        .remove()
        .then(() => {
          dispatch(removeBlog(id));
        });
    };
  };
  
  export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs,
  });
  
  export const getBlogsFromDatabase = () => {
    return (dispatch) => {
      return database
        .ref("blogs")
        .once("value")
        .then((snapshot) => {
          const blogs = [];
  
          snapshot.forEach((blog) => {
            blogs.push({
              id: blog.key,
              ...blog.val(),
            });
          });
  
          dispatch(setBlogs(blogs));
        });
    };
  };
  