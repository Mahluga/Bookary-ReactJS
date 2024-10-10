import React from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import '../../assets/scss/style.scss'


const Loginone = () => {

  return (
    <>
     {/* <Modal  className="login-modal show" centered > */}
            {/* <Modal.Header> */}
                {/* <Modal.Title>Sign in</Modal.Title> */}
            {/* </Modal.Header> */}
            {/* <Modal.Body> */}
                <div className="login-form">
                    <Form >
                        <Form.Group>
                            <Form.Label>Username or email<span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Username or email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password <span>*</span></Form.Label>
                            <InputGroup className="mb-0">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password" 
                                />
                                <Button variant="outline-secondary" className='pass-btn' id="button-addon2" >
                                    <i className="fa-regular fa-eye"></i>
                                </Button>
                            </InputGroup>
                        </Form.Group>
                        <p className='wrong-login'>err</p>
                        <Button type='submit' variant='none' className='submit-btn text-uppercase'>Login</Button>
                    </Form>
                    <div className="forgot-pass d-flex justify-content-end mt-3">
                        <span>Lost your password?</span>
                    </div>
                </div>
                <div className="forgot-div" >
                    <Form>
                        <Form.Group>
                            <Form.Label>Username or email <span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Username or email" 
                               
                            />
                        </Form.Group>
                     
                        <Button type='submit' variant='none' className='submit-btn text-uppercase'>Submit</Button>
                    </Form>
                    <div className="forgot-pass d-flex justify-content-end mt-3">
                        <span>Back to login</span>
                    </div>
                </div>
            {/* </Modal.Body>
        </Modal> */}
    </>
  )
}

export default Loginone