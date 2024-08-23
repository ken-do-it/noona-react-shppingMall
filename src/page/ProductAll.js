import React, {useEffect, useState, useCallback} from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';




const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query ] =useSearchParams()
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가


   // getProducts 함수를 useCallback으로 감싸기
   const getProducts = useCallback(async () => {
    let searchQuery = encodeURIComponent(query.get('q') || "");

    try {
      setLoading(true);
      let url = `https://my-json-server.typicode.com/ken-do-it/noona-react-shppingMall/products?q=${searchQuery}`;
      let response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      let data = await response.json();
      setProductList(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [query]); // query가 변경될 때만 getProducts 함수가 재정의됨

  useEffect(() => {
    getProducts();
  }, [getProducts]); // getProducts가 변경될 때만 useEffect 실행

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="primary" />
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
           <div>검색 결과가 없습니다</div>
        )}
      </Row>
    </Container>
    </div>
  )
}

export default ProductAll


