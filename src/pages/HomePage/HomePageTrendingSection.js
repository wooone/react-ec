import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "../../components/product/ProductsList";

import products from "../../constants/data/products";

const HomePageTrendingSection = () => {
  const [data, setData] = useState(products);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );

    setData(filteredProducts);
  }, []);

  return (
    <>
      <section className="pt-2">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="text-primary_color font-semibold">
                Trending Products
              </h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePageTrendingSection;
