import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "../../components/product/ProductsList";

import products from "../../constants/data/products";

const HomePagePopularCategorySection = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="text-primary_color font-semibold">Popular Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePagePopularCategorySection;
