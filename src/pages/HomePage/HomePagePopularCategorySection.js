import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import ProductsList from "../../components/product/ProductsList";

import useGetData from "../../custom-hooks/useGetData";

const HomePagePopularCategorySection = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  const { data: products, loading } = useGetData("products");

  useEffect(() => {
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="text-primary_color font-semibold">
                Popular Category
              </h2>
            </Col>

            {loading ? (
              <h5>Loading....</h5>
            ) : (
              <ProductsList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePagePopularCategorySection;
