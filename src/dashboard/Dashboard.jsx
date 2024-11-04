// import React from 'react'
// import { Button, Col, Form } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import "../assets/scss/_dashboard.scss"

// const Dashboard = () => {
//   return (
//     <Container className='my-5 dashboard'>
//     <h1 className='text-center'>{lang === "en" ? "Dashboard" : "Idarə Paneli"}</h1>
//     <LinkContainer to="/dashboard/add">
//         <Button className='mb-2 add-btn' variant='none'>+ {lang === "en" ? "Add" : "Əlavə et"}</Button>
//     </LinkContainer>
//     <Table bordered responsive>
//         <thead>
//             <tr>
//                 <th>#</th>
//                 <th>{lang === "en" ? "Photo" : "Şəkil"}</th>
//                 <th>{lang === "en" ? "Title" : "Başlıq"}</th>
//                 <th>{lang === "en" ? "Description" : "Təsvir"}</th>
//                 <th>{lang === "en" ? "Category" : "Kateqoriya"}</th>
//                 <th>{lang === "en" ? "Person" : "Şəxs"}</th>
//                 <th>{lang === "en" ? "Date" : "Tarix"}</th>
//                 <th></th>
//             </tr>
//         </thead>
//         <tbody>
//             {blogData.map((item, i) => {
//                 return <tr key={i}>
//                     <td>{i + 1}</td>
//                     <td>
//                         <img src={item.photo} alt="blog" width={60} />
//                     </td>
//                     <td>{item.title}</td>
//                     <td>{item.desc}</td>
//                     <td>{item.cat}</td>
//                     <td>{item.person}</td>
//                     <td>{item.date}</td>
//                     <td className='text-center'>
//                         <LinkContainer to={`/dashboard/edit/${item.id}`}>
//                             <Button className='edit-btn me-2' variant='warning'><PencilSquare /></Button>
//                         </LinkContainer>
//                         <Button className='rmv-btn' variant='danger' onClick={() => { dispatch(removeBlogFromDatabase(item.id)); window.location.reload(); }}><X fontSize={16} /></Button>
//                     </td>
//                 </tr>
//             })}
//         </tbody>
//     </Table>
// </Container>
//   )
// }

// export default Dashboard







import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deleteProductToDatabase } from '../../tools/actions/shopAction';
import slugify from 'slugify';
import { deleteProductToDatabase } from '../tools/action/shopAction';
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useContext } from 'react';
import {LangContext} from '../context/LangContext';

function Dashboard() {

const [lang] = useContext(LangContext);
  const data = useSelector(p => p);
  const dispatch = useDispatch();
  return (
    <>
      <div className="dashboard">
        <div className='container '>
          <Link to="/dashboard/add" className='dashboard-btn btn mt-4 mb-4'>{lang === "en" ? "Add" : "Əlavə et"}</Link>
          <div className="table-responsive">
            <table className='table table-striped  '>
              <thead>
                <tr>
                  <th>#</th>
                  <th>{lang === "en" ? "Photo" : "Şəkil"}</th>
                  <th>{lang === "en" ? "Title" : "Başlıq"}</th>
                  <th>{lang === "en" ? "Price" : "Qiymət"}</th>
                  <th>{lang === "en" ? "Category" : "Kateqoriya"}</th>
                  <th>{lang === "en" ? "Description" : "Təsvir"}</th>
                  <th>{lang === "en" ? "Edit" : "Redaktə"}</th>
                  <th>{lang === "en" ? "Delete" : "Sil"}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, c) => (
                  <tr key={item.id}>
                    <td>{c + 1}</td>
                    <td><img width={100} src={item.image} alt={item.title} /></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.description.slice(0,20)}...</td>
                    <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='dashboard-btn btn'><MdOutlineEdit /></Link></td>
                    <td><button onClick={() => { dispatch(deleteProductToDatabase(item.id)) }} className='dashboard-btn btn'><MdOutlineDelete /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Dashboard;