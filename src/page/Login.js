import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container'>
      
      <h1 className='cen'>상품 상세페이지를 보려면 로그인하세요.</h1>
      <h1 className='cen'>This is personal project page not real page!! </h1>

      <Form className='login-form'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='login-text'>이메일 주소 </Form.Label>
        <Form.Control className='input-box' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='login-text'>패스워드</Form.Label>
        <Form.Control className='input-box' type="password" placeholder="Password" />
      </Form.Group>

      <div className='login-button'>

      <Link to ="/">
        <Button variant="success">Log in</Button>
        </Link>

      <Link to ="/SignUp">
        <Button variant="success">Sign Up</Button>
      </Link>

      </div>
    </Form>

    
    </div>
  )
}

export default Login