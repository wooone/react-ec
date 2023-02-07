import { deleteDoc, doc } from "firebase/firestore";
import { Col, Container, Row } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const Users = () => {
  const { data: usersData, loading } = useGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
	toast.success('刪除成功！')
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h4 className="font-semibold">Users</h4>
            </Col>
            <Col lg="12" className="pt-5">
              <table className="w-full">
                <thead className="border-b border-solid border-gray-200">
                  <tr>
                    <th className="pb-2">Image</th>
                    <th className="pb-2">UserName</th>
                    <th className="pb-2">Email</th>
                    <th className="pb-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <h5 className="pt-5 font-semibold">Loading.....</h5>
                  ) : (
                    usersData?.map((user) => (
                      <tr key={user.uid}>
                        <td>
                          <img
                            className="w-[5rem]"
                            src={user.photoURL}
                            alt=""
                          />
                        </td>
                        <td>{user.displayName}</td>
                        <td>{user.email}</td>
                        <td>
                          <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700" onClick={() => {
                              deleteUser(user.uid);
                            }}>
                            Delete
                          </button>
                          {""}
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

export default Users;
