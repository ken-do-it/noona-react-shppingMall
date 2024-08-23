import React, {useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';


const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] =useSearchParams()

  const getProducts = async () => {
    let searchQuery = encodeURIComponent(query.get('q') || "");

    // let searchQuery = query.get('q') || "";
    console.log('쿼리값은? ', searchQuery)
    let url = ` https://my-json-server.typicode.com/ken-do-it/noona-react-shppingMall/products?q=${searchQuery}`;
    let response = await fetch(url);

    if (!response.ok) {
      console.error('Failed to fetch data:', response.status);
      return;
    }


    let data = await response.json();
    setProductList (data);
  }


  useEffect(() => {
    getProducts();
  }, [query]); // query가 변경될 때만 useEffect 실행



  return (
    <div>

<Container> 
      <Row>
        {productList.length > 0 ? (
          productList.map((item) => (
            <Col lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          // <div>검색 결과가 없습니다</div>
        )}
      </Row>
    </Container>
    </div>
  )
}

export default ProductAll


