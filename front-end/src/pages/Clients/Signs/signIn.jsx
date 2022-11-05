import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signin } from "../../../slices/accountSlice";
import { useEffect } from "react";
import { SignInWrapper } from "../../../styles/signInStyle";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [errIcon, setErrIcon] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hideResetPassword, setHideResetPassword] = useState("");
  const [displayResetPassword, setDisplayResetPassword] = useState("hide");

  const handleResetPassword = async (e) => {};
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
        const res = await dispatch(
          signin({ Email: email, Password: password })
        ).unwrap();
        if (res.data.success && res.data.account.Role === "user") {
          setErr("Người dùng đăng nhập thành công");
          setErrIcon("success");
          notify(1);
          setTimeout(function () {
            navigate("/");
          }, 1000);
        } else {
          setErr("Admin đăng nhập thành công");
          setErrIcon("success");
          notify(0);
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
  const notify = (prop) => {
    if (prop) {
      toast.success("🎂 User Login Success !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    } else {
      toast.error("🎂 Admin Login Success !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangeColor = (color, e) => {
    let btn = document.getElementById("btn");
    let btn2 = document.getElementById("btn-2");
    let txt = document.getElementById("txt");
    if (color === "#000") {
      document.getElementById("signinwrapper").style.backgroundColor = "#fff";
    } else {
      document.getElementById("signinwrapper").style.backgroundColor = color;
    }
    btn.style.background = color;
    btn2.style.background = color;
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
      <SignInWrapper id="signinwrapper">
        <main className="main-content" id="MainContent">
          <div className="page-width page-content">
            <div className="grid">
              <div className="grid__item medium-up--one-third medium-up--push-one-third">
                <header className="section-header">
                  <h1 id="txt" className="section-header__title">
                    Login
                  </h1>
                </header>
                <div
                  id="CustomerLoginForm"
                  className={`form-vertical ${hideResetPassword} `}
                >
                  <form method="post" id="customer_login" acceptCharset="UTF-8">
                    <input
                      type="hidden"
                      name="form_type"
                      value="customer_login"
                    ></input>
                    <label htmlFor="CustomerEmail">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="input-full"
                      type="email"
                      required
                      autoorrect="off"
                      autoCapitalize="off"
                      autoFocus
                    />

                    <div className="grid">
                      <div className="grid__item one-half">
                        <label htmlFor="CustomerPassword">Password</label>
                      </div>
                      <div
                        className="grid__item one-half text-right"
                        onClick={() => {
                          setHideResetPassword("hide");
                          setDisplayResetPassword("display");
                        }}
                      >
                        <small className="label-info">
                          <a
                            href="#recover"
                            id="RecoverPassword"
                            className="js-no-transition"
                          >
                            Forgot?
                          </a>
                        </small>
                      </div>
                    </div>
                    <input
                      className="input-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                      placeholder="Password"
                      type="password"
                      required
                    />

                    <p>
                      <input
                        id="btn"
                        type="submit"
                        className="btn btn--full btn--animate"
                        value="Sign In"
                        onClick={handleLogin}
                      />
                    </p>
                    <p>
                      <a href="/signup" id="customer_register_link">
                        Create account
                      </a>
                    </p>
                  </form>
                </div>

                <div
                  id="RecoverPasswordForm"
                  className={`${hideResetPassword} ${displayResetPassword}`}
                >
                  <h2>Reset your password</h2>
                  <p>We will send you an email to reset your password.</p>

                  <div className="form-vertical">
                    <form
                      method="post"
                      action="/account/recover"
                      acceptCharset="UTF-8"
                      onSubmit={handleResetPassword}
                    >
                      <input
                        type="hidden"
                        name="form_type"
                        value="recover_customer_password"
                      ></input>
                      <label htmlFor="RecoverEmail">Email</label>
                      <input
                        type="email"
                        // value=""
                        name="email"
                        id="RecoverEmail"
                        className="input-full"
                        autoCorrect="off"
                        autoCapitalize="off"
                      ></input>

                      <p>
                        <input
                          type="submit"
                          className="btn btn--animate"
                          value="Submit"
                          id="btn-2"
                        />
                      </p>
                      <button
                        type="button"
                        id="HideRecoverPasswordLink"
                        onClick={() => {
                          setHideResetPassword("");
                          setDisplayResetPassword("hide");
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="colors">
                <span
                  onClick={(e) => handleChangeColor("#000", e)}
                  className="color-span active"
                  style={{ backgroundColor: "#fff" }}
                ></span>
                <span
                  onClick={(e) => handleChangeColor("#1dd1a1", e)}
                  className="color-span"
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
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}
