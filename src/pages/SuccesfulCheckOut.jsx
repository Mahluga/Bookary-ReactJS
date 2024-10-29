import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import SingleCard from '../components/cards/SingleCard';

const SuccesfulCheckOut = () => {
  const data = useSelector(p => p);
  const slicedData = data.slice(0, 9);

  return (
    <div>
      <div className="succesful container text-center py-5">
        <h1>The payment has been successful!</h1>
      </div>
      <section className='fastfoods'>
        <h2 className='text-center'>Recommended Books</h2>
        <Container className="mt-5 my-4">
          <Row className="d-flex justify-content-center">
            {slicedData.map(item => (
              <Col xs={12} sm={6} md={4} lg={3} key={item.id} className="mb-4 d-flex justify-content-center">
                <SingleCard
                  item={item}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  author={item.author}
                  price={item.price || 0}
                  star={item.star}
                  category={item.category}
                  tags={item.tags}
                  cutTitle={false}
                  flexStyle="flex-column"
                  briefDesc={item.briefDescription}
                  listChange={true}
                  stock={item.stock}
                />
              </Col>
            ))}
          </Row>
          <Link to='/shop' className='home-btn btn'>View More</Link>
        </Container>
      </section>
    </div>
  );
}

export default SuccesfulCheckOut;
