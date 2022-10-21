import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { AddressesWrapper } from "../../../styles/addressesStyle";
const Addresses = () => {
  const [hideAddAdress, setHideAddAdress] = useState("hide");
  const [hideEditAdress, setHideEditAdress] = useState("hide");
  return (
    <>
      <Header />
      <AddressesWrapper>
        <main className="main-content" id="MainContent">
          <div className="page-width page-content">
            <header className="section-header">
              <a
                href="#"
                className="btn address-new-toggle js-no-transition"
                onClick={() => {
                  setHideAddAdress("");
                }}
              >
                Add address
              </a>

              <h1 className="section-header__title">Addresses</h1>
            </header>

            <div className="grid">
              <div className="grid__item medium-up--two-thirds">
                <div
                  id="AddressNewForm"
                  className={`form-vertical js-address-form ${hideAddAdress}`}
                >
                  <form
                    method="post"
                    action="/account/addresses"
                    id="address_form_new"
                    acceptCharset="UTF-8"
                  >
                    <h2 className="h3">Add address</h2>
                    <div className="grid grid--small">
                      <div className="grid__item one-half small--one-whole">
                        <label htmlFor="AddressFullNameNew">Full name</label>
                        <input
                          type="text"
                          id="AddressFullNameNew"
                          className="input-full"
                          name="address[last_name]"
                          autoCapitalize="words"
                        />
                      </div>
                    </div>

                    <div className="grid grid--small">
                      <div className="grid__item medium-up--one-half">
                        <label htmlFor="AddressCityNew">Address</label>
                        <input
                          type="text"
                          id="AddressCityNew"
                          className="input-full"
                          name="address[city]"
                          autoCapitalize="words"
                        />
                      </div>

                      <div className="grid__item medium-up--one-half">
                        <label htmlFor="AddressPhoneNew">Phone</label>
                        <input
                          type="tel"
                          id="AddressPhoneNew"
                          className="input-full"
                          name="address[phone]"
                        />
                      </div>
                    </div>

                    <p>
                      <input
                        type="checkbox"
                        id="address_default_address_new"
                        name="address[default]"
                      />
                      <label
                        htmlFor="address_default_address_new"
                        className="inline"
                      >
                        Set as default address
                      </label>
                    </p>

                    <input
                      type="submit"
                      className="btn btn-add-address"
                      value="Add adress"
                    />
                    <button
                      type="button"
                      className="text-link address-new-toggle"
                      onClick={() => {
                        setHideAddAdress("hide");
                      }}
                    >
                      &nbsp;&nbsp;Cancel
                    </button>
                  </form>
                </div>

                <p className="h4">Default</p>

                <p>
                  Dam Zone
                  <br />
                  United Kingdom
                </p>

                <p style={{ margin: "-20px 0 40px" }}>
                  <button
                    type="button"
                    className="btn btn--small address-edit-toggle"
                    data-form-id="7962112983291"
                    onClick={() => {
                      setHideEditAdress("");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: "6px" }}
                    type="button"
                    className="btn btn--secondary btn--small address-delete"
                    data-form-id="7962112983291"
                    data-confirm-message="Are you sure you wish to delete this address?"
                  >
                    Delete
                  </button>
                </p>

                <div
                  id="EditAddress_7962112983291"
                  className={`form-vertical js-address-form ${hideEditAdress}`}
                >
                  <form
                    method="post"
                    action="/account/addresses/7962112983291"
                    id="address_form_7962112983291"
                    acceptCharset="UTF-8"
                  >
                    <hr className="hr--large" />
                    <h2 className="h3">Edit address</h2>

                    <div className="grid grid--small">
                      <div className="grid__item one-half small--one-whole">
                        <label htmlFor="AddressFullName_7962112983291">
                          Full name
                        </label>
                        <input
                          type="text"
                          id="AddressFullName_7962112983291"
                          className="input-full"
                          name="address[last_name]"
                          autoCapitalize="words"
                        />
                      </div>
                    </div>

                    <div className="grid grid--small">
                      <div className="grid__item one-half small--one-whole">
                        <label htmlFor="AddressCityNew">Address</label>
                        <input
                          type="text"
                          id="AddressCityNew"
                          className="input-full"
                          name="address[city]"
                          autoCapitalize="words"
                        />
                        <label htmlFor="AddressPhone_7962112983291">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="AddressPhone_7962112983291"
                          className="input-full"
                          name="address[phone]"
                        />
                      </div>
                    </div>

                    <p>
                      <input
                        type="checkbox"
                        id="address_default_address_7962112983291"
                        name="address[default]"
                      />
                      <label
                        htmlFor="address_default_address_7962112983291"
                        className="inline"
                      >
                        Set as default address
                      </label>
                    </p>

                    <input
                      type="submit"
                      className="btn btn-add-address"
                      value="Update address"
                    />
                    <button
                      type="button"
                      className="text-link address-edit-toggle"
                      data-form-id="7962112983291"
                      onClick={() => {
                        setHideEditAdress("hide");
                      }}
                    >
                      &nbsp;&nbsp;Cancel
                    </button>
                    <input type="hidden" name="_method" value="put" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AddressesWrapper>
      <Footer />
    </>
  );
};

export default Addresses;
