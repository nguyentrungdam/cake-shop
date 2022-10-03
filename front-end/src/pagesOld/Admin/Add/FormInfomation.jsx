import React from 'react'
import styled from "styled-components";

const FormList = styled.div`

    display: flex !important;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
`
const InfoWrap = styled.div`
    color: black;
    width: 100%;
`

const InfoOne = styled.div`
    display: flex;
    align-items: center;
    background-color: #ced1d575;
    height: 116px;
`
const RowOne = styled.div`
    width: 100%;
    color: #000;
    line-height:36px ;
    border-bottom: 1px solid #a19b9d;
    justify-content: center;
    background-color: #80878d;
    display: flex !important;
   `
const TextDrop = styled.div`
    font-size: 12px;
    padding-left: 1rem !important;
`
const TextOne = styled.span`
    color: white;
    font-size: 17px;
    margin-right:12px;
`
const I = styled.i`
    margin-right:3px;
    font-size:45px;
    margin-left: 18px;
    color : #b3b3b3;
`
const RowTwo = styled.label`
	width: 100%;
    color: #000;
    line-height: 36px;
    border-left: 1px solid #b0adad;
    border-right: 1px solid #b0adad;
    border-bottom: 1px solid #b0adad;
    align-items: center;
    display: flex !important;
    justify-content: space-between;
    margin-bottom: 0rem;
`
const TextPl3 = styled.div`
	width: calc(100% - 85px);
    font-size: 14px;
    padding-left: 1rem !important;
`
const ClassText = styled.span`
    margin-right: 10px;

	
`

const TextInfo = styled.div`
	font-size: 13px;
    margin-right: 7px;
    color: #ee4d2d;
`
const Ii = styled.i`
	margin-right: 5px;
    margin-left: 5px;
`
const I3 = styled.span`
	margin-right: 5px;
    margin-left: 5px;
`
const DIV = styled.div`
margin-right: 5px;
margin-left: 5px;
`
const DIV1 = styled.div`
    display: flex;
    align-items: center;
`
const DIV2 = styled.div`
    font-size: 1rem;
    margin-right: -0.625rem;
`

function FormInfomation() {
    return (
        <FormList>
            <InfoWrap>
                <InfoOne>
                <I3><I className="fa fa-user-circle-o"></I></I3>
                <DIV>
                    <DIV1>
                        <DIV2>1911161</DIV2>
                    </DIV1>
                    <DIV1>
                        <DIV2>Đã tham gia 11/02/2016</DIV2>
                    </DIV1>
                    <DIV1>
                        <DIV2>Người theo dõi 1 | Theo dõi 195</DIV2>
                    </DIV1>
                </DIV>
                </InfoOne>
                <RowOne>
                    <TextDrop>
                        <TextOne><Ii className="fa fa-pencil-square-o"></Ii>Sửa ảnh bìa</TextOne>
                    </TextDrop>
                </RowOne>
               
               
                <RowTwo>
                    <TextPl3>
                        <ClassText ><Ii className="fa fa-laptop"></Ii>Giao diện shop trên máy tính</ClassText>
                    </TextPl3>
                    <TextInfo>Xem<Ii className="fa fa-angle-right"></Ii></TextInfo>
                </RowTwo>
                <RowTwo>
                    <TextPl3>
                        <ClassText ><Ii className="fa fa-phone"></Ii>Sản phẩm</ClassText>
                    </TextPl3>
                    <TextInfo>0<Ii className="fa fa-angle-right"></Ii></TextInfo>
                </RowTwo>
                <RowTwo>
                    <TextPl3>
                        <ClassText ><Ii className="fa fa-commenting-o"></Ii>Tỉ lệ phản hồi</ClassText>
                    </TextPl3>
                    <TextInfo>57%</TextInfo>
                </RowTwo>
                <RowTwo>
                    <TextPl3>
                        <ClassText ><Ii className="fa fa-clock-o"></Ii>Thời gian phản hồi</ClassText>
                    </TextPl3>
                    <TextInfo>Trong vài giờ</TextInfo>
                </RowTwo>
                <RowTwo>
                    <TextPl3>
                        <ClassText ><Ii className="fa fa-star-o"></Ii>Đánh giá shop</ClassText>
                    </TextPl3>
                    <TextInfo>0</TextInfo>
                </RowTwo>
                <RowTwo>
                    <TextPl3>
                        <ClassText ><Ii className="fa fa-check-circle-o"></Ii>Tỉ lệ đơn không thành công</ClassText>
                    </TextPl3>
                    <TextInfo>5%</TextInfo>
                </RowTwo>
        </InfoWrap>
    </FormList>
    )
}

export default FormInfomation;

