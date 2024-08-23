import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'




  const ProductDetail = () => {

    let {id} = useParams()
    const [product,setProduct] = useState(null)

    const getProductDetail = async ()=> {
      let url =`https://my-json-server.typicode.com/ken-do-it/noona-react-shppingMall/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data) ;
      setProduct(data)
    }



  useEffect(()=>{
    getProductDetail()
  },)



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