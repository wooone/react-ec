import { Container, Row, Col } from "reactstrap";
import Common from "../../common/Common";
import Helmet from "../../components/helmet/Helmet";

import {
  SelectStyled,
  OptionStyled,
  SearchBox,
  InputStyled,
} from "./ShopPage.style";

import { useState } from "react";

import products from "../../constants/data/products";

import ProductLists from "../../components/product/ProductsList";

const ShopPage = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredProducts);
    } else {
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchProducts);
  };
  return (
    <>
      <Helmet title="商店">
        <Common title="Products" />

        <section>
          <Container>
            <Row>
              <Col lg="3" md="6">
                <div className="mb-[30px] lg:mb-0">
                  <SelectStyled onChange={handleFilter}>
                    <OptionStyled >filter By Category</OptionStyled>
                    <OptionStyled value="sofa">Sofa</OptionStyled>
                    <OptionStyled value="mobile">Mobile</OptionStyled>
                    <OptionStyled value="chair">Chair</OptionStyled>
                    <OptionStyled value="watch">Watch</OptionStyled>
                    <OptionStyled value="wireless">Wireless</OptionStyled>
                  </SelectStyled>
                </div>
              </Col>
              <Col lg="3" md="6" className="text-end">
                <div>
                  <SelectStyled>
                    <OptionStyled>Sort By Category</OptionStyled>
                    <OptionStyled value="ascending">Ascending</OptionStyled>
                    <OptionStyled value="decending">Decending</OptionStyled>
                  </SelectStyled>
                </div>
              </Col>
              <Col lg="6" md="12">
                <SearchBox>
                  <InputStyled
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                  />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </SearchBox>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1 className="text-2xl">沒有符合的商品</h1>
              ) : (
                <ProductLists data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default ShopPage;
