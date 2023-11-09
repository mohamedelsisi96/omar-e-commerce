import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";
import { Helmet } from "react-helmet";

export default function Register() {
  let [loading, setLoading] = useState(false);
  let [errorMesage, setErrorMesage] = useState("");
  let navigate = useNavigate();

  let { setUserLogged, userLogged } = useContext(AuthContext);
  useEffect(() => {
    if (window.localStorage.getItem("token") != null) {
      navigate("/home");
    }
  }, []);
  async function register(values) {
    setLoading(true);
    console.log(values);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .catch((err) => {
        console.log(err);
        setErrorMesage(err.response.data.message);
        setLoading(false);
      });
    console.log(data);
    setLoading(false);
    setErrorMesage("");
    navigate("/login");
  }
  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "name shuld be grater than 3 char")
      .max(20, "name shuld be less than 20 char")
      .required("name is required"),
    email: Yup.string()
      .required("email is required and  writen  as moh.eha@gmail.com")
      .matches(
        /^\w{3,}.?\w{4,}?@(\w{3,}).(\w{3,})$/i,
        "email is writen  as moh.eha@gmail.com"
      ),
    password: Yup.string()
      .required(
        "password is required and sould have from 6-10 number and capital &small liter"
      )
      .matches(
        /^\d{6,10}[A-Z]{1}[a-z]{1}$/i,
        "password sould have from 6-10 number and capital &small liter"
      ),
    rePassword: Yup.string()
      .required("rePassword is required")
      .matches(
        /^\d{6,10}[A-Z]{1}[a-z]{1}$/i,
        "password is required and sould have from 6-10 number and capital &small liter"
      )
      .oneOf([Yup.ref("password")]),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^(01(0|1|2|5))\d{8}$/, "egyption phone"),
  });
  // function validate(values){
  //   let errors={}
  //   if(values.name == ""){
  //     errors.name='name is required'
  //   }else if(values.name.length<3){
  //     errors.name='name shuld be grater than 3 char'
  //   }else if(values.name.length>20){
  //     errors.name='name shuld be less than 20 char'
  //   }

  //   if(values.email == ""){
  //     errors.email='email is required'
  //   }else if(! /^\w{3,}.?\w{4,}?@(\w{3,}).(\w{3,})$/i.test(values.email)){
  //     errors.email='email should writen as moh.eha@gmail.com'}

  //     if(values.password == ""){
  //       errors.password='password is required'
  //     }else if(! /^\d{6,10}[A-Z]{1}[a-z]{1}$/i.test(values.password)){
  //       errors.email='password sould have from 6-10 number and capital &small liter'}

  //       if(values.rePassword == ""){
  //         errors.rePassword='rePassword is required'
  //       }else if(values.rePassword!==values.password){
  //         errors.rePassword='password sould = rePasword'}

  //         if(values.phone == ""){
  //           errors.phone='phone is required'
  //         }else if(! /^(01(0|1|2|5))\d{8}$/.test(values.phone)){
  //           errors.phone='enter valide egyption phone'}

  //   return errors
  // }
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: register,
    // validate:validate,
    validationSchema: validationSchema,
  });
  return (
    <div>
      <Helmet>
        <title> Register Page</title>
      </Helmet>
      <div className="my-5">
        <div className="m-auto w-75">
          <h1 className="my-3">Register Now:</h1>
          <form className="my-3" onSubmit={formik.handleSubmit}>
            <label className="mb-2" htmlFor="name">
              Name :
            </label>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.name}
              onChange={formik.handleChange}
              className="mb-2 form-control"
              type="name"
              name="name"
              id="name"
            />

            {formik.errors.name && formik.touched.name ? (
              <div className="alert alert-danger">{formik.errors.name}</div>
            ) : null}

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

            <label className="mb-2" htmlFor="rePassword">
              Repass word :
            </label>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              className="mb-2 form-control"
              type="password"
              name="rePassword"
              id="rePassword"
            />

            {formik.errors.rePassword && formik.touched.rePassword ? (
              <div className="alert alert-danger">
                {formik.errors.rePassword}
              </div>
            ) : null}

            <label className="mb-2" htmlFor="phone">
              Phone :
            </label>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="mb-2 form-control"
              type="tel"
              name="phone"
              id="phone"
            />

            {formik.errors.phone && formik.touched.phone ? (
              <div className="alert alert-danger">{formik.errors.phone}</div>
            ) : null}
            {errorMesage ? (
              <div className="alert alert-danger">{errorMesage}</div>
            ) : null}
            <Link to="/login">you have acount ?</Link>
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
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
