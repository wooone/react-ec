import { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Helmet title="Login">
        <section>
          <Container>
            <Row>
              <Col lg="6" className="m-auto text-center">
                <h3 className="font-semibold text-2xl mb-5">Login</h3>

                <Form className="bg-primary_color p-8 rounded-md">
                  <FormGroup>
                    <input
                      className="border-gray-300 border border-solid w-full p-2 mb-3 mt-3 outline-none"
                      type="email"
                      placeholder="信箱"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      className="border-gray-300 border border-solid w-full p-2 outline-none"
                      type="password"
                      placeholder="密碼"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button
                    type="submit"
                    className="text-primary_color bg-white px-5 py-2 rounded-md mt-8"
                  >
                    立即登入
                  </button>
                  <p className="mt-5 text-sm">
                    還沒有帳號嗎？ <Link to="/signup">立即註冊</Link>
                  </p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default LoginPage;
