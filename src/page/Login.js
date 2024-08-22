import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault();
    console.log("event user function issue")
    setAuthenticate(true);
    navigate("/")
  }




  return (
    <Container>

      <h1 className='cen'>상품 상세페이지를 보려면 로그인하세요.</h1>

    <Form className='login-form' onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='login-text'>이메일 주소 </Form.Label>
        <Form.Control className='input-box' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='login-text'>패스워드</Form.Label>
        <Form.Control className='input-box' type="password" placeholder="Password" />
      </Form.Group>

      <div className='login-button'>

      {/* <Link to =""> */}
        <Button variant="success" type="submit">로그인</Button>
      {/* </Link> */}

      <Link to ="/SignUp">
        <Button variant="success">가입하기</Button>
      </Link>

      </div>
    </Form>

    




  {/* <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}





    </Container>
  )
}

export default Login