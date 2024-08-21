import React from 'react'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//라우터 
import { Link } from 'react-router-dom';


const Navbar = () => {
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

  return (
    <div className='container'>

        {/* login */}
        <div className='login-icon'>
            <Link to = "/Login">
                <div>
                <FontAwesomeIcon icon={faUser} />
                </div>
            </Link>
            <div>login</div>
        </div>
        

        {/* logo */}
        <div className='nav-section'>

            <Link to="/"> {/* 로고에 링크 추가 */}
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" />
            </Link>

        </div>



        <div className='menu-area'>

            <ul className='menu-list'>
                {menuList.map((menu) => (<li>{menu}</li>))}
            </ul>
    
        <div className='input-group'>
           
            
            {/* <FontAwesomeIcon icon={faSearch} /> */}
            {/* search bar */}
            <InputGroup>
                <Button variant="outline-secondary" id="button-addon1"><FontAwesomeIcon icon={faSearch} /></Button>
                <Form.Control className='input-box' placeholder="search"/>
            </InputGroup>

            {/* <input type="text" /> */}
            </div> {/*input-group*/}


        </div> {/*menu-area*/ }
    </div>
  )
}

export default Navbar