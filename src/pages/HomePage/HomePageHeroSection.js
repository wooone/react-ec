import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img.png";
import { motion } from "framer-motion";

const HomePageHeroSection = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="bg-hero_bg">
        <Container>
          <Row className="items-center">
            <Col lg="6" md="6">
              <div className="">
                <p className="text-primary_color leading-7 font-semibold">
                  Trending product in {year}
                </p>
                <h2 className="text-primary_color text-[1.8rem] md:text-[2.5rem] font-semibold my-[20px] md:leading-12">
                  Make your Interior More Minimalistic & Modern
                </h2>
                <p className="text-primary_color leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus non arcu sit amet nunc suscipit pharetra vel vel dui.
                  Pellentesque consectetur eu felis sit amet tempus. Etiam a leo
                  orci.
                </p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="bg-gray-800 text-white px-5 py-2 rounded-full my-[20px] hover:bg-gray-700 transition duration-150 ease-out hover:ease-in"
                >
                  <Link to="/shop" className="active:text-white hover:text-white">SHOP NOW</Link>
                </motion.button>
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
