import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

import { useDispatch } from "react-redux";
import { signin } from "../../../slices/authSlice";
import FooterMini from "../../../components/footerMini";
import { useEffect } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [errIcon, setErrIcon] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.includes(".com", 0)) {
      setErr("Email không tồn tại!");
      setErrIcon("error");
    } else if (password.length < 6) {
      setErr("Sai mật khẩu!");
      setErrIcon("error");
    } else {
      try {
        const res = await dispatch(signin({ email, password })).unwrap();
        if (res.status === 200 && res.data.user.role === "user") {
          setErr("Người dùng đăng nhập thành công");
          setErrIcon("success");
          setTimeout(function () {
            navigate("/");
          }, 1000);
        } else {
          setErr("Admin đăng nhập thành công");
          setErrIcon("success");
          setTimeout(function () {
            navigate("/admin");
          }, 1000);
        }
      } catch (error) {
        setErr(error.error);
        setErrIcon("error");
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar__sign">
        <div className="navbar__sign__content">
          <div className="navbar__sign__content--left">
            <Link to="/">
              <span className="navbar__sign_content--logo">
                <img
                  className="navbar__sign_content--logo--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
                  alt="logo"
                />
              </span>
            </Link>
            <div className="navbar__sign__content--left--title">Đăng nhập</div>
          </div>
          <span>
            <Link className="SignLink" to="/support">
              Bạn cần giúp đỡ?
            </Link>
          </span>
        </div>
      </nav>

      <div className="sign__container">
        <div className="sign__container__content">
          <section className="SectionSign">
            <h1 className="H1__tag">Đăng Nhập</h1>
            <form className="FormSign" onSubmit={handleLogin}>
              <label className="LabelSign">Địa Chỉ Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                required
              />

              <label className="LabelSign">Mật Khẩu</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                required
              />
              {err && (
                <Alert
                  variant="standard"
                  severity={errIcon}
                  style={{ margin: "15px 54px 0 0" }}
                >
                  {err}
                </Alert>
              )}

              <button className="ButtonSign" type="submit">
                Đăng Nhập
              </button>
            </form>

            <div className="BottomSign">
              <p>
                Chưa có tài khoản?
                <br />
                <span className="line">
                  <span>
                    <Link className="SignLink" to="/signup">
                      Đăng Ký
                    </Link>
                  </span>
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
      <FooterMini />
    </>
  );
}
