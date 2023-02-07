import { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { InputStyled } from "./Admin.style";
import { toast } from "react-toastify";

import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const porduct = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl: enterProductImg,
    // };

    // add product to the firebase database

    try {
      const docRef = await collection(db, "products");

      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        () => {
          toast.error("圖片未上傳!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downlaoadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downlaoadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("成功新增商品");
      navigate("/dashboard/all-products");
    } catch (error) {
      setLoading(false);
      toast.error("商品新增失敗");
      // console.log(error.message);
    }
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {loading ? (
                <h4 className="py-5">Loading......</h4>
              ) : (
                <>
                  <h4 className="text-2xl mb-5">Add Product</h4>
                  <Form onSubmit={addProduct}>
                    <FormGroup className="flex flex-col">
                      <label>Product title</label>
                      <InputStyled
                        type="text"
                        placeholder="Double Sofa"
                        value={enterTitle}
                        onChange={(e) => setEnterTitle(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="flex flex-col">
                      <label>Short Description</label>
                      <InputStyled
                        type="text"
                        placeholder="lorem..."
                        value={enterShortDesc}
                        onChange={(e) => setEnterShortDesc(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="flex flex-col">
                      <label>Description</label>
                      <InputStyled
                        type="text"
                        placeholder="Description ...."
                        value={enterDescription}
                        onChange={(e) => setEnterDescription(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <hr></hr>
                    <div className="d-flex items-center justify-between gap-x-5">
                      <FormGroup className="flex flex-col w-50">
                        <label>Price</label>
                        <InputStyled
                          type="number"
                          placeholder="$100"
                          value={enterPrice}
                          onChange={(e) => setEnterPrice(e.target.value)}
                          required
                        />
                      </FormGroup>

                      <FormGroup className="flex flex-col w-50">
                        <label>Category</label>
                        <select
                          className="border border-black py-[3.5px]"
                          value={enterCategory}
                          onChange={(e) => setEnterCategory(e.target.value)}
                        >
                          <option>Select Category</option>
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
                        <input
                          type="file"
                          onChange={(e) =>
                            setEnterProductImg(e.target.files[0])
                          }
                          required
                        />
                      </FormGroup>
                    </div>

                    <button
                      className="bg-primary_color text-white py-2 px-6 rounded-md mt-5"
                      type="submit"
                    >
                      新增商品
                    </button>
                  </Form>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AddProducts;
