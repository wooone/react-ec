import { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import ProductsList from "../../components/product/ProductsList";

import useGetData from "../../custom-hooks/useGetData";

const HomePageBestSalesSection = () => {
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const { data: products, loading } = useGetData("products");

  useEffect(() => {
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setBestSalesProducts(filteredBestSalesProducts);
  }, [products]);

  return (
    <section className="pt-2">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="text-primary_color font-semibold">Best Sales</h2>
          </Col>
          {loading ? (
            <h5>Loading....</h5>
          ) : (
            <ProductsList data={bestSalesProducts} />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default HomePageBestSalesSection;
