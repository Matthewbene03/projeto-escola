import styled from "styled-components";
import * as colors from "../../config/colors"
import { FaUserCircle } from "react-icons/fa";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  label{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: black;
  }

  input{
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 5px;
    
    &:focus{
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
  position: relative;
  margin-top: 30px;

  img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background:${colors.primaryColor};
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const IconUserCircle = styled(FaUserCircle)`
  color: ${colors.primaryDarkColor};
  width: 180px;
  height: 180px;
`;
