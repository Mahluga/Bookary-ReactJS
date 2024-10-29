// import { Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { LinkContainer } from 'react-router-bootstrap';

// function SingleCard({alldata}) {
//   return (
//   <Col sm={12} md={4}>
//         <Card >
//       <Card.Img variant="top" src={alldata.image} />
//       <Card.Body>
//         <Card.Title>{alldata.title}</Card.Title>
//         <Card.Subtitle>${alldata.price}</Card.Subtitle>
//         <Card.Text>
//           {alldata.desc}
//         </Card.Text>
//       <LinkContainer to="/shop/:id"><Button variant="dark">Read more</Button></LinkContainer>
//       </Card.Body>
//     </Card>
//     </Col>
//   );
// }

// export default SingleCard;






import React from 'react';
import { Card } from 'react-bootstrap';

const SingleCard = ({ image, title, price }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
