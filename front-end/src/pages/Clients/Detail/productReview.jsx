import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductReview } from "../../../slices/productSlice";

export default function ProductReview() {
  const stars = Array(5).fill(0);
  const [comment, setComment] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const { productDetail } = useSelector((state) => state.product);
  // const { errorReview } = useSelector((state) => state.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const rating = currentValue;

  const productId = productDetail._id;

  const handleAddProductReview = async (e) => {
    e.preventDefault();
    const review = await dispatch(
      addProductReview({ rating, comment, productId })
    ).unwrap();
    // console.log(review);
    if (review.status === 202) {
      alert("Thành công hãy nhấn F5");
    } else if (review.status !== 400) {
      alert("Mỗi sản phẩm chỉ được đánh giá 1 lần");
      navigate("/signin");
    }
  };

  return (
    <Box className="productSpecification">
      <Box className="productSpecification__title">BÌNH LUẬN</Box>
      <div className="title__reviews" key={productDetail._id}>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                style={{
                  mariginRight: 10,
                  cursor: "pointer",
                }}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
        <textarea
          className="textarea"
          placeholder="Nhập đánh giá của bạn"
          style={styles.textarea}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button style={styles.button} onClick={handleAddProductReview}>
            Gửi
          </button>
        </div>
      </div>
      <React.Fragment>
        {productDetail.reviews?.map((item) => (
          <div className="content__commentStore" key={item._id}>
            <div className="content__area">
              <img src={item.user.profilePicture} />
              <div className="content">
                <div className="nameUser">
                  <h3>{item.user.name}</h3>
                </div>
                <div className="commentUser">
                  <div className="__dateAndCancel">
                    <p>{item.createdAt}</p>
                  </div>
                  <div className="__rating">
                    <ReactStars
                      {...{
                        size: 25,
                        value: item.rating,
                        edit: false,
                        isHalf: true,
                      }}
                    />
                  </div>
                  <div className="__comment">
                    <p>{item.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    </Box>
  );
}

const colors = {
  orange: "FFBA5A",
  grey: "#a9a9a9",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    marigin: "20px 0",
    minHeight: 100,
    padding: 10,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 1100,
    padding: 10,
  },
};
