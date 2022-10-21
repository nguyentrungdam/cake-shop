import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { AccountWrapper } from "../../../styles/accountStyle";

const Account = () => {
  return (
    <>
      <Header />
      <AccountWrapper>
        <main className="main-content" id="MainContent">
          <div className="page-width page-content customers">
            <header className="section-header">
              <h1 className="section-header__title">My account</h1>
              <a href="/signin" id="customer_logout_link">
                Log out
              </a>
            </header>
            <div className="grid">
              <div className="grid__item medium-up--two-thirds">
                <h2 className="h3">Order History</h2>
                <p>You haven't placed any orders yet.</p>
              </div>
              <div className="grid__item medium-up--one-third">
                <h3>Account details</h3>
                <p className="h5">Dam Zone</p>
                <p style={{ marginTop: "20px" }}>
                  Dam Zone <br /> United Kingdom
                </p>
                <p>
                  <a href="/account/addresses" className="text-link">
                    View addresses (1)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </AccountWrapper>
      <Footer />
    </>
  );
};

export default Account;
