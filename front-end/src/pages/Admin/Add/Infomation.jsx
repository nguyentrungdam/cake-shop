import React from 'react'
import styled from "styled-components";

const InfomationList = styled.div`
    display: flex !important;
    -webkit-box-ordinal-group: 14;
    -webkit-box-flex: 0;
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
    order: 13;
`
const ContactWrap = styled.div`
    background: #fff;
    padding: 0 60px;
`

const ContactForm = styled.form`
   display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
const Row = styled.div`
   display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`
const ColMd = styled.div`
    flex: 0 0 85%;
    max-width: 100%;
`
const FormGroup = styled.div`
    margin-bottom: 1rem;
`
const ContactLabel = styled.label`
	color: #000;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
`
const FormControl = styled.input`
	border: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 0;
    height: 42px;
    
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    margin-top: 10px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
`
const ColMd6 = styled.div`
	
`
const Submit = styled.input`
	    background: #ee4d2d !important;
    border-color: #ee4d2d !important;
    color: #fff;
    transition: none;
    padding: 12px 16px;
    cursor: pointer;
    border-width: 1px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
    position: relative;
    margin-bottom: 20px;
   
    
`
const Submitting = styled.div`
	float: left;
    width: 100%;
    padding: 10px 0;
    display: none;
    font-size: 16px;
    font-weight: bold;
`
const Add = styled.button`
	  
      width: 214px;
    height: 123px;
    display: flex;
    color: black;
    transition: none;
    cursor: pointer;
    border: 1px dashed black;
    background-color: white;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    
`
const DIV1 = styled.div`
    font-size: 30px;
    color: #a2a2ad;
`
const DIV2 = styled.div`
color: #a2a2ad;
	  
`
function Infomation() {
    return (
	<InfomationList>
		<ContactWrap>
				<ContactForm>
					<Row>
						<ColMd>
							<FormGroup>
								<ContactLabel for="subject">Tên Shop</ContactLabel>
								<FormControl type="text" name="subject" id="subject" placeholder="Subject" />
							</FormGroup>
						</ColMd>
					<ColMd6>
						<FormGroup>
							<ContactLabel for="name">Mô tả hình ảnh và video</ContactLabel>
									<Add type="button" >
                                        <ColMd6>
                                            <DIV1>+</DIV1>
                                            <DIV2>Thêm hình ảnh % video (0/5)</DIV2>
                                        </ColMd6>

                                    </Add >
					    </FormGroup>
			        </ColMd6>											
					<ColMd>
							<FormGroup>
								<ContactLabel for="#">Mô tả shop</ContactLabel>
									<FormControl name="message" id="message" cols="30" rows="4" placeholder="Message"></FormControl>
							</FormGroup>
					</ColMd>
					<ColMd>
							<FormGroup>
								<Submit type="submit" value="Lưu"  />
								<Submitting classname="submitting"></Submitting>
						    </FormGroup>
					</ColMd>
				</Row>
				</ContactForm>
			</ContactWrap>
		</InfomationList>
    )
}

export default Infomation;
