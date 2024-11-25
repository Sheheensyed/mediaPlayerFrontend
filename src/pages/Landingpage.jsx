import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col sm={12} md={6}>
            <h3>Welcome to <span className='text-warning'>Media player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt unde voluptatum. Numquam soluta, assumenda eos nostrum laboriosam expedita laudantium laborum hic labore sit esse architecto nihil, ab, vel adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores laudantium ex porro qui, harum accusamus, dolore velit consequatur provident sapiente ullam nisi, corporis repellendus ut repellat recusandae! Ipsum, maiores asperiores. </p>
            <Link to={'/home'}><button className='btn btn-warning mt-5'>Get started</button></Link>
          </Col>

          <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
            <img src="https://experimedia.net/wp-content/uploads/2023/12/image-155-1024x701.jpeg.webp" alt="No image" className='w-75 rounded' />
          </Col>
        </Row>

        <div className='container-fluid mt-5'>
          <h1 className='text-center'>Features</h1>

          <Row className='mt-3'>

            <Col md={6} lg={4} className='mb-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.tenor.com/-Y2YOay3_JoAAAAM/its-friday-dancing.gif" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className='mb-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/6876788/96633009-d1818000-1318-11eb-9f1d-7f914f4ccb16.gif" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className='mb-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://bs.uenicdn.com/blog/wp-content/uploads/2018/04/giphy.gif" height={252} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>

            <div className="container-fluid mt-5">
              <div className='row'>
                <div className="col-md-1"></div>
                <div className="col-md-10 border border-2 border-light p-3 rounded">
                  <div className="row">
                    <div className='col-md-6'>
                      <h1 className='text-warning mt-3'>Simple fast and powerful</h1>
                      <p style={{ textAlign: 'justify' }}> <span style={{ fontSize: '30px', fontWeight: '400' }}>Play everything </span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit iure ab quasi soluta, corporis cupiditate molestias, obcaecati fuga sunt expedita, enim facere dicta quos maiores id accusantium beatae. Reprehenderit.</p>
                      <p style={{ textAlign: 'justify' }}> <span style={{ fontSize: '30px', fontWeight: '400' }}>Play everything </span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit iure ab quasi soluta, corporis cupiditate molestias, obcaecati fuga sunt expedita, enim facere dicta quos maiores id accusantium beatae. Reprehenderit.</p>
                      <p style={{ textAlign: 'justify' }}> <span style={{ fontSize: '30px', fontWeight: '400' }}>Play everything </span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit iure ab quasi soluta, corporis cupiditate molestias, obcaecati fuga sunt expedita, enim facere dicta quos maiores id accusantium beatae. Reprehenderit.</p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    <iframe height="395" src="https://www.youtube.com/embed/Zd88lzCWjpA" title="How a Nighthawk Was Shot Down" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-100 rounded'></iframe>
                  </div>
                </div>
              </div>
            </div>

          </Row>
        </div >
      </Container >
    </>
  )
}

export default Landingpage
