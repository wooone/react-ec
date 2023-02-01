import { Form, FormGroup } from "reactstrap";
import { InputStyled } from "./CheckoutPage.style";

const CheckoutPageForm = () => {
  return (
    <>
      <h6 className="mb-4">帳單詳細資訊</h6>
      <Form className="">
        <FormGroup>
          <InputStyled type="text" placeholder="輸入你的名字" />
        </FormGroup>
        <FormGroup>
          <InputStyled type="email" placeholder="輸入你的Email" />
        </FormGroup>
        <FormGroup>
          <InputStyled type="number" placeholder="輸入你的電話" />
        </FormGroup>
        <FormGroup>
          <InputStyled type="text" placeholder="地址" />
        </FormGroup>

        <FormGroup>
          <InputStyled type="text" placeholder="城市" />
        </FormGroup>
        <FormGroup>
          <InputStyled type="number" placeholder="郵遞區號" />
        </FormGroup>
        <FormGroup>
          <InputStyled type="text" placeholder="鄉鎮市區" />
        </FormGroup>
      </Form>
    </>
  );
};

export default CheckoutPageForm;
