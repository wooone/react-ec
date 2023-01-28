import { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import ProductsList from "../../components/product/ProductsList";

import products from "../../constants/data/products";


const HomePageBestSalesSection = () => {
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <section className="pt-2">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="text-primary_color font-semibold">Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default HomePageBestSalesSection;
