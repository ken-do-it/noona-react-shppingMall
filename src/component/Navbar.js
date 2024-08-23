import React from 'react'
import { useState } from 'react'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//라우터 
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성'
    ]

    // useNavigate 훅 호출
    const navigate = useNavigate(); 

    const search =(event)=>{
        if (event.key === "Enter"){
            // 입력한 검색어를 가져와서 
            let keyword = event.target.value
            //url을 바꿔준다
            navigate(`/?q=${keyword}`)
        }
    }


    const handleAuth = () => {
        if (authenticate) {
          setAuthenticate(false); // 로그아웃 처리
        } else {
          navigate("/login"); // 로그인 페이지로 이동
        }
      };


      const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <Container>

        {/* login */}
        <div className='login-icon' onClick={handleAuth}>
            {/* <Link to = "/Login"> */}
               
                <FontAwesomeIcon icon={faUser} />
                <div>{authenticate ? "Logout" : "Login"}</div>
            
            {/* </Link> */}
            {/* <div>login</div> */}
        </div>
        

        {/* logo */}
        <div className='nav-section'>

            <Link to="/"> {/* 로고에 링크 추가 */}
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" />
            </Link>

        </div>



        <div className='menu-area'>
            

        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
          {menuList.map((menu, index) => (<li key={index}>{menu}</li>))}
        </ul>

            {/* <ul className='menu-list'>
                {menuList.map((menu) => (<li>{menu}</li>))}
            </ul> */}
    
        <div className='input-group'>
           
            <InputGroup>
                <Button variant="outline-secondary" id="button-addon1"><FontAwesomeIcon icon={faSearch} /></Button>

                {/* 최신리액트에서는 onkeypress가 -> onkeydown으로 */}
                <Form.Control className='input-box' placeholder="search" onKeyDown={(event)=>search(event)}/>
            </InputGroup>

            </div> 
        </div> 
    </Container>
  )
}

export default Navbar