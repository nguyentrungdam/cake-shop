import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { signin } from "../../../slices/authSlice";
import { useEffect } from "react";
import { SignInWrapper } from "../../../styles/signInStyle";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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
      <Header></Header>
      <SignInWrapper>
        <main className="main-content" id="MainContent">
          <div className="page-width page-content">
            <div className="grid">
              <div className="grid__item medium-up--one-third medium-up--push-one-third">
                <header className="section-header">
                  <h1 className="section-header__title">Login</h1>
                </header>
                <div
                  id="CustomerLoginForm"
                  className={`form-vertical ${hideResetPassword} `}
                >
                  <form
                    method="post"
                    action="/account/login"
                    id="customer_login"
                    acceptCharset="UTF-8"
                    onSubmit={handleLogin}
                  >
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
                      placeholder="Password"
                      type="password"
                      required
                    />

                    <p>
                      <input
                        type="submit"
                        className="btn btn--full btn--animate"
                        value="Sign In"
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
            </div>
          </div>
        </main>
      </SignInWrapper>
      <Footer></Footer>
    </>
  );
}
