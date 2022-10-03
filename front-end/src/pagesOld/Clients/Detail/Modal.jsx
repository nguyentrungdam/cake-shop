import React from "react";
import "../../../css/Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalFooter">
          <button onClick={() => closeModal(false)} className="cancelBtn">
            X
          </button>
        </div>
        <div>
          <img
            style={{
              width: 80,
              alignItems: "center",
              display: "flex",
              justifyItems: "center",
            }}
            src="https://cachbothuocla.vn/wp-content/uploads/2019/03/tick-xanh.png"
            className="modalImg"
          />
        </div>
        <div className="modalTitle">
          <h5>Sản phẩm đã được thêm vào giỏ hàng</h5>
        </div>
      </div>
    </div>
  );
}

export default Modal;
