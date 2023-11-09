import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
function Resetpassword() {
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  async function EnterRePassword(values) {
    setLoading(true);
    console.log(values);
    let { data } = await axios.put(
      "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      values
    );
    setLoading(false);
    console.log(data);

    navigate("/login");
  }
  let validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required and  writen  as moh.eha@gmail.com")
      .matches(
        /^\w{3,}.?\w{4,}?@(\w{3,}).(\w{3,})$/i,
        "email is required and  writen  as moh.eha@gmail.com"
      ),
    newPassword: Yup.string()
      .required(
        "password is required and sould have from 6-10 number and capital &small liter"
      )
      .matches(
        /^\d{6,10}[A-Z]{1}[a-z]{1}$/i,
        "password is required and sould have from 6-10 number and capital &small liter"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    onSubmit: EnterRePassword,
    validationSchema: validationSchema,
  });
  return (
    <div>
      <div className="my-5">
        <div className="m-auto w-75">
          <h1 className="my-3">Reset Password Now:</h1>
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

            <label className="mb-2" htmlFor="newPassword">
              Enter New Password:
            </label>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              className="mb-2 form-control"
              type="password"
              name="newPassword"
              id="newPassword"
            />

            {formik.errors.newPassword && formik.touched.newPassword ? (
              <div className="alert alert-danger">
                {formik.errors.newPassword}
              </div>
            ) : null}

            {/* {errorMesage?<div className='alert alert-danger'>
              {errorMesage}
             </div>:null} */}
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
                Reset Password
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
