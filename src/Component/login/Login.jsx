import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet";

export default function Login() {
  let [loading, setLoading] = useState(false);
  let [errorMesage, setErrorMesage] = useState("");
  let navigate = useNavigate();
  let { userLogged, setUserLogged } = useContext(AuthContext);
  useEffect(() => {
    if (window.localStorage.getItem("token") != null) {
      navigate("/home");
    }
  }, []);
  function ForgetPass() {
    let navigate = useNavigate();
    window.localStorage.removeItem("token");
    navigate("/forgetpassword");
  }
  async function Login(values) {
    setLoading(true);
    console.log(values);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((err) => {
        setErrorMesage(err.response.data.message);
        setLoading(false);
      });
    console.log(data);
    localStorage.setItem("token", data.token);
    setLoading(false);
    setErrorMesage("");
    setUserLogged(true);
    navigate("/home");
  }
  let validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required and  writen  as moh.eha@gmail.com")
      .matches(
        /^\w{3,}.?\w{4,}?@(\w{3,}).(\w{3,})$/i,
        "email is required and  writen  as moh.eha@gmail.com"
      ),
    password: Yup.string()
      .required(
        "password is required and sould have from 6-10 number and capital &small liter"
      )
      .matches(
        /^\d{6,10}[A-Z]{1}[a-z]{1}$/i,
        "password sould have from 6-10 number and capital &small liter"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: Login,
    validationSchema: validationSchema,
  });
  return (
    <div>
      <Helmet>
        <title> Login Page</title>
      </Helmet>
      <div className="my-5">
        <div className="m-auto w-75">
          <h1 className="my-3">Login Now:</h1>
          <form className="my-3" onSubmit={formik.handleSubmit}>
            <label className="mb-2" htmlFor="email">
              Email :
            </label>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              className="mb-2 form-control"
              type="email"
              name="email"
              id="email"
            />

            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger">{formik.errors.email}</div>
            ) : null}

            <label className="mb-2" htmlFor="password">
              Pass word:
            </label>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
              className="mb-2 form-control"
              type="password"
              name="password"
              id="password"
            />

            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger">{formik.errors.password}</div>
            ) : null}

            <Link className="forget" to={"/forgetpassword"}>
              forget password ?
            </Link>

            {errorMesage ? (
              <div className="alert alert-danger">{errorMesage}</div>
            ) : null}
            {loading ? (
              <button
                disabled
                type="btn"
                className="ms-auto d-block btn bg-main text-white"
              >
                <i className="fa-solid fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button
                disabled={loading}
                type="botton"
                className="ms-auto d-block btn bg-main text-white"
              >
                Login now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
