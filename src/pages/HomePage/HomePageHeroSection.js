import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img.png";

const HomePageHeroSection = () => {
  const year = new Date().getFullYear();
  
  return (
    <>
      <section className="">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="">
                <p className="">Trending product in {year}</p>
                <h2 className="">Make your Interior Minimalistic & Modern</h2>
                <p className="">假字假字假字假字假字假字假字假字假字假字假字</p>
                <button className="">SHOP NOW</button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePageHeroSection;
