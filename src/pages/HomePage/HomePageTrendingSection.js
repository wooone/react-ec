import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "../../components/product/ProductsList";

import products from "../../constants/data/products";

const HomePageTrendingSection = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    setTrendingProducts(filteredTrendingProducts);
  }, []);

  return (
    <>
      <section className="pt-2">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="text-primary_color font-semibold">
                Trending Products
              </h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePageTrendingSection;
