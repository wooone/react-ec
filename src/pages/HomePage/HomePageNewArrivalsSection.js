import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "../../components/product/ProductsList";

import products from "../../constants/data/products";

const HomePageNewArrivalsSection = () => {
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);

  useEffect(() => {
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
  }, []);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="text-primary_color font-semibold">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePageNewArrivalsSection;
