import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateUserInfo } from "../../../../slices/authSlice";
import { phoneSchema, nameSchema } from "../../../../validation/authValidations";
const UserInfo = styled.div`
  margin-top: 30px;
`;

const ItemUserInfo = styled.div`
  margin-bottom: 25px;

  .warning {
    border: 2px solid #EE4D2D;
  }
`;

const LabelBrown = styled.label`
  color: ${({ theme }) => theme.textColorBrown};
  display: inline-block;
  width: 150px;
  height: 20px;
  max-width: 100%;
  text-align: right;
  margin-right: 27px;
`;

const InputText = styled.input`
  height: 35px;
  width: 450px;
  background-color: ${({ theme }) => theme.backGroundWhite};
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 2px;
  padding-left: 10px;
`;

const TextActionCss = styled.a`
  color: ${({ theme }) => theme.textColorBlue};
  margin-left: 10px;
`;

const ButtonPrimary = styled.button`
  height: 40px;
  width: 70px;
  background-color: ${({ theme }) => theme.mainColor};
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.textColorWhite};

  :hover {
    background-color: ${({ theme }) => theme.btnPrimaryColorHover};
  }
`;

const ChooseImg = styled.section`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 50px;
  padding-left: 40px;
  border-left: 1px solid ${({ theme }) => theme.lineColor};

  .wrapChooseImg {
    position: relative;

    &:hover {
      button {
        background-color: ${({ theme }) => theme.backGroundBrown};
      }
    }
  }

  .chooseFile {
    position: relative;
    max-width: 100px;
    height: 40px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
  }
`;

const ProfileImage = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 5rem;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ButtonWhite = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 100px;
  z-index: 1;
  background-color: ${({ theme }) => theme.backGroundWhite};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 2px;
`;
const CenterHandle = styled.div`
  width: 970px;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
    profilePicture: null,
    profilePictureToChange: null,
  });

  useEffect(() => {
    if (user) {
      setUserInfo({
        ...userInfo,
        name: user.name,
        profilePicture: user.profilePicture,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    }
  }, [user]);

  const handleName = (event) => {
    setUserInfo({ ...userInfo, name: event.target.value });
  };

  const handlePhoneNumber = (event) => {
    setUserInfo({ ...userInfo, phoneNumber: event.target.value });
  };

  const checkNameValidation = (value) => {
    nameSchema
      .validate({ name: value })
      .then(() => setNameValid(true))
      .catch(() => setNameValid(false));
  };
  const checkPhoneValidation = (value) => {
    phoneSchema
      .validate({ phone: value })
      .then(() => setPhoneValid(true))
      .catch(() => setPhoneValid(false));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", userInfo.name);
    form.append("phoneNumber", userInfo.phoneNumber);
    if (userInfo.profilePictureToChange) {
      form.append("profilePicture", userInfo.profilePictureToChange);
    }
    if (!nameValid) {
      alert("Tên người dùng phải có tối thiểu có 5 kí tự");
    }
    else if (!phoneValid) {
      alert("Số điện thoại phải là số và nằm trong khoảng 10-11 kí tự");
    }
    else {
      try {
        const res = await dispatch(updateUserInfo(form)).unwrap();
        if (res.status === 202) {
          alert("Cập nhật thông tin thành công !");
        }
      } catch (err) {
        alert("Vui lòng kiểm tra lại các thông tin cho chính xác !");
      }
    }
  };

  const handleSelectImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserInfo({
          ...userInfo,
          profilePicture: reader.result,
          profilePictureToChange: e.target.files[0],
        });
      } else return;
    };
    reader.readAsDataURL(e.target.files[0]);
  };



  return (
    <React.Fragment>
      {loading ? (
        <CenterHandle>Loading...</CenterHandle>
      ) : (
        <React.Fragment>
          <UserInfo>
            <ItemUserInfo>
              <LabelBrown>Tên</LabelBrown>
              <InputText className={nameValid ? "" : "warning"}
                onChange={handleName} defaultValue={user.name}
                onBlur={(e) => checkNameValidation(e.target.value)} />
            </ItemUserInfo>
            <ItemUserInfo>
              <LabelBrown>Email</LabelBrown>
              <InputText defaultValue={user.email} disabled />
            </ItemUserInfo>
            <ItemUserInfo>
              <LabelBrown>Số Điện Thoại</LabelBrown>
              <InputText className={phoneValid ? "" : "warning"}
                type="number"
                onChange={handlePhoneNumber}
                defaultValue={user.phoneNumber === undefined ? "" : user.phoneNumber ?  user.phoneNumber : ""}
                onBlur={(e) => checkPhoneValidation(e.target.value)} />
            </ItemUserInfo>
            <ItemUserInfo>
              <LabelBrown />
              <ButtonPrimary onClick={handleSave}>Lưu</ButtonPrimary>
            </ItemUserInfo>
          </UserInfo>
          <ChooseImg>
            <ProfileImage
              src={userInfo.profilePicture || user.profilePicture}
            />
            <div className="wrapChooseImg">
              <input
                className="chooseFile"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleSelectImage}
              />
              <ButtonWhite>Chọn Ảnh</ButtonWhite>
            </div>
            <label style={{ color: "#555555CC", marginTop: "15px" }}>
              Dụng lượng file tối đa 1 MB
              <br />
              Định dạng:.JPEG, .PNG
            </label>
          </ChooseImg>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BodyUserInfo = () => {
  return (
    <Container>
      <Profile />
    </Container>
  );
};

export default BodyUserInfo;
