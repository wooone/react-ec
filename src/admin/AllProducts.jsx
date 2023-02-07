import { Col, Container, Row } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";

import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("刪除成功！");
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="w-full">
                <thead className="border-b border-solid border-gray-200">
                  <tr>
                    <th className="pb-2">Image</th>
                    <th className="pb-2">Title</th>
                    <th className="pb-2">Category</th>
                    <th className="pb-2">Price</th>
                    <th className="pb-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <>
                      <tr className="py-5 text-2xl font-semibold">
                        <td>
                          <h3>loading......</h3>
                        </td>
                      </tr>
                    </>
                  ) : (
                    productData.map((item) => (
                      <tr className="border-gray-200 border-b" key={item.id}>
                        <td>
                          <img className="w-[5rem]" src={item.imgUrl} alt="" />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
                            onClick={() => {
                              deleteProduct(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AllProducts;
