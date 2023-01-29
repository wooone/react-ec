import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FooterStyled } from "./Footer.style";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyled>
      <Container>
        <Row>
          <Col lg="4">
            <div className="d-flex items-center gap-x-[8px]">
              <div>
                <h1 className="text-lg font-semibold text-white whitespace-nowrap">
                  雞皮購物
                </h1>
              </div>
            </div>
            <p className="mt-4 leading-7 text-gray-300 text-sm">
              Laboris velit exercitation magna id ad excepteur. Pariatur cillum
              ex minim laboris. Deserunt laboris do amet nostrud. Nostrud
              consequat est dolore.
            </p>
          </Col>
          <Col lg="3">
            <div>
              <h4 className="mb-3 font-semibold text-white">熱銷類別</h4>
              <ListGroup className="mb-3 ">
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="#" className="hover:text-gray-400">智慧手機</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="#" className="hover:text-gray-400">摩登沙發</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="#" className="hover:text-gray-400">扶手椅</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="#" className="hover:text-gray-400">智慧手錶</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div>
              <h4 className="mb-3 font-semibold text-white">相關連結</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="/shop" className="hover:text-gray-400">商店</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="/cart" className="hover:text-gray-400">購物車</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="/login" className="hover:text-gray-400">會員登入</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent text-gray-300">
                  <Link to="#" className="hover:text-gray-400">隱私權政策</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div>
              <h4 className="mb-3 font- text-white">聯絡我們</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 bg-transparent text-white d-flex items-center gap-x-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p className="text-gray-300 mb-[5px] text-sm">600, 東區中山路 20 號</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 bg-transparent text-white d-flex items-center gap-x-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p className="text-gray-300 mb-[5px] text-sm">+886 9 0123-4567</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 bg-transparent text-white d-flex items-center gap-x-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p className="text-gray-300 mb-[5px] text-sm">zz09.yw@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="mt-4 text-center text-sm text-gray-100">
              Copyright {year} developed by Lainey Wang. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
