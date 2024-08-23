import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Spinner  } from 'react-bootstrap'
import { useParams } from 'react-router-dom'




  const ProductDetail = () => {

    let {id} = useParams()
    const [product,setProduct] = useState(null)
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    const getProductDetail = async ()=> {
      try {
        let url = `https://my-json-server.typicode.com/ken-do-it/noona-react-shppingMall/products/${id}`;
        let response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      // let url =`https://my-json-server.typicode.com/ken-do-it/noona-react-shppingMall/products/${id}`;
      // let response = await fetch(url);
      let data = await response.json();
      // console.log(data) 
      setProduct(data)
      setLoading(false); // 데이터가 로드된 후 로딩 상태 false로 설정
    }catch (error) {
      console.error('Fetch error:', error);
      setLoading(false); // 오류 발생 시에도 로딩 상태 false로 설정
    }
  };



  useEffect(()=>{
    getProductDetail()
  },[id])

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="primary" />
        <div>Loading...</div>
      </div>
    );
  }



  return (
    <div>
      <Container>
        <Row>

          <Col>
          <img src={product?.img} alt="" />
          </Col>

          <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail