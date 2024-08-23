import React from 'react'
import { useState } from 'react'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'


import {Button, Form, InputGroup, Modal} from 'react-bootstrap';


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


    const [menuOpen, setMenuOpen] = useState(false);

    
        // 로그아웃 모달 상태
    const [showLogoutModal, setShowLogoutModal] = useState(false); 

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
      setShowLogoutModal(true); // 로그아웃 확인 모달 표시
    } else {
      navigate("/login"); // 로그인 페이지로 이동
    }
  };

  const handleLogout = () => {
    setAuthenticate(false);
    setShowLogoutModal(false); // 로그아웃 후 모달 닫기
  };



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div>
     <Container className="container">
        <div className='login-icon' onClick={handleAuth}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "Logout" : "Login"}</div>
        </div>

        <div className='nav-section'>
          <Link to="/">
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

          <div className='input-group'>
            <InputGroup>
              <Button variant="outline-secondary" id="button-addon1">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <Form.Control className='input-box' placeholder="search" onKeyDown={(event) => search(event)} />
            </InputGroup>
          </div>
        </div>
      </Container>

      {/* 로그아웃 확인 모달 */}
      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>로그아웃 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>정말로 로그아웃하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>아니요</Button>
          <Button variant="primary" onClick={handleLogout}>네</Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Navbar