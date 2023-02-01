import { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../../firebase.config";
import { storage, db } from "../../firebase.config";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // 更新User資料
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            // 儲存資料到firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("帳號建立");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <>
      <Helmet title="Signup">
        <section>
          <Container>
            <Row>
              {loading ? (
                <Col className="text-center">
                  <h6 className="font-semibold">Loading....</h6>
                </Col>
              ) : (
                <Col lg="6" className="m-auto text-center">
                  <h3 className="font-semibold text-2xl mb-5">Signup</h3>

                  <Form
                    className="bg-primary_color p-8 rounded-md"
                    onSubmit={signup}
                  >
                    <FormGroup>
                      <input
                        className="border-gray-300 border border-solid w-full p-2 mb-3 mt-3 outline-none"
                        type="text"
                        placeholder="姓名"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default SignupPage;
