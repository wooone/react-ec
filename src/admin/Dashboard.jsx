import React from "react";
import { Col, Container, Row } from "reactstrap";
import { DivStyled, H5Styled, SpanStyled } from "./Dashboard.style";

import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3 md-6">
              <DivStyled className="bg-card_bg_01">
                <H5Styled>Total Sales</H5Styled>
                <SpanStyled>$7890</SpanStyled>
              </DivStyled>
            </Col>
            <Col className="lg-3 md-6">
              <DivStyled className="bg-card_bg_04">
                <H5Styled>Orders</H5Styled>
                <SpanStyled>789</SpanStyled>
              </DivStyled>
            </Col>
            <Col className="lg-3 md-6">
              <DivStyled className="bg-card_bg_03">
                <H5Styled>Total Products</H5Styled>
                <SpanStyled>{products.length}</SpanStyled>
              </DivStyled>
            </Col>
            <Col className="lg-3 md-6">
              <DivStyled className="bg-card_bg_04">
                <H5Styled>Total Users</H5Styled>
                <SpanStyled>{users.length}</SpanStyled>
              </DivStyled>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
