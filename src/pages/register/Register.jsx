import React from "react";
import AuthLayout from "../../components/layouts/auth/AuthLayout";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  // การเรียกใช้งาน React Hook Form
  // eslint-disable-next-line
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
    },
  });

  // สร้าง function มารับข้อมูลจาก React hook form ไปใช้
  const onSubmit = (data, event) => {
    console.log("event", event);
    console.log(data);
  };

  return (
    <AuthLayout title="Register">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card p-4 col-md-4 my-form"
      >
        <h3 className="text-center mb-4">ลงทะเบียน</h3>

        <div className="mb-3 row">
          <label htmlFor="fullname" className="col-md-4 col-form-label">
            ชื่อ-สกุล
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              {...register("fullname", { required: "กรุณาป้อนชื่อก่อน" })}
            />
            {errors.fullname && (
              <p className="error">{errors.fullname.message}</p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="email" className="col-md-4 col-form-label">
            อีเมล์
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              {...register("email", { required: "กรุณาป้อน Email" })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="username" className="col-md-4 col-form-label">
            ชื่อผู้ใช้
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              {...register("username", { required: "กรุณาป้อน username" })}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="password" className="col-md-4 col-form-label">
            รหัสผ่าน
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              {...register("password", { required: "กรุณาป้อน password" })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="submit" className="col-md-4 col-form-label"></label>
          <div className="col-md-8 btn-action">
            <input
              type="submit"
              className="btn btn-primary"
              name="submit"
              id="submit"
              value="ลงทะเบียน"
            />
            &nbsp;&nbsp;
            <input
              type="button"
              className="btn btn-danger"
              value="ล้างข้อมูล"
              onClick={() => reset()}
            />
          </div>
        </div>

        <div className="mb-2 row btn-action">
          <label htmlFor="" className="col-md-4 col-form-label"></label>
          <div className="col-md-8">
            <Link to="/login">เข้าสู่ระบบ</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
