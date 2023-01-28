import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

const HomePageNewArrivalsSection = () => {
  const [mobileProducts, setMobileProducts] = useState([]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="text-primary_color font-semibold">New Arrivals</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePageNewArrivalsSection;
