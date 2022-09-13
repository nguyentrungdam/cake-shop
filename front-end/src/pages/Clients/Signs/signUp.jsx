import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import FooterMini from "../../../components/footerMini";
import { useDispatch } from "react-redux";
import { signup } from "../../../slices/authSlice";
import { useEffect } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [errIcon, setErrIcon] = useState("");
  const [loadingg, setLoadingg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setErr("Tên tối thiểu 3 ký tự");
      setErrIcon("error");
    } else if (!email.includes(".com", 0)) {
      setErr("Email phải có .com");
      setErrIcon("warning");
    } else if (password.length < 6 || confirmPassword.length < 6) {
      setErr("Độ dài tối thiểu là 6");
      setErrIcon("error");
    } else if (password !== confirmPassword) {
      setErr("Mật khẩu không trùng khớp!");
      setErrIcon("error");
    } else {
      try {
        const res = await dispatch(signup({ email, password, name })).unwrap();
        if (res.status === 201) {
          setErr("Đăng ký thành công!");
          setErrIcon("success");
          setTimeout(function () {
            navigate("/signin");
          }, 1000);
        }
      } catch (error) {
        setErr(error.error);
        setErrIcon("error");
      }
    }
  };

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
            <div className="navbar__sign__content--left--title">Đăng ký</div>
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
            <h1 className="H1__tag">Đăng Ký</h1>
            <form className="FormSign" onSubmit={handleSignUp}>
              <label className="LabelSign">Tên Người Dùng</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn"
                required
              />

              <label className="LabelSign">Địa Chỉ Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập địa chỉ email"
                required
              />

              <label className="LabelSign">Mật Khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                required
              />

              <label className="LabelSign">Xác Nhận Mật Khẩu</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Xác nhận mật khẩu"
                required
              />

              <button disabled={loadingg} className="ButtonSign" type="submit">
                Đăng Ký
              </button>
              {err && (
                <Alert
                  variant="standard"
                  severity={errIcon}
                  style={{ margin: "15px 54px 0 0" }}
                >
                  {err}
                </Alert>
              )}
            </form>
            <div className="BottomSign">
              <p>
                Bạn đã đăng ký?
                <br />
                <span className="line">
                  <span>
                    <Link className="SignLink" to="/signin">
                      Đăng Nhập
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
