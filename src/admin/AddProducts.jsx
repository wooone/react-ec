import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { InputStyled } from "./Admin.style"

const AddProducts = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h4 className="text-2xl">Add Product</h4>
              <Form>
                <FormGroup className="flex flex-col">
                  <label>Product title</label>
                  <InputStyled type="text" placeholder="Double Sofa" />
                </FormGroup>
                <FormGroup className="flex flex-col">
                  <label>Short Description</label>
                  <InputStyled type="text" placeholder="lorem..." />
                </FormGroup>

                <FormGroup className="flex flex-col">
                  <label>Description</label>
                  <InputStyled type="text" placeholder="Description ...." />
                </FormGroup>
                <hr></hr>
                <div>
                  <FormGroup className="flex flex-col">
                    <label>Price</label>
                    <InputStyled type="number" placeholder="$100" />
                  </FormGroup>

                  <FormGroup className="flex flex-col">
                    <label>Category</label>
                    <select>
                      <option value="chair">Chair</option>
                      <option value="sofa">Sofa</option>
                      <option value="mobile">Mobile</option>
                      <option value="watch">Watch</option>
                      <option value="wireless">Wireless</option>
                    </select>
                  </FormGroup>
                </div>
                <hr></hr>
                <div>
                  <FormGroup className="flex flex-col">
                    <label>Product Image</label>
                    <input type="file" />
                  </FormGroup>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AddProducts;
