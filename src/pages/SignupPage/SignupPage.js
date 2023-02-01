import { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  return (
    <>
      <Helmet title="Signup">
        <section>
          <Container>
            <Row>
              <Col lg="6" className="m-auto text-center">
                <h3 className="font-semibold text-2xl mb-5">Signup</h3>

                <Form className="bg-primary_color p-8 rounded-md">
                  <FormGroup>
                    <input
                      className="border-gray-300 border border-solid w-full p-2 mb-3 mt-3 outline-none"
                      type="text"
                      placeholder="姓名"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
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
                  <FormGroup>
                    <input
                      className="p-2 outline-none bg-white mt-8 cursor-pointer"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button
                    type="submit"
                    className="text-primary_color bg-white px-5 py-2 rounded-md mt-8"
                  >
                    建立帳號
                  </button>
                  <p className="mt-5 text-sm">
                    已經有帳號嗎？ <Link to="/login">立即登入</Link>
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

export default SignupPage;
