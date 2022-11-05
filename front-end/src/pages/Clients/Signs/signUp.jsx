import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../../slices/accountSlice";
import { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { SignInWrapper } from "../../../styles/signInStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
      console.log("Tên tối thiểu 3 ký tự");
      setErrIcon("error");
    } else if (!email.includes(".com", 0)) {
      console.log("Email phải có .com");
      setErrIcon("warning");
    } else if (password.length < 6 || confirmPassword.length < 6) {
      console.log("Độ dài tối thiểu là 6");
      setErrIcon("error");
    } else if (password !== confirmPassword) {
      console.log("Mật khẩu không trùng khớp!");
      setErrIcon("error");
    } else {
      try {
        const res = await dispatch(
          signup({ FullName: name, Email: email, Password: password })
        ).unwrap();
        if (res.data.success) {
          console.log(res);
          notify(1);
          setTimeout(function () {
            navigate("/");
          }, 2000);
        } else {
          notify(0);
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
    if (color === "#000") {
      document.getElementById("signinwrapper").style.backgroundColor = "#fff";
    } else {
      document.getElementById("signinwrapper").style.backgroundColor = color;
    }
    btn.style.background = color;
    txt.style.borderColor = color;
    //set active///////
    document.querySelectorAll(".color-span").forEach(function (item) {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  //TODO : function notify

  const notify = (prop) => {
    if (prop) {
      toast.success("🎂 Register Success !", {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("🎂 Register Fail !", {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // toast("🦄 Register Success!", {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  // });
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
                    id="customer_login"
                    acceptCharset="UTF-8"
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
                        onClick={handleSignUp}
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
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}
