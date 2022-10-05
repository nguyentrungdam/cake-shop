import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../../slices/authSlice";
import { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { SignInWrapper } from "../../../styles/signInStyle";

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
  const handleChangeColor = (color, e) => {
    let btn = document.getElementById("btn");
    let txt = document.getElementById("txt");
    document.getElementById("signinwrapper").style.backgroundColor = color;
    btn.style.background = color;
    txt.style.borderColor = color;
    //set active///////
    document.querySelectorAll(".color-span").forEach(function (item) {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <>
      <Header></Header>
      <SignInWrapper>
        <main
          className="main-content"
          id="signinwrapper"
          style={{ minHeight: "850px" }}
        >
          <div className="page-width page-content">
            <div className="grid">
              <div className="grid__item medium-up--one-third medium-up--push-one-third">
                <header className="section-header">
                  <h1 id="txt" className="section-header__title">
                    Create Account
                  </h1>
                </header>
                <div id="CustomerLoginForm" className={`form-vertical `}>
                  <form
                    method="post"
                    //action="/account/login"
                    id="customer_login"
                    acceptCharset="UTF-8"
                    onSubmit={handleSignUp}
                    autoComplete="nope"
                  >
                    <label className="CustomerName">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="input-full"
                      autoorrect="off"
                      autoCapitalize="off"
                      autoFocus
                    />

                    <label htmlFor="CustomerEmail">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="input-full"
                      type="email"
                      required
                    />

                    <label htmlFor="CustomerPassword">Password</label>
                    <input
                      className="input-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      type="password"
                      required
                      autoComplete="new-password"
                    />

                    <label className="CustomerConfirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="input-full"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      required
                    />

                    <p>
                      <input
                        id="btn"
                        type="submit"
                        className="btn btn--full btn--animate"
                        value="Sign Up"
                      />
                    </p>
                    <p>
                      <a href="/signin" id="customer_register_link">
                        Log In
                      </a>
                    </p>
                  </form>
                </div>
              </div>
              <div className="colors">
                <span
                  onClick={(e) => handleChangeColor("#1dd1a1", e)}
                  className="color-span active"
                  style={{ backgroundColor: "#1dd1a1" }}
                ></span>
                <span
                  onClick={(e) => handleChangeColor("#ff6b6b", e)}
                  className="color-span"
                  style={{ backgroundColor: "#ff6b6b" }}
                ></span>
                <span
                  onClick={(e) => handleChangeColor("#2e86de", e)}
                  className="color-span"
                  style={{ backgroundColor: "#2e86de" }}
                ></span>
                <span
                  onClick={(e) => handleChangeColor("#f368e0", e)}
                  className="color-span"
                  style={{ backgroundColor: "#f368e0" }}
                ></span>
                <span
                  onClick={(e) => handleChangeColor("#ff9f43", e)}
                  className="color-span"
                  style={{ backgroundColor: "#ff9f43" }}
                ></span>
              </div>
            </div>
          </div>
        </main>
      </SignInWrapper>
      <Footer></Footer>

      {/* <div className="sign__container">
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
      </div> */}
    </>
  );
}
